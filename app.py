import PySimpleGUI as sg

class loginScreen:
    layout = [
	   [sg.Text('Login')],
	   [sg.Text('Name'), sg.Input(key='-NAME-')],
	   [sg.Text('Password'), sg.Input(key='-PASSWORD-', password_char='*')],
	   [sg.Button('Login'), sg.Button('Quit')]]
    
    window = sg.Window('Login',layout)
    values = []
    def __init__(self):    
        pass

    def getLoginAsString(self):
        return [str(self.values['-NAME-']),str(self.values['-PASSWORD-'])]

    def __main__(self):
        while True:
            event, self.values = self.window.read()
            if event == sg.WINDOW_CLOSED or event == 'Quit':
                break
            elif event == 'Login':
                print('Logging in...')
                #call a c++ class to verify
        self.window.close()

screen = loginScreen()
screen.__main__()
print(screen.getLoginAsString())
