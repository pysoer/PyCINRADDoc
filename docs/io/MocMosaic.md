# 探测中心拼图v3.0产品
cinrad.io.MocMosaic和cinrad.io.read_auto支持读取探测中心拼图v3.0产品，包括拼图和单站产品。    
需要版本>=1.9.0
## 拼图
```python
# MocMosaic
nFiles = (basePath+"cinrad/bz2/Z_RADA_C_BABJ_20240925080617_P_DOR_ACHN_CREF_20240925_080000.bin")
f = cinrad.io.MocMosaic(nFiles)
dt = f.get_data()
dt
```
```md
<xarray.Dataset> Size: 208MB
Dimensions:    (latitude: 4200, longitude: 6200)
Coordinates:
  * latitude   (latitude) float64 34kB 12.2 12.21 12.22 ... 54.18 54.19 54.2
  * longitude  (longitude) float64 50kB 73.0 73.01 73.02 ... 135.0 135.0 135.0
Data variables:
    CR         (latitude, longitude) float64 208MB nan nan nan ... nan nan nan
Attributes:
    scan_time:        2024-09-25 08:00:00
    site_code:        MOC
    site_name:        MOC
    tangential_reso:  nan
    range:            nan
    elevation:        0
```
```python
dt.max() # 最大的反射率
```
```md
<xarray.Dataset> Size: 8B
Dimensions:  ()
Data variables:
    CR       float64 8B 70.0
```
```python
# 如果是CAPPI产品，这个参数表示CAPPI的高度:meter
f.header["height"]
```
```md
array([0], dtype=uint16)
```
```python
# 计算REF大于35的数量，这代表不了面积
dt["CR"].values[dt["CR"].values > 35].shape
```
```md
(21138,)
```
```python
# 画图
# dt = dt.rename({"CREF": "CR"})  # 重命名，因为PPI并不支持CAP，v1.9.1以下需要这句
fig = PPI(dt, style="black", extent=[105, 110, 30, 35], add_city_names=True)
```
![An image](./image_14.png)
## 单站
### 产品CAPPI
```python
nFiles = "Z_RADA_C_BABJ_20240520001131_P_DOR_Z9734_CAP_20240520_000532.bin"
f = cinrad.io.read_auto(nFiles)
dt = f.get_data()
dt
```
```md
<xarray.Dataset> Size: 71MB
Dimensions:    (height: 24, latitude: 575, longitude: 645)
Coordinates:
  * height     (height) int64 192B 500 1000 1500 2000 ... 14000 15000 16000
  * latitude   (latitude) float64 5kB 24.06 24.07 24.08 ... 29.79 29.8 29.81
  * longitude  (longitude) float64 5kB 109.4 109.4 109.4 ... 115.8 115.8 115.8
Data variables:
    REF        (height, latitude, longitude) float64 71MB nan nan ... nan nan
Attributes:
    scan_time:        2024-05-20 00:05:00
    site_code:        Z9734
    site_name:        g_Z9734
    site_longitude:   112.0
    site_latitude:    26.0
    tangential_reso:  0.1
    range:            320
    elevation:        0
    task:             VCP21
```
```python
# 发现height维度，如果要画图的话，需要选择一个高度层
dt0 = dt.sel(height=1500)
dt0
```
```md
<xarray.Dataset> Size: 3MB
Dimensions:    (latitude: 575, longitude: 645)
Coordinates:
    height     int64 8B 1500
  * latitude   (latitude) float64 5kB 24.06 24.07 24.08 ... 29.79 29.8 29.81
  * longitude  (longitude) float64 5kB 109.4 109.4 109.4 ... 115.8 115.8 115.8
Data variables:
    REF        (latitude, longitude) float64 3MB nan nan nan nan ... nan nan nan
Attributes:
    scan_time:        2024-05-20 00:05:00
    site_code:        Z9734
    site_name:        g_Z9734
    site_longitude:   112.0
    site_latitude:    26.0
    tangential_reso:  0.1
    range:            320
    elevation:        0
    task:             VCP21
```
```python
fig = PPI(dt0, style="black", add_city_names=True)
```
![An image](./image_15.png)

### 普通反射率数据    
```python
nFiles = "Z_RADA_C_BABJ_20221225134644_P_DOR_Z9859_CREF_20221225_135233.bin"
f = cinrad.io.read_auto(nFiles)
dt = f.get_data()
dt
```
```md
<xarray.Dataset> Size: 2MB
Dimensions:    (latitude: 431, longitude: 476)
Coordinates:
    height     int64 8B 0
  * latitude   (latitude) float64 3kB 22.91 22.92 22.93 ... 27.21 27.22 27.23
  * longitude  (longitude) float64 4kB 102.6 102.6 102.6 ... 107.3 107.3 107.3
Data variables:
    CR         (latitude, longitude) float64 2MB nan nan nan nan ... nan nan nan
Attributes:
    scan_time:        2022-12-25 13:46:00
    site_code:        Z9859
    site_name:        Z9859
    site_longitude:   112.0
    site_latitude:    25.0
    tangential_reso:  0.1
    range:            240
    elevation:        0
    task:             VCP21
```
