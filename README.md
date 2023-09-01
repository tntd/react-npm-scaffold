本脚手架通过create-react-app生成，详情可查看官网<a href="https://create-react-app.bootcss.com/" target="_blank">https://create-react-app.bootcss.com/</a>  

## 生成ts脚手架
#### 第1步
```bash
create-react-app my-app  --template typescript
```
#### 第2步
```bash
# 安装babel-cli
npm i babel-cli -D 

# 添加build命令到 package.json
 "build": "rm -rf dist && NODE_ENV=production babel src/ --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,__snapshots__",
```

#### 第3步
将js、jsx改为tsx


#### 第4步
在```package.json```添加发布到npm配置  

```bash
"main": "dist/index.js",
"module": "dist/index.js",
```

## 发布组件到npm
```bash
# 编译项目
npm run build

# 对于私有包和无作用域的包，请使用 
npm publish

# 对于作用域公共包，使用 
npm publish --access=public

# 这里我们用publish命令发布
npm publish
```