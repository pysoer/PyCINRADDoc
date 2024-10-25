# 番外篇
## 基数据编辑
修改标准格式基数据，替换里面的站名站号等基本信息
```python
import struct
import bz2


def prepare_file(file):
    if hasattr(file, "read"):
        return file
    f = open(file, "rb")
    magic = f.read(3)
    f.close()
    if magic.startswith(b"BZh"):
        return bz2.BZ2File(file, "rb")
    return open(file, "rb")


def modify_fmt_site_config(
    file: str,
    newfile: str,
    site_code: str = None,
    site_name: str = None,
    latitude: float = None,
    longitude: float = None,
    atenna_height: float = None,
    ground_height: float = None,
    radar_type: int = None,
):
    """
    修改标准格式天气雷达数据的站点信息@pysoer

    :param file: 原始基数据文件名
    :param newfile: 修改后的基数据文件名
    :param site_code: 站点代码
    :param site_name: 站点名称
    :param latitude: 纬度
    :param longitude: 经度
    :param atenna_height: 天线高度
    :param ground_height: 地面高度
    :param radar_type: 雷达类型
        1–SA 2–SB
        3–SC 4–SAD
        33–CA 34–CB
        35–CC 36–CCJ
        37–CD 38–CAD
        65–XA 66–XAD
    :return:
    """

    # 打开原始文件，输出数据
    f = cinrad.io.StandardData(file)
    print(f.get_data(0, 230, "REF"))

    # 打开原始文件，读取所有字节
    ff = prepare_file(file)
    content = ff.read()
    ff.close()
    print(content[:100])
    # 修改指定位置数据
    if site_code:
        site_code_encoded = struct.pack("8s", site_code.encode("utf-8"))
        content = content[:32] + site_code_encoded + content[40:]
    if site_name:
        site_name_encoded = struct.pack(
            "32s", site_name.encode("Unicode_escape", errors="ignore")
        )
        content = content[:40] + site_name_encoded + content[72:]
    if latitude:
        latitude_encoded = struct.pack("f", latitude)
        content = content[:72] + latitude_encoded + content[76:]
    if longitude:
        longitude_encoded = struct.pack("f", longitude)
        content = content[:76] + longitude_encoded + content[80:]
    if atenna_height:
        atenna_height_encoded = struct.pack("f", atenna_height)
        content = content[:80] + atenna_height_encoded + content[84:]
    if ground_height:
        ground_height_encoded = struct.pack("f", ground_height)
        content = content[:84] + ground_height_encoded + content[88:]
    if radar_type:
        radar_type_encoded = struct.pack("h", radar_type)
        content = content[:104] + radar_type_encoded + content[106:]
    print(content[:100])
    # 写入新文件
    if file.lower().endswith("bz2"):
        with bz2.open(newfile, "wb") as f:
            f.write(content)
    else:
        with open(newfile, "wb") as f0:
            f0.write(content)

    # 输出修改后的数据
    # f1 = cinrad.io.read_auto(newfile)
    # dt1 = f1.get_data(0, 230, "REF")
    # print(dt1)


modify_fmt_site_config(
    file="D:/temp/bz2/Z_RADR_I_Z9737_20231025220414_O_DOR_SA_CAP_FMT.bin.bz2",
    newfile="D:/temp/bz2/Z_RADR_I_Z9737_20231025220414_O_DOR_SA_CAP_FMT_EDIT.bin.bz2",
    site_code="T9999",
    site_name="hello",
    latitude=32.1,
    longitude=118.9,
    atenna_height=100,
    ground_height=100,
    radar_type=1,
)
```
