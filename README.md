# myxrcrs's sided blocks维护文档

## 工程环境配置

需要安装JDK，配置方法自行百度。

接下来的操作需要保证网络环境足够科学。

- 安装nodejs，git和其他必要的程序（比如文本编辑器）

- 克隆工程文件：

```bash
git clone https://github.com/CrSjimo/sided-blocks.git
```

- 打开项目

如果编辑器/IDE带有gradle支持，则应该会自动开始构建和配置依赖项。如果没有，则执行：

```bash
./gradlew
```

将会下载Gradle Wrapper和项目所需依赖文件。下载时长视网络环境而定。

可能在失败后重新下载时会玄学出现一些文件头为空的问题。如果遇到请尝试清除gradle的cache目录再重试。

有关项目配置的更多问题请自行百度。

## 方块管理器

使用方块管理器之前需要配置好nodejs

事实上，在没有配置好gradle的情况下也能增加方块，只是不能打包成jar包。

以下出现的所有方块材质的指定，格式均为ResourceLocation，例如：

`cobblestone`

`minecraft:dirt` *（minecraft作为命名空间的时候可以省略）*

`myxrsidedblocks:classroom_concrete`

可用的材质名称请到minecraft资源包的`assets/minecraft/textures/block/`目录下查询，或者自行向mod项目的`assets/myxrsidedblocks/textures/block/`目录下添加。

### 增加方块

#### 增加`sided`方块

```bash
node blockm add sided <main> <side>
```

  - main: 主要方块材质
  - side: 次要方块材质

#### 增加`triple`方块

```bash
node blockm add triple <side1> <side2> <top1> <top2>
```

  - side1: 侧面材质1（底面将会采用这一材质）
  - side2: 侧面材质2
  - top1: 顶面材质1
  - top2: 顶面材质2

#### 增加`winedge`方块

```bash
node blockm add winedge <cover> <side> <top>
```

  - cover: 窗框外面材质（例如：走廊窗户的窗框外面为bricks，这也是玉米高中大部分窗框外面的材质）
  - side: 窗框侧面材质（例如: 走廊窗户的窗框侧面为polished_andesite）
  - top: 窗框顶面材质（例如: 走廊窗户的窗框侧面为polished_andesite）

#### 增加`slab`方块

```bash
node blockm add slab <top> <side> <bottom>
```

请自行根据参数名推断是什么材质。

### 移除方块

命令格式同增加方块，但是需要把`add`换成`remove`

如果试图移除的方块不存在，程序退出时将会返回非零返回值。

~~PS: 当我写完这句话时我意识到大部分终端模拟器在未安装插件的情况下看不到返回值，于是我给方块管理器移除方块的退出修改了一下。~~

并且输出一条警告，提示方块不存在。

### 生成相关文件

```bash
node blockm generate
```

程序将会生成之前增加的方块的模型，方块状态和Java类，同时删除之前移除过的方块的相关文件。

如果生成时出现了`WARN-filesystem-errno`，则是生成文件时出现了文件系统错误。可能是将要操作的文件已经被删除或者正在被占用。请根据提示信息自行解决。

如果生成时出现了`PROMPT-translation`，则是出现了minecraft自带翻译文件中不存在的方块。请根据提示的语言名称（`en_us`或`zh-cn`）和方块名称输入其翻译。

### 列出已有方块

```bash
node blockm ls
```

### 排序

```bash
node blockm sort
```

将会把所有方块以类型作为第一关键字，名称作为第二关键字，按照字典序排序。

## 将项目上传到GitHub

请联系CRS将你设置为项目的contributor

## 打包生成jar

```bash
./gradlew jar
```

然后jar文件就会生成在`build/libs/`目录下。