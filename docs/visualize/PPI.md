
## 画图基本操作
```python
# 读取数据，这里以BR为例
nFiles = basePath + "/cinrad/bz2/Z_RADR_I_Z9737_20231025220414_O_DOR_SA_CAP_FMT.bin.bz2"
f = cinrad.io.read_auto(nFiles)

# 想把时间改成北京时？
# f.scantime = f.scantime + datetime.timedelta(hours=8)
data = f.get_data(0, 230, "REF")

# 开始画图
fig = PPI(
    data, dpi=300, style="black", add_city_names=True
)  # 背景颜色支持：white /black / transparent

# 附加操作
fig.plot_range_rings([10, 20, 30, 50, 150], color="white", linewidth=1)  # 用这个来画圈
fig.gridlines(draw_labels=True, linewidth=1, color="white")  # 用这个来画经纬度网格线

# 如果是在ipynb下运行时，此时图片已经可以看到；
# 如果是在正式的脚本下，则需要保存为图片文件。
```

### 还想在图上画点其他的？


```python
# 1.在地图上画一个红色大圆点
import cartopy.crs as ccrs
fig.geoax.scatter(
    x=112.34, y=32.22, s=500, c="r", marker=".", transform=ccrs.PlateCarree()
)

# 2.添加自定义的边界线
from cartopy.io.shapereader import Reader
reader = Reader('d:/边界.shp', encoding='gbk')
fig.geoax.add_geometries(
    geoms=list(reader.geometries()),
    crs=ccrs.PlateCarree(),
    edgecolor="red",
    facecolor="None",
    zorder=3,
    linewidth=0.5
)

# 3.画射线
from cinrad.projection import get_coordinate
from matplotlib.collections import LineCollection
import numpy as np

c_lon, c_lat = f.stationlon, f.stationlat
az = np.linspace(0, 2 * np.pi, 8) # 画8根
lons, lats = get_coordinate(
    distance=150, azimuth=az, elevation=0, centerlon=c_lon, centerlat=c_lat
) # 射线顶端的经纬度位置
lines = np.array(
    [[(c_lon, c_lat), (lon, lat)] for lon, lat in zip(lons.flatten(), lats.flatten())]
) # 所有的线段
lc = LineCollection(lines, color="white", linewidth=1, transform=ccrs.PlateCarree())
fig.geoax.add_collection(lc)
```

### 小结
- 也就是说fig.geoax就是画布，你可以在上面画任何东西
- 你也可以使用plt.plot()来画
- 不过fig.geoax支持在指定经纬度位置来绘制,参数加上transform=ccrs.PlateCarree()
- 至于需要画什么上去，请参考matplotlib,cartopy的文档：
- https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.html
- https://www.osgeo.cn/pygis/cartopy-feature.html#id2
- http://scitools.org.uk/cartopy/docs/latest/reference/generated/cartopy.mpl.geoaxes.GeoAxes.html

### 保存图片
- 教程中都是在ipynb环境下运行，因此不需要保存也可以看到图片;
- 在正式环境时，请用下面代码保存图片
  
```python
# 将图片保存
# fig("d:/")
# 或者 fig("d:/abc.png")
# 或者 imgName = fig("d:/")
```

![An image](./image_19.png)

```python
# 画一个透明图
fig = PPI(data, dpi=300, style="transparent")
extent = fig.geoax.get_extent(crs=ccrs.PlateCarree()) # 这个是透明图的边界位置经纬度
```
![An image](./image_23.png)


## 剖面图
```python
nFiles = basePath + "/cinrad/bz2c/Z_RADR_I_Z9737_20231025220414_O_DOR_SA_CAP_FMT.bin.bz2"
f = cinrad.io.read_auto(nFiles)
rl = list(f.iter_tilt(230, "REF")) #  REF,VEL,ZDR,KDP,RHO
vcs = cinrad.calc.VCS(rl)
sec = vcs.get_section(start_cart=(111.97, 28.05), end_cart=(112.59, 28.14))  # 传入经纬度坐标
# sec = vcs.get_section(start_polar=(0, 30), end_polar=(90, 30)) # 传入极坐标
fig = cinrad.visualize.Section(sec, interpolate=True) # interpolate 是否插值
plt.scatter(0.5, 3, s=100, c="red", marker="o" )  # 在x轴的0.5位置，3公里高度位置画个点
plt.axline((0, 2), (1, 2), linewidth=2, color="red")  # 在2公里高度画根线
```

![An image](./image_20.png)
##  在PPI图下方添加剖面图

**在pycharm/sublime/spyder中可能会莫名其妙没图，请到cmd下直接运行脚本并保存为图片查看**
```python
# VCS画图测试
nFiles = basePath + "/cinrad/bz2c/Z_RADR_I_Z9737_20231025220414_O_DOR_SA_CAP_FMT.bin.bz2"
f = cinrad.io.read_auto(nFiles)
rl = list(f.iter_tilt(230, "REF"))
cr = cinrad.calc.quick_cr(rl)
fig = PPI(cr, dpi=300, style="black")
fig.settings["is_inline"] = False  # notebook模式下需要这一行，正常不需要
vcs = cinrad.calc.VCS(rl)
sec = vcs.get_section(start_cart=(111.97, 28.05), end_cart=(112.59, 28.14))  # 传入经纬度坐标
# sec = vcs.get_section(start_polar=(113, 250), end_polar=(114, 28)) # 传入极坐标
fig.plot_cross_section(sec, linecolor="red")
```
![An image](./image_21.png)
## 自定义色标
Cinrad自带了很多的标准色标，一般不需要自定义；  
如果你需要使用其他色标，则可以使用下面的方法自定义一个
```python

nFiles = basePath + "Z_RADR_I_Z9735_20240511082558_P_DOR_SAD_HCL_250_230_5_FMT.bin"
f = cinrad.io.read_auto(nFiles)
data = f.get_data()

import matplotlib.colors as cmx
color_str=[
    [0, 251, 144],
    [0, 187, 0],
    [255, 0, 0],
    [208, 208, 96],
    [156, 156, 156],
    [118, 118, 118],
    [0, 255, 255],
    [0, 144, 255],
    [255, 176, 176],
    [210, 132, 132],
    [231, 0, 255],
]
cmap = cmx.ListedColormap(np.array(color_str) / 255.0) # 除以255是因为matplotlib的颜色取值范围是0-1
norm = cmx.Normalize(0, 10)  # 取值区间
label = ["小雨", "大雨", "冰雹", "大雨滴", "晴空回波", "地物", "干雪", "湿雪", "冰晶", "霰", "未知",""]

fig = PPI(
    data,
    add_city_names=True,
    dpi=300,
    style="black",
    cmap=cmap,
    norm=norm,
    label=label,
)
# fig("d:/temp/")
```

![An image](./image_22.png)

## 三维可视化
抛砖引玉，举个栗子⛳
```python
# 读取数据，这里以BR为例
nFiles = basePath + "Z_RADR_I_Z9737_20231025220414_O_DOR_SA_CAP_FMT.bin.bz2"
f = cinrad.io.read_auto(nFiles)

r = f.get_data(0, 230, "REF")
X = r.longitude.values.flatten()  #读取ppi中经度纬度高度和反射率数值，并转化成一维
Y = r.latitude.values.flatten()
Z = r.height.values.flatten()
value = r.REF.values.flatten()
r
```
```md
<xarray.Dataset>
Dimensions:    (azimuth: 366, distance: 230)
Coordinates:
  * azimuth    (azimuth) float32 1.594 1.611 1.628 1.645 ... 1.565 1.582 1.599
  * distance   (distance) float64 1.0 2.0 3.0 4.0 ... 227.0 228.0 229.0 230.0
Data variables:
    REF        (azimuth, distance) float64 nan -26.5 -19.0 ... 21.0 21.5 21.5
    longitude  (azimuth, distance) float64 112.0 112.0 112.1 ... 114.4 114.4
    latitude   (azimuth, distance) float64 28.47 28.47 28.47 ... 28.41 28.41
    height     (azimuth, distance) float64 0.7585 0.7671 0.7758 ... 5.767 5.802
Attributes:
    elevation:        0.48339844
    range:            230
    scan_time:        2023-10-25 22:04:14
    site_code:        Z9999
    site_name:        伊宁
    site_longitude:   119
    site_latitude:    28
    tangential_reso:  1.0
    nyquist_vel:      8.571463
    task:             VCP21
```
画图
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt

fig = plt.figure(figsize=(10, 10), dpi=200)
ax = Axes3D(fig)
fig.add_axes(ax)  #新版本cartopy或Mac下，最好是加上这一句
# cmap = plt.get_cmap("CN_ref")
ax.scatter(X, Y, Z, c=value,alpha=0.8)
```
![An image](./image_24.png)
