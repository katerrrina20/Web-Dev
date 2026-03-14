# Python OOP Project – Animal Example

## Description

This project demonstrates **Object-Oriented Programming (OOP)** in Python using a simple example.

The program includes:

* A base class `Animal`
* Two child classes `Dog` and `Cat`
* Inheritance
* Method overriding
* Polymorphism
* Separate modules (`models.py` and `main.py`)

---

## Project Structure

```
task2/
models.py
main.py
README.md
```

---

## Classes

**Animal**

* Attributes: `name`, `age`, `color`
* Methods: `speak()`, `info()`

**Dog**

* Inherits from `Animal`
* Adds attribute `breed`
* Overrides `speak()`

**Cat**

* Inherits from `Animal`
* Adds attribute `lives`
* Overrides `speak()`

---

## How to Run

Run the program with:

```
python main.py
```

---

## Example Output

```
Animal(name=GenericAnimal, age=5, color=gray)
Some animal sound

Dog(name=Buddy, age=3, color=brown, breed=Labrador)
Woof!

Cat(name=Whiskers, age=2, color=white, lives=9)
Meow!
```

---

## Author

Student: Fomichyova Ekaterina
