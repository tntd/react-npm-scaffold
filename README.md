# React+ts+webpack5 npm 组件脚手架

## 可用脚本

在项目目录中，你可以运行以下命令：

### `npm start`

在开发模式下运行应用。
在浏览器中打开[http://localhost:3000](http://localhost:3000)进行查看。

如果你进行了编辑，页面将会重新加载。你还会在控制台中看到任何 lint 错误。

### `npm run build`

为生产环境构建应用到`build`文件夹。
它会在生产模式下正确地打包 React，并优化构建以获得最佳性能。

构建结果会被压缩，文件名中包含哈希值。你的应用已准备好进行部署！
有关[部署](https://facebook.github.io/create-react-app/docs/deployment)的部分可查看更多信息。

### `npm run eject`

> 谨慎使用

**注意：这是一个单向操作。一旦你“弹出”，就无法返回！**

如果你对构建工具和配置选项不满意，可以随时“eject”。这个命令将从你的项目中移除单一的构建依赖。

相反，它会将所有的配置文件和传递性依赖（webpack、Babel、ESLint 等）直接复制到你的项目中，这样你就可以完全控制它们。除了“eject”之外的所有命令仍然有效，但它们将指向复制的脚本，因此你可以对其进行调整。此时，你将完全自主。

### 登录 npm

在终端中登录你的 npm 账号：

```bash
npm login
```

输入你的用户名、密码和邮箱。

### 发布包

运行以下命令发布你的包：

```
npm publish
```

如果一切顺利，你的包将会被发布到 npm。

### 更新包

当你需要更新包时，修改 package.json 中的 version 字段，然后再次运行 npm publish。

---

## 关于 npm publish 的区别

`npm publish` 和 `npm publish --access=public` 的主要区别在于包的访问权限。

### `npm publish`

当你使用 `npm publish` 命令时，npm 会根据以下规则自动确定包的访问权限：

1. **私有包**：如果你在 `package.json` 中设置了 `"private": true`，那么这个包会被认为是私有的，并且只能发布到你组织的私有仓库（如果你有的话）。私有包需要付费订阅。

2. **公共包**：如果你没有设置 `"private": true`，那么默认情况下，npm 会认为你想要发布一个公共包。公共包可以被任何人免费下载和使用。

### `npm publish --access=public`

`npm publish --access=public` 明确告诉 npm 你想要发布一个公共包。即使你在 `package.json` 中设置了 `"private": true`，这个命令也会强制将包发布为公共包。

### 使用场景

- **公共包**：如果你确定要发布一个公共包，并且没有设置 `"private": true`，那么直接使用 `npm publish` 即可。
- **私有包**：如果你想要发布一个私有包，你需要在 `package.json` 中设置 `"private": true`，并且确保你有权限发布到私有仓库。
- **强制公共包**：如果你不小心设置了 `"private": true`，但你实际上想要发布一个公共包，那么可以使用 `npm publish --access=public`。

### 示例

#### 发布公共包

```bash
npm publish
```

#### 强制发布公共包

```bash
npm publish --access=public
```

### 总结

- `npm publish`：根据 `package.json` 中的 `"private"` 字段自动确定包的访问权限。
- `npm publish --access=public`：强制将包发布为公共包，即使 `package.json` 中设置了 `"private": true`。

希望这个解释对你有所帮助！
