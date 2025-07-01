# Android Studio 环境变量设置

在 Android 开发中，配置正确的环境变量对于管理 SDK、模拟器（AVD）和用户数据至关重要。

以下是一些关键的 Android 环境变量及其说明：

- ANDROID_HOME

  ::: tip 提示

  用于指定 Android SDK 安装目录的路径。确保开发环境中的工具能正确找到 SDK。

  **用途：**

  - 指定 SDK 的根目录，供 Android Studio、Gradle 插件和其他工具使用。
  - 确保所有开发工具使用的是正确版本的 SDK。

  **设置示例：**

  ```bash
  setx /m ANDROID_HOME "D:\Android\SDK"
  ```

  :::

- ANDROID_USER_HOME

  ::: tip 提示

  用于指定 Android SDK 相关工具的用户配置目录。默认位置为 `%USERPROFILE%\.android`。

  **用途：**

  - 更改默认的用户配置目录位置，该目录包含 AVD、调试密钥库、SDK 组件缓存等数据。
  - 在多用户环境或需要将数据与系统盘分离的情况下特别有用。

  **设置示例：**

  ```bash
  setx /m ANDROID_USER_HOME "D:\Android\.android"
  ```

  :::

- ANDROID_EMULATOR_HOME（Android 模拟器环境变量）

  ::: tip 提示

  默认位置为 `%ANDROID_USER_HOME%` 目录下。

  如果 `ANDROID_USER_HOME` 未设置，则保存在 `%USERPROFILE%\.android`。

  **用途：**

  - 指定 Android 模拟器配置文件的存储位置。

  **设置示例：**

  ```bash
  setx /m ANDROID_EMULATOR_HOME "D:\Android\.android"
  ```

  :::

- ANDROID_AVD_HOME（AVD 环境变量）

  ::: tip 提示

  默认位置为 `%ANDROID_EMULATOR_HOME%\avd` 目录下。

  如果 `ANDROID_EMULATOR_HOME` 未设置，则保存在 `%ANDROID_USER_HOME%\avd`。

  **用途：**

  - 将 AVD 文件（主要是磁盘映像）移动到空间更大的磁盘分区。
  - 与其他用户共享 AVD 配置。
  - 方便备份和恢复 AVD 数据。

  **设置示例：**

  ```bash
  setx /m ANDROID_AVD_HOME "D:\Android\.android\avd"
  ```

  设置此变量后，新创建的 AVD 将保存在指定目录下。

  :::

- AVD 搜索顺序

  ::: tip 提示

  `emulator -avd <avd_name>` 命令会按照以下顺序搜索 AVD 目录：

  1. `%ANDROID_AVD_HOME%`
  2. `%ANDROID_USER_HOME%\avd`
  3. `%USERPROFILE%\.android\avd`

  :::

- GRADLE_USER_HOME

  ::: tip 提示

  用于指定 Gradle 的用户配置目录。默认位置是 `%USERPROFILE%\.gradle`。

  **用途：**

  - 自定义 Gradle 的缓存、构建缓存、初始化脚本、wrapper 配置等的存储位置。
  - 避免系统盘空间占用过大，或在多项目、多用户环境中集中管理缓存。
  - 提升 Gradle 构建效率（通过共享缓存）或便于备份和迁移。

  **设置示例：**

  ```bash
  setx /m GRADLE_USER_HOME "D:\Android\.gradle"
  ```

  设置后，Gradle 的缓存和配置文件将保存到 `D:\Android\.gradle`，包括依赖包缓存、构建缓存等内容。

  :::
