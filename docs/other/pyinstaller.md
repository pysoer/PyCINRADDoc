## 使用pyinstaller打包exe
- 安装pyinstaller
```shell
pip install pyinstaller
```
- 打包exe，在命令行中执行
```shell
pyinstaller -F --collect-data cinrad --collect-data cinrad_data --clean your_script.py
```
- 参数说明
    - `-F` 用于将所有依赖打包进一个exe(可选)
    - `--collect-data cinrad` 用于将cinrad包的数据文件打包进exe(必须)
    - `--collect-data cinrad_data` 用于将cinrad_data包的数据文件打包进exe(必须)
    - `--clean` 用于清理打包过程中的临时文件(可选)
    - `your_script.py` 为你的的脚本