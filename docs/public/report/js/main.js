/**
 * 述职报告交互脚本
 * 作者：李伟朋
 * 日期：2026-02-05
 */

// ========== 图片轮播 ==========
class Carousel {
    constructor(element) {
        this.carousel = element;
        this.inner = element.querySelector('.carousel-inner');
        this.slides = element.querySelectorAll('.carousel-slide');
        this.dots = element.querySelectorAll('.carousel-dot');
        this.prevBtn = element.querySelector('.carousel-nav.prev');
        this.nextBtn = element.querySelector('.carousel-nav.next');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        
        if (this.totalSlides > 1) {
            this.init();
        }
    }

    init() {
        // 绑定按钮事件
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // 绑定圆点事件
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });

        // 自动轮播
        this.startAutoPlay();

        // 鼠标悬停时暂停
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goTo(index) {
        if (index < 0) index = this.totalSlides - 1;
        if (index >= this.totalSlides) index = 0;
        
        this.currentIndex = index;
        this.inner.style.transform = `translateX(-${index * 100}%)`;
        
        // 更新圆点状态
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prev() {
        this.goTo(this.currentIndex - 1);
    }

    next() {
        this.goTo(this.currentIndex + 1);
    }

    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => this.next(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
        }
    }
}

// ========== 灯箱功能 ==========
class Lightbox {
    constructor() {
        this.lightbox = null;
        this.init();
    }

    init() {
        // 创建灯箱元素
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'lightbox';
        this.lightbox.innerHTML = `
            <span class="close-btn"><i class="fas fa-times"></i></span>
            <img src="" alt="预览图片">
        `;
        document.body.appendChild(this.lightbox);

        // 关闭按钮事件
        this.lightbox.querySelector('.close-btn').addEventListener('click', () => {
            this.close();
        });

        // 点击背景关闭
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
                this.close();
            }
        });

        // 绑定所有截图点击事件
        this.bindImages();
    }

    bindImages() {
        const screenshots = document.querySelectorAll('.screenshot-single img, .carousel-slide img');
        screenshots.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                this.open(img.src);
            });
        });
    }

    open(src) {
        this.lightbox.querySelector('img').src = src;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========== 滚动动画 ==========
class ScrollAnimator {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.elements = document.querySelectorAll('.fade-in');
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.elements.forEach(el => {
            observer.observe(el);
        });
    }
}

// ========== 平滑滚动增强 ==========
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========== 数字动画 ==========
class NumberAnimator {
    constructor() {
        this.animated = new Set();
        this.init();
    }

    init() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animateNumber(entry.target);
                    this.animated.add(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.stat-number').forEach(el => {
            observer.observe(el);
        });
    }

    animateNumber(element) {
        const text = element.textContent;
        const match = text.match(/(\d+)/);
        
        if (!match) return;
        
        const target = parseInt(match[1]);
        const suffix = text.replace(/\d+/, '');
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), target);
            element.textContent = current + suffix;
            
            if (step >= steps) {
                clearInterval(timer);
                element.textContent = text;
            }
        }, duration / steps);
    }
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    // 初始化所有轮播
    document.querySelectorAll('.screenshot-carousel').forEach(carousel => {
        new Carousel(carousel);
    });
    
    // 初始化灯箱
    new Lightbox();
    
    // 初始化滚动动画
    new ScrollAnimator();
    
    // 初始化平滑滚动
    new SmoothScroll();
    
    // 初始化数字动画
    new NumberAnimator();
    
    console.log('述职报告交互脚本已加载');
});
