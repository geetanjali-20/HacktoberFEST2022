import random

number = random.randint(0, 100)
tries = 0
found = False

while not found:
    guess = int(input("Guess:"))
    tries += 1
    if guess == number:
        found = True
        print(f"You found the number {number} after {tries} tries!")
    elif guess > number:
        print(f"The number you looking for os less than {guess}!")
    else:
        print(f"The number you looking for os grater than {guess}!")

