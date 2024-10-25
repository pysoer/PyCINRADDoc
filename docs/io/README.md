# 支持的文件类型
PyCINRAD支持读取以下文件类型，大部分可以从文件名中判断出来。
#### 1. 标准格式基数据StandardData
标准格式基数据: 标准格式文件名中有“FMT”、基数据是O_DOR
Z_RADR_I_Z9999_20231025220414_O_DOR_SA_CAP_FMT.bin
#### 2. 标准格式产品StandardPUP
标准格式产品: 标准格式文件名中有“FMT”、产品数据是P_DOR
  这里文件名中有HCL，代表是HCL水凝物分类产品
Z_RADR_I_Z9999_20231231160439_P_DOR_SAD_HCL_250_230_5_FMT.bin
  下面这种老格式的也是标准格式产品
Z9737_20231126150649Z_CR_00_37
#### 3. 探测中心天气雷达拼图系统v3产品.MocMosaic
 ACHN表示是全网拼图，CREF表示是产品类型是CREF组合反射率
Z_RADA_C_BABJ_20231212010615_P_DOR_ACHN_CREF_20231212_010000
#### 4. SWAN
 以前的老SWAN3产品.MCR表示拼图组合反射率
Z_OTHE_RADAMCR_20220525085400.bin
#### 5. 老格式的国产基数据.CinradReader
 和标准格式的唯一区别是文件名中没有“FMT”（这里指的是大部分新情况）
Z_RADR_I_Z9731_20240511070524_O_DOR_SAD_CAP.bin
#### 6. 相控阵PhasedArrayData
标准格式的相控阵雷达基数据(2023以后).
 文件名一般有AXPT，就是纳睿雷达的产品。
 Z_RADR_I_ZBJ02_20210815155836_O_DOR_DXK_CAR    
 Z_RADR_I_ZA601_20240415183600_O_DOR_AXPT0364_CRA_FMT    
 Z_RADR_I_ZS999_20231220000000_O_DOR_AXPT0364_CRA_.bz2    
#### 7: PUP
NEXRAD Level 3 (NIDS) product files.
已经被淘汰的格式，一言难尽，格式太乱，能用则用吧。
#### 万能读取read_auto
如果你搞不清楚，那请用cinrad.io.read_auto(your_radar_file)来读取。
#### 总结，有以下接口: 
```md  
cinrad.io.StandardData    
cinrad.io.StandardPUP    
cinrad.io.MocMosaic    
cinrad.io.SWAN(filename,product="CR")    
cinrad.io.CinradReader(filename,radar_type="CC")        
cinrad.io.PhasedArrayData    
cinrad.io.PUP    
cinrad.io.read_auto
```