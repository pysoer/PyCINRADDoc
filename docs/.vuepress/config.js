module.exports = {
	title: "PyCINRAD",
	description: "PyCINRAD官网首页 PyCINRAD文档",
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
		["link", { rel: "stylesheet", href: "/css/index.css" }],
	],
	base: "/pycinrad/", // 这是部署到github相关的配置 下面会讲
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
						path: "/install/安装&升级.md",
					},
					{
						title: "快速开始",
						path: "/install/开始测试.md",
					},
				],
			},
			{
				title: "数据读取",
				path: "/io",
				children: [
					{
						title: "标准格式基数据",
						path: "/io/标准格式基数据.md",
					},
					{
						title: "非标准格式基数据",
						path: "/io/非标准格式基数据.md",
					},
					{
						title: "相控阵雷达基数据",
						path: "/io/相控阵雷达基数据.md",
					},
					{
						title: "标准格式产品rose2.0",
						path: "/io/标准格式产品rose2.0.md",
					},
					{
						title: "探测中心天气雷达拼图系统v3产品",
						path: "/io/探测中心天气雷达拼图系统v3产品.md",
					},
					{
						title: "swan3产品",
						path: "/io/swan3产品.md",
					},
				],
			},
			{
				title: "数据可视化",
				path: "/visualize",
				children: [
					{
						title: "画图",
						path: "/visualize/画图.md",
					},
					{
						title: "雷达拼图",
						path: "/visualize/雷达拼图.md",
					},
				],
			},
			{
				title: "其他",
				path: "/other",
				children:[
					{
						title: "修改基数据源文件",
						path: "/other/editBfile.md",
					}
				]
			}
		],
	},
};
