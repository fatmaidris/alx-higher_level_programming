#!/usr/bin/python3
def fizzbuzz():
    for a in range(1, 101):
        if a % 15 == 0:
            print("FizzBuzz", end=" ")
        if a % 5 == 0:
            print("Buzz", end=" ")
        if a % 3 == 0:
            print("Fizz", end=" ")
        else:
            print("{:d}".format(a), end=" ")
