import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

export default defineUserConfig({
	bundler: viteBundler(),
	title: "PyCINRAD  官网",
	description: "PyCINRAD官网首页 PyCINRAD文档",
	lang: "zh-CN",
	locales: {
		"/": {
			lang: "zh-CN",
			title: "PyCINRAD  官网",
			description: "PyCINRAD官网首页 PyCINRAD文档",
		},
	},
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
		["link", { rel: "stylesheet", href: "/css/index.css" }],
		["script", { src: "/js/index.js" }],
		["script", { src: "https://hm.baidu.com/hm.js?febea1f4b53924b48c8c661a05d8b63e" }],
	],
	base: "/", // 这是部署到github相关的配置 下面会讲
	theme: hopeTheme({
		darkmode: "auto",
		logo: "/radar.png",
		sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
		displayAllHeaders: true,
		markdown: {
			highlighter:{
				type:"prismjs",
				theme:"tomorrow-night",
			}
		},
		navbar: [
			{ text: "Home", link: "/" ,icon: "mdi:home"}, // 内部链接 以docs为根目录
			{ text: "文档", link: "/install/", icon: "mdi:book-open-page-variant"}, // 内部链接 以docs为根目录
			{ text: "Github",icon:"mdi:github", link: "https://github.com/CyanideCN/PyCINRAD" }, // 内部链接 以docs为根目录
			// { text: "Pysoer",icon:"mdi:github", link: "https://github.com/pysoer/" }, // 外部链接
			{ text: "QQ群", icon:"mdi:qqchat",link: "https://qm.qq.com/cgi-bin/qm/qr?k=39_2pSpPnQg24dovCAXxN0eMKmVR8aX4&jump_from=webapi&authKey=tvKFX6eekUrBDJ/oRczm7JXKKTnM1Yfk+D3C9H6wacwVV2uuJ92lZj6DrPG9uo3p" }, // 外部链接
		],
		sidebar: [
			{
				text: "简介",
				link: "/install/",
				icon: "mdi:home",
				children: [
					{
						text: "安装",
						link: "/install/install.md",
					},
					{
						text: "引用导入",
						link: "/install/startTest.md",
					},
				],
			},
			{
				text: "数据读取",
				link: "/io/",
				icon: "mdi:file-document-outline",
				children: [
					{
						text: "0.认识文件类型",
						link: "/io/ftype.md",
					},
					{
						text: "1.标准格式基数据",
						link: "/io/StandardData.md",
					},
					{
						text: "2.非标准格式基数据",
						link: "/io/CinradReader.md",
					},
					{
						text: "3.相控阵雷达基数据",
						link: "/io/PhasedArrayData.md",
					},
					{
						text: "4.衍生产品计算",
						link: "/io/calc.md",
					},
					{
						text: "5.标准格式产品rose2.0",
						link: "/io/StandardPUP.md",
					},
					{
						text: "6.探测中心拼图v3产品",
						link: "/io/MocMosaic.md",
					},
					{
						text: "7.swan3产品",
						link: "/io/SWAN3.md",
					},
				],
			},
			{
				text: "数据可视化",
				link: "/visualize/",
				icon: "mdi:chart-bubble",
				children: [
					{
						text: "画图",
						link: "/visualize/PPI.md",
					},
					{
						text: "雷达拼图",
						link: "/visualize/GridMapper.md",
					},
				],
			},
			{
				text: "其他",
				link: "/other/",
				icon: "mdi:file-document-edit",
				children: [
					{
						text: "Pyinstaller打包",
						link: "/other/pyinstaller.md",
					},
					{
						text: "修改基数据源文件",
						link: "/other/editBfile.md",
					},
				],
			},
		],
		plugins: {
			icon:{
				assets:"iconify",
			},
			slimsearchPlugin: {
			    
			}
		},
		repo: "pysoer/PyCINRADDoc",
		repoLabel: "文档源码",

		// 以下为可选的编辑链接选项

		// 假如你的文档仓库和项目本身不在一个仓库：
		docsRepo: "pysoer/PyCINRADDoc",
		// 假如文档不是放在仓库的根目录下：
		docsDir: "docs",
		// 假如文档放在一个特定的分支下：
		docsBranch: "main",
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: "帮助我们改善此页面！",
	}),
})
