# 非标准格式基数据
SB/CC/CA等少部分数据最好是用CinradReader并手动输入参数radar_type
`cinrad.io.CinradReader/read_auto`
```python
nFiles = basePath + "/cinrad/bz2/Z_RADR_I_Z9636_20200625140000_O_DOR_SB_CAP.bz2"
f = cinrad.io.CinradReader(nFiles, radar_type="SB")
print(type(f).__name__)
data = f.get_data(0, 230, "REF")
data
```
```md
CinradReader
```
```md
<xarray.Dataset> Size: 3MB
Dimensions:    (azimuth: 360, distance: 230)
Coordinates:
  * azimuth    (azimuth) float64 3kB 0.01745 0.0349 0.05235 ... 6.248 6.266 0.0
  * distance   (distance) float64 2kB 1.0 2.0 3.0 4.0 ... 228.0 229.0 230.0
Data variables:
    REF        (azimuth, distance) float64 662kB nan nan nan nan ... nan nan nan
    longitude  (azimuth, distance) float64 662kB 122.4 122.4 ... 122.4 122.4
    latitude   (azimuth, distance) float64 662kB 37.14 37.14 ... 39.19 39.2
    height     (azimuth, distance) float64 662kB 0.1078 0.1167 ... 5.182 5.217
Attributes:
    elevation:        0.4998779296875
    range:            230
    scan_time:        2018-07-24 05:56:51
    site_code:        Z9636
    site_name:        rongcheng
    site_longitude:   122.42338
    site_latitude:    37.126343
    tangential_reso:  1.0
    nyquist_vel:      27.97
    task:             VCP21
```
```python
f.el # 仰角
```
```md
array([ 0.49987793,  0.49987793,  1.44470215,  1.44470215,  2.39501953,
        3.34533691,  4.2956543 ,  5.99853516,  9.89868164, 14.59533691,
       19.49523926])
```
```python
f.available_product(0) # 第1个仰角可用产品
```
```md
['REF', 'VEL', 'SW', 'azimuth', 'RF']
```
```python
f.Rreso #分辨率
```
```md
np.float64(1.0)
```
```python
f.angleindex_r # 仰角索引
```
```md
array([0, 2, 4, 5, 6, 7, 8, 9])
```
```python
f.angleindex_v # 速度的仰角索引
```
```md
array([1, 3, 4, 5, 6, 7, 8, 9])
```
```python
r_list = list(f.iter_tilt(230, 'REF'))
r_list[0]
```
```md
<xarray.Dataset> Size: 3MB
Dimensions:    (azimuth: 360, distance: 230)
Coordinates:
  * azimuth    (azimuth) float64 3kB 0.01745 0.0349 0.05235 ... 6.248 6.266 0.0
  * distance   (distance) float64 2kB 1.0 2.0 3.0 4.0 ... 228.0 229.0 230.0
Data variables:
    REF        (azimuth, distance) float64 662kB nan nan nan nan ... nan nan nan
    longitude  (azimuth, distance) float64 662kB 122.4 122.4 ... 122.4 122.4
    latitude   (azimuth, distance) float64 662kB 37.14 37.14 ... 39.19 39.2
    height     (azimuth, distance) float64 662kB 0.1078 0.1167 ... 5.182 5.217
Attributes:
    elevation:        0.4998779296875
    range:            230
    scan_time:        2018-07-24 05:56:51
    site_code:        Z9636
    site_name:        rongcheng
    site_longitude:   122.42338
    site_latitude:    37.126343
    tangential_reso:  1.0
    nyquist_vel:      27.97
    task:             VCP21
```
