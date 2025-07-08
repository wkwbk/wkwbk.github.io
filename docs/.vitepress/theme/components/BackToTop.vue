<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from "vue";

const showBackTop = ref(false); // 初始状态设为 false
const scrollProgress = ref(0);

// 圆形进度条计算
const radius = 42;
const circumference = computed(() => 2 * Math.PI * radius);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 使用更高效的节流函数
function throttle(fn, delay = 50) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}

const updateScrollProgress = () => {
  const { scrollY, innerHeight } = window;
  const { scrollHeight } = document.documentElement;
  const totalScroll = scrollHeight - innerHeight;
  scrollProgress.value = totalScroll > 0 ? Math.min(scrollY / totalScroll, 1) : 0;
};

const handleScroll = throttle(() => {
  // 当滚动超过 100px 时显示，否则隐藏
  const shouldShow = window.scrollY > 100;
  showBackTop.value = shouldShow;
  updateScrollProgress();
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  updateScrollProgress();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition name="fade">
    <div class="back-top-container" v-show="showBackTop">
      <svg class="progress-ring" viewBox="0 0 100 100">
        <circle class="progress-ring-background" cx="50" cy="50" r="42" />
        <circle class="progress-ring-circle" cx="50" cy="50" r="42" :style="{ 'stroke-dashoffset': circumference - scrollProgress * circumference }" />
      </svg>
      <div class="vitepress-backTop-main" title="返回顶部" @click="scrollToTop()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 4h16v2H4zm8 3.586l6.914 6.914l-1.414 1.414l-4.5-4.5V21h-2v-9.586l-4.5 4.5L5.086 14.5z" />
        </svg>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.back-top-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  z-index: 999;
}

.vitepress-backTop-main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #3eaf7c;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background-color 0.2s ease;
}

.vitepress-backTop-main:hover {
  background-color: #71cda3;
}

.progress-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  z-index: 1;
}

.progress-ring-background {
  fill: none;
  stroke: rgba(62, 175, 124, 0.15);
  stroke-width: 3;
}

.progress-ring-circle {
  fill: none;
  stroke: #3eaf7c;
  stroke-width: 3;
  stroke-dasharray: 264; /* 2 * π * 42 */
  stroke-linecap: round;
  transition: stroke-dashoffset 0.15s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
