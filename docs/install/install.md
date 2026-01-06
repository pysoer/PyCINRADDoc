# 安装

本文档运行的cinrad 版本为`v1.9.3`，Python 版本要求: `≥3.9`    
至于`cartopy`,`numpy`,`matplotlib`等库,安装最新版即可，`cartopy`版本>0.22。

安装方法 ①：

```python
pip install cartopy matplotlib numpy cython -U
pip install cinrad -U
```

网速慢的话，在上面命令后边加上 `-i https://pypi.tuna.tsinghua.edu.cn/simple`

安装方法 ②：即源码安装，请先安装[git](https://blog.csdn.net/weixin_42242910/article/details/136297201)

```bash
D:                                         # 进入D盘,因为C盘权限会不够
pip uninstall cinrad                       # 卸载当前版本
git clone https://github.com/CyanideCN/PyCINRAD.git
cd PyCINRAD
python setup.py install
```

pip安装报错: Microsoft Visual C++ 14.0 or greater is required. Get it with “Microsoft C++ Build Tools“
[https://blog.csdn.net/zymhhh/article/details/140642202](https://blog.csdn.net/zymhhh/article/details/140642202)
参考这个方法，把右边那些该勾上的都勾上。特别是windows xx SDK
