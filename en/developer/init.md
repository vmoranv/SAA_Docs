# Building the Project
## Download and Install Dependencies
1. Download the project via git
```
git clone https://github.com/LaoZhuJackson/SnowbreakAutoAssistant.git
```
2. Create virtual environment using uv
```
cd SnowbreakAutoAssistant
uv python install 3.10  # Automatically download and install Python 3.10
uv venv --python 3.10 .venv  # Create virtual environment named `.venv`
```
3. Activate virtual environment
```
.venv\Scripts\activate #Windows
source .venv/bin/activate #Linux/MacOS
```
4. Check if environment is created successfully
```
python --version
```
5. Install dependencies
```
uv pip install -r requirements.txt
```
6. Try to start the project
Run `main.py` in your IDE to check if it runs normally