module.exports = {
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
	markdown: {
		lineNumbers: true, // 代码块显示行号
	},
	themeConfig: {
		logo: "/radar.png",
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
		displayAllHeaders: true,
		nav: [
			{ text: "Home", link: "/" }, // 内部链接 以docs为根目录
			{ text: "文档", link: "/install/" }, // 内部链接 以docs为根目录
			{ text: "Github", link: "https://github.com/CyanideCN/PyCINRAD" }, // 内部链接 以docs为根目录
			{ text: "Pysoer", link: "https://github.com/pysoer/" }, // 外部链接
			{ text: "QQ群", link: "https://qm.qq.com/cgi-bin/qm/qr?k=39_2pSpPnQg24dovCAXxN0eMKmVR8aX4&jump_from=webapi&authKey=tvKFX6eekUrBDJ/oRczm7JXKKTnM1Yfk+D3C9H6wacwVV2uuJ92lZj6DrPG9uo3p" }, // 外部链接
		],
		sidebar: [
			{
				title: "简介",
				path: "/install",
				children: [
					{
						title: "安装",
						path: "/install/install.md",
					},
					{
						title: "引用导入",
						path: "/install/startTest.md",
					},
				],
			},
			{
				title: "数据读取",
				path: "/io",
				children: [
					{
						title: "0.认识文件类型",
						path: "/io/ftype.md",
					},
					{
						title: "1.标准格式基数据",
						path: "/io/StandardData.md",
					},
					{
						title: "2.非标准格式基数据",
						path: "/io/CinradReader.md",
					},
					{
						title: "3.相控阵雷达基数据",
						path: "/io/PhasedArrayData.md",
					},
					{
						title: "4.衍生产品计算",
						path: "/io/calc.md",
					},
					{
						title: "5.标准格式产品rose2.0",
						path: "/io/StandardPUP.md",
					},
					{
						title: "6.探测中心天气雷达拼图系统v3产品",
						path: "/io/MocMosaic.md",
					},
					{
						title: "7.swan3产品",
						path: "/io/SWAN3.md",
					},
				],
			},
			{
				title: "数据可视化",
				path: "/visualize",
				children: [
					{
						title: "画图",
						path: "/visualize/PPI.md",
					},
					{
						title: "雷达拼图",
						path: "/visualize/GridMapper.md",
					},
				],
			},
			{
				title: "其他",
				path: "/other",
				children: [
					{
						title: "Pyinstaller打包",
						path: "/other/pyinstaller.md",
					},
					{
						title: "修改基数据源文件",
						path: "/other/editBfile.md",
					},
				],
			},
		],
		repo: "pysoer/PyCINRADDoc",
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
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
	},
};
