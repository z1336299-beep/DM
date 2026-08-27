# Fujian Demao Fastener Co., Ltd — 官网（英文版）

一个纯静态网站（HTML + CSS + 原生 JS，无需构建工具），共 6 个页面，导航结构参照了你们现有网站 dermao.cn：
Home / About Us / Product / Application / News / Contact。已经用上了你提供的真实产品照片和工厂照片。

## 目录结构

```
dermao-website/
├── index.html         首页（Hero 背景用了工厂航拍图）
├── about.html          关于我们（含"Our Factory"真实照片墙）
├── products.html        产品中心（6 大系列真实产品照，含扩展图集）
├── application.html      应用领域（占位结构，待补充）
├── news.html            新闻动态（占位结构，待补充）
├── contact.html         联系我们（含真实电话、地址、工厂航拍图）
├── css/style.css        全局样式（真实 logo 配色：蓝 #1a4fa0 + 红 #e2382c）
├── js/main.js           移动端导航 + 联系表单交互
└── images/
    ├── products/        8 张真实产品照片（已压缩，每张 ~10-20KB）
    └── factory/         8 张真实工厂照片（航拍/车间/仓库/质检/看板，已压缩）
```

## 已经用上的真实信息

来自你发的网站截图 + 工厂/产品照片：

- 公司全称：Fujian Demao Fastener Co., Ltd
- 成立时间：2018 年 6 月 4 日；占地 20,000+ 平方米
- 地址：No. 6-1, Yacheng Town Industrial Park, Xiapu County, Ningde City, Fujian Province, China
- **电话：0593-8070888**（从工厂航拍图上"德茂紧固件"招牌上认出来的，如果不对请告诉我）
- 产品六大系列，并且换成了从你的产品图文件夹（按 913/914/915/916、杯头黑/镍/蓝白、三组合/二组合、针织机专用系列等命名）里挑出的真实照片：
  - Hexagon Socket Screw（杯头黑）
  - Socket Set Screw（DIN 916 系列）
  - Hexagon Head Screw（暂无实拍图，仍是图标占位）
  - Combination Screw（杯头平垫二组合）
  - Knitting Machine Screws（针织机专用内六角挡住螺丝 —— 我之前理解成"针织螺丝"，看了文件夹名才明白是给针织机用的专用螺丝，已经改了描述）
  - Non-Standard Screw（其他非标定制）
  - 另外 products.html 底部还加了一组"More From Our Line"图集（平杯蓝白、圆杯三组合、大扁头特写）
- About 页新增了"Our Factory"真实照片墙：航拍全景、生产看板（能看到"福建德茂紧固件有限公司"字样）、冷镦车间、拉丝车间、仓库
- Logo：根据你发的看板照片里的 logo 重新画了一版矢量图（蓝色+红色几何图形），不是原始文件

## 本地预览

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## ⚠️ 上线前建议替换/确认的内容（已用「[Replace: …]」和橙色虚线标记标出）

1. **电话号码**：0593-8070888 是我从航拍图招牌上认出来的，麻烦帮忙确认一下准确性；邮箱还没有，仍是占位符。
2. **Logo**：现在用的是我重新画的矢量版本，如果有官方 AI/SVG/PNG 透明底源文件，发我可以替换得更精确。
3. **About / Application / News 页面细节**：Honor / Culture 具体文字、Application 六个行业案例、News 三条新闻目前都是占位结构。
4. **Hexagon Head Screw 产品照片**：你提供的产品图里没有找到明显的"外六角螺栓"照片，这一类目前还是图标占位，如果有对应照片可以补上。
5. **资质证书**：首页「Certifications」板块为占位卡片。
6. **产品规格参数表**：`products.html` 里的规格数据（尺寸范围/强度等级）是示例，需要替换为真实参数。
7. **联系表单**：目前只是前端演示，需要接入 Formspree / Getform 等第三方表单服务，或自建接口才能真正收到留言。

## 关于 scrooz.com.au 的参考（已按截图仿制配色/布局）

你发来的 7 张 scrooz.com.au 首页截图我逐段看过了，这版更新把它的**版式结构**搬了过来，但保留了咱们自己的蓝+红品牌色（毕竟 Scrooz 和德茂是同行竞品，直接照搬对方的黄黑+袋鼠视觉识别不合适，仿的是布局手法而不是品牌色）。具体对应关系：

- **顶部深色公告条**（Topbar）：对应 Scrooz 顶部的黑色促销条，放了公司标语 + 电话 + "Request a Quote"。
- **导航栏内的电话号码**（Nav phone）：对应 Scrooz 头部的电话/客服图标区，桌面端 Logo 和菜单右侧常驻显示号码（窄屏自动隐藏）。
- **信任标识横条**（Trust strip）：对应 Scrooz 头部下方那一排信任图标，换成了"免费打样 / 全程质检 / 交期快 / 出口全球"四项。
- **深色圆形图标分类导航**（Category band）：对应 Scrooz 首页的"热门分类"深色板块，六大产品系列做成圆形图标徽章。
- **深色分栏数据条**（Stat band）：对应 Scrooz 那种用竖线分隔的数据展示区，放了成立年份 / 厂区面积 / 产品系列数 / 自产质检这几项已核实过的数据。
- **页脚胶囊按钮**（Footer pill CTA）：对应 Scrooz 页脚顶部的圆角 CTA 按钮组，加了"Request a Quote"+"Call"两个按钮。
- 产品照片墙/图集板块（首页、About、Products 页）延续了上一版"真实照片优先"的思路，对应 Scrooz 底部的产品分类图片墙。

如果之后想进一步贴近 Scrooz 的黄黑配色，或者想要它那种左侧分类树 + 右侧列表的纯目录浏览方式，告诉我可以再调整。

## 部署到免费静态托管平台

### 方式一：Vercel（推荐，简单快速）
1. 注册 [vercel.com](https://vercel.com) 账号（可用 GitHub 账号登录）。
2. 将本项目上传到一个 GitHub 仓库。
3. 在 Vercel 中点击 "Add New Project"，选择该仓库，Framework 选择 "Other"，Build/Output 都留空，点击 Deploy 即可。
4. 部署完成后得到 `*.vercel.app` 域名，也可以在后台绑定 dermao.cn。

### 方式二：Netlify
1. 注册 [netlify.com](https://netlify.com) 账号。
2. 把 `dermao-website` 文件夹拖拽到 Netlify 的部署页面（"Deploy manually"），或连接 GitHub 仓库自动部署。

### 方式三：GitHub Pages
1. 把本项目推送到 GitHub 仓库。
2. 仓库 Settings → Pages，Source 选择对应分支和根目录，保存。
3. 通过 `https://<用户名>.github.io/<仓库名>/` 访问。

无论选择哪种方式，都可以在对应平台的域名设置里把 dermao.cn 指向部署好的网站。

## 后续可以增加的功能

- 中/英文切换（如果国内客户也需要中文版）。
- 产品详情子页面（点击产品卡片进入单独页面，展示更多规格与实拍图/更多角度照片）。
- News 页面接入真实的新闻列表/CMS。
- 在线客服或微信二维码悬浮按钮。
- SEO 优化：完善 meta 描述、结构化数据、提交 Google/百度站长工具。
