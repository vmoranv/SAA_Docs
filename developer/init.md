# 构建项目
## 下载并安装依赖
1. 通过git下载项目
```
git clone https://github.com/LaoZhuJackson/SnowbreakAutoAssistant.git
```
2. 使用uv创建虚拟环境
```
cd SnowbreakAutoAssistant
uv python install 3.10  # 自动下载并安装 Python 3.10
uv venv --python 3.10 .venv  # 创建名为 `.venv` 的虚拟环境
```
3. 激活虚拟环境
```
.venv\Scripts\activate #Windows
source .venv/bin/activate #Linux/MacOS
```
4. 检查环境是否创建完成
```
python --version
```
5. 安装依赖
```
uv pip install -r requirements.txt
```
6. 尝试启动项目
在对应IDE中运行`main.py`查看是否正常运行