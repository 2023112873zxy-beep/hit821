# 哈工大821知识点查询

纯静态学习网站，包含101条知识点、50道主观题和关联查询。无后端、数据库、API密钥及构建依赖。全部学习内容和功能来自已测试版本，保留考试范围及来源核验说明。

## 文件

- index.html：首页及全部知识内容。
- css/styles.css：布局、手机适配、打印样式。
- js/app.js：搜索与导航。
- data/search-index.js：搜索索引。
- assets/：预留静态资源。
- .nojekyll：关闭GitHub Pages的Jekyll处理。

## 发布到GitHub Pages

创建名为hit821的Public空仓库，不勾选初始化README、.gitignore或License。
将此目录的main分支推送到仓库后，打开Settings → Pages：
Source选Deploy from a branch；Branch选main；Folder选/(root)；点击Save。
发布完成后以Pages设置显示的网址为准，通常为https://你的用户名.github.io/hit821/。
无需自定义域名、付费服务或额外GitHub Actions配置。

## 本地预览

在本目录运行 `python3 -m http.server 8000 --bind 127.0.0.1`，打开http://127.0.0.1:8000。Windows可用py替换python3。

## 维护

直接修改本仓库对应文件，再执行git add和git commit，推送main后自动重新发布。
修改知识内容时同时更新data/search-index.js的对应索引。
原hit821-web目录是独立副本，两者不会自动同步。

## 其他平台

Cloudflare Pages可直接上传本目录的网页资源，不需要构建命令。Vercel也能托管，但本项目不需要其框架或服务端能力。

## 资料说明

学习解释为独立归纳，不是官方标准答案；请结合当年考纲及教材使用。页面保留原版本的来源和范围说明。
