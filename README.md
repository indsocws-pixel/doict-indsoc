# DOICT-IndSoc Workshop website (draft)

一个可直接部署在 GitHub Pages 的静态网站初版。以 **IEEE INFOCOM 2027 / 第二届 DOICT-IndSoc** 为首页，并设有 **2026 年首届历史归档页**。

## 页面

- `index.html`：第二届主页、简介、研究方向、重要日期、上届入口。
- `cfp.html`：根据提供的中文宣传通知整理的英文 CFP 草稿。
- `2026/index.html`：首届简介、日期、地点和原 IEEE INFOCOM 网站链接；**不是完整复制**。
- `assets/styles.css`：颜色、字体、布局、响应式样式。
- `assets/favicon.svg`：临时原创文字站标，不是 IEEE 官方 Logo。

## 当前已填入（2027）

- 英文标题（用户提供的第二届版本）：Fusion of Data, Operation, Information, and Communication Technologies for Industrial Internet and Society 5.0
- 截稿日期：2026-12-29
- Workshop：2027-05-24
- 地点：Honolulu, Hawaii, USA
- 论文集/IEEE Xplore：来自当前宣传通知，**公开发布前请确认 IEEE INFOCOM 2027 的最终政策**。

## 对外发布前必须确认

1. 第二届的英文正式会议全称与 2026 版不同，务必征得组委会最终确认。
2. 正式投稿入口（例如 EDAS 的具体会议编号和链接）、页数、排版模板、通知日期、终稿日期、时区（AoE 等）。**目前未填写，也没有复用 2026 的投稿链接。**
3. CFP 英文介绍和 Topics 为根据中文宣传稿编辑形成的草稿，需 CFP 负责人审核。
4. 组委会名单、联系邮箱尚未提供，故暂不放置以免误导。
5. 2026 原网页的完整 CFP、组织委员会和日程暂未迁移；本站仅保存概览和原始网页入口。
6. 未在该草稿中使用受保护的 IEEE/INFOCOM 标志或照片；取得许可后可以替换。
7. CFP 页面底部有面向内部审核的 draft 提示，公开之前建议删去该行。

## GitHub Pages 部署（最简单）

1. 用 Workshop 管理员的 GitHub 账号登录 GitHub；**不要把账号密码发送给他人**。
2. 新建公开仓库，推荐名：`doict-indsoc`（如果希望主页直接是 GitHub 子域名，仓库可以叫 `<yourusername>.github.io`）。
3. 把 ZIP 解压，把**里面的文件和目录**上传到仓库根目录（不要多套一层 `doict-indsoc-site`）。
4. 在仓库中打开 **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**。
5. 访问 `https://<yourusername>.github.io/doict-indsoc/`（如果仓库是 `<yourusername>.github.io` 则访问根域名）。
6. 对外宣传前逐条核对各项 CFP 内容与链接。更新只需在 GitHub 编辑相应 HTML 文件。

> 本仓库尚未被上传到 GitHub，也未发布公网；这是供组委会审阅的初版源码。
