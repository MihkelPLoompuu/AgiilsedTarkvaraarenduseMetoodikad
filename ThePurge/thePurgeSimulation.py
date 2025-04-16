questions = [("Ründa","A"), ("muuda oma asukohta", "A"), ("Jää siia", "B"),
 ("Tee oma grupp suuremaks", "B")]

answers =[["A. ja","B. ei"],
  ["A. ja","B. ei"],
  ["A. ja","B. ei"],
  ["A. ja","B. ei"]]
class Player:

    def __init__(self,health,food, energy):
        self.health = health
        self.food = food
        self.energy = energy
        self.time_left = 60
 
    def rest(self):
        if self.food > 0:
            self.food -= 1
            self.energy += 10
        else:
            print("pole piisavalt toitu puhkamiseks")
    
    def status(self):
        print(self.food,self.energy,self.health)
    
    def event(self):
        ques_ran = random.randint(0, len(questions) - 1)

        print(questions[ques_ran])

        b = input('Enter an answer: ')

        if b.strip().lower() != answers[ques_ran].lower():
            self.health -= 1
            print("Wrong answer! Health reduced.")

    def do_turn(self):
        käik = input("Kas tahad puhata? (puhkan,liigun või risk): ")
        if käik == "puhkan":
            self.rest()
        elif käik == "liigun":
            print("Sa jätkasid oma teekonda.")
        elif käik == "risk":
            self.event()

    def play_game(self):
        while self.time_left > 0:
            self.do_turn() 
            self.time_left -= 1
            print(f"Aega järgi: {self.time_left}")

        print("Mäng läbi!")  