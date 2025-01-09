# 数据可视化
PyCINRAD具备单独的画图接口，即`cinrad.visualize.PPI`，该函数有以下参数：
|参数|功能|
|:-:|:-:|
|`cmap`|色阶|
|`norm`|色阶范围|
|`nlabel`|色阶条标注个数|
|`label`|色阶条标注|
|`highlight`|地区边界高亮|
|`dpi`|分辨率|
|`extent`|绘图的经纬度范围 e.g. `extent=[90, 91, 29, 30]`|
|`section`|在`ppi`图中绘制的剖面的数据，为`xarray.Dataset`类型|
|`style`|背景颜色，可设置为黑色`black`或者白色`white`或者透明`transparent`|
|`add_city_names`|标注城市名|


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