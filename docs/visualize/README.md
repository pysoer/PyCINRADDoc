# 数据可视化
PyCINRAD具备单独的画图接口，即`cinrad.visualize.PPI`，该函数有以下参数：
|参数|数据类型|默认值|功能|
|:---:|:---:|:---:|:---:|
|data|xarray.Dataset|——|雷达数据，为xarray.Dataset类型|
|cmap|Colormap|None|色阶（matplotlib.colors）|
|norm|Normalize|None|色阶范围（matplotlib.colors）|
|nlabel|int|10|色阶条标注个数|
|label|List[str]|None|色阶条标注文字|
|dpi|int|350|图片的分辨率|
|extent|list[float]|None|绘图的经纬度范围 e.g. extent=[90, 91, 29, 30]|
|section||None|在ppi图中绘制的剖面的数据，参考剖面图接口|
|style|str|black|背景颜色:黑色black或白色white或透明transparent|
|add_city_names|bool|False|地图上是否标注城市名|
|plot_labels|bool|True|右侧是否标注文字|
|add_shps|bool|True|地图上是否绘制国省市县边界线|
|text_param|dict|None|所有文字、线条的字体，e.g. {"color": "blue", "fontsize": 12}|


PPI支持`xarray.Dataset`类型数据：

能够画图的数据类型有：
"REF":"Base Reflectivity"  
"VEL":"Base Velocity"  
"CR":"Composite Ref."  
"ET":"Echo Tops"  
"VIL":"V Integrated Liquid"  
"ZDR":"Differential Ref."  
"PHI":"Differential Phase"  
"RHO":"Correlation Coe."  
"TREF":"Total Reflectivity"   
"KDP":"Spec. Diff. Phase"  
"VILD":"VIL Density"  
"OHP":"One-Hour Precip."  
"HCL":"Hydrometeor Class"  
"VELSZ":"Velocity SZ Recovery"  
有些数据读取出来并不是以上名称    
例如产品V读取出来可能是`Vc`,此时重命名即可`data=data.rename({"Vc":"VEL"})`