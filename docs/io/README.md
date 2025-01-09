# 数据读取接口
PyCINRAD有以下数据读取接口
|接口|数据类型|
|:-:|:-:|
|**cinrad.io.read_auto**|万能读取接口，自动判断以下数据类型|
|cinrad.io.StandardData|标准格式基数据，包括标准格式相控阵|
|cinrad.io.StandardPUP|标准格式ROSE2产品数据|
|cinrad.io.MocMosaic|探测中心天气雷达拼图系统v3产品|
|cinrad.io.SWAN(filename, product="CR")| SWAN产品|
|cinrad.io.CinradReader(filename, radar_type="CC")|老格式国产基数据|
|cinrad.io.PhasedArrayData|老格式相控阵基数据|
|cinrad.io.PUP|老格式PUP数据|

