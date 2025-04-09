tasks = []

def add_task(task):
    tasks.append(task)


def delete_task():
    pass


def show_task(tasks):
    for elem in tasks:
        print(elem)


def is_done():
    pass


def main():
    while True:
        print("Mida sa tahad teha?")
        print("1 - lisada ülesanne \n2 - kustudata ülesanne \n3 - ülevaadata kõik ülesanded \n4 - muuta sesund(done or not) \n")
        userInput = input("Mida sa tahad?")
        if userInput == "1":
            tasks = input("sisesta tegevus")
            add_task(tasks)
        elif userInput == "2":
            pass
        elif userInput == "3":
            show_task(tasks)
        elif userInput == "4":
            pass
        else:
            break


main()