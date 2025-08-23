//tao ma hoa
pyarmor gen dk_mon_share.py


//dong goi
pyinstaller --onefile --noconsole --icon="app_icon.ico" --hidden-import=tkinter --hidden-import=tkinter.ttk --hidden-import=tkinter.messagebox --hidden-import=requests --hidden-import=selenium.webdriver --hidden-import=selenium.webdriver.chrome --hidden-import=selenium.webdriver.common.by --hidden-import=selenium.webdriver.support --hidden-import=selenium.webdriver.support.ui --hidden-import=selenium.webdriver.support.expected_conditions --hidden-import=webdriver_manager.chrome --add-data "dist\pyarmor_runtime_000000;pyarmor_runtime_000000" "dist\dk_mon_stu.py"
