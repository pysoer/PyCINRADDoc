# 开始测试
- 运行代码时，需要import导入cinrad，示例如下。
- 说明：本文中的所有数据，雷达站所在的经纬度都作了**脱密，站号均改成了Z9999**，因此画图的位置是错的，请忽略。
- 教程中都是在ipynb（jupyter notebook）环境下运行，因此不需要保存也可以看到图片，在正式环境时，需要保存为图片.
```python
import cinrad
import cartopy
from cinrad.visualize import PPI
import numpy as np
import matplotlib.pyplot as plt
import datetime
%matplotlib inline  #这一句只在jupyter notebook中使用，在编辑器或命令行运行请删掉
import warnings
warnings.filterwarnings("ignore")

# 这里是我测试的数据文件目录，请根据实际情况修改
basePath = "d:/temp/" # 数据存放路径
print(cinrad.__version__) # 打印cinrad版本
print(np.__version__)   # 打印numpy版本
print(cartopy.__version__)  # 打印cartopy版本
```
```md
1.9.2
2.0.2
0.23.0
```
