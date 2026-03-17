from models import Animal, Dog, Cat


def main():

    animal = Animal("GenericAnimal", 5, "gray")
    dog = Dog("Max", 3, "brown", "Labrador")
    cat = Cat("Barsik", 2, "white", 9)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.info())
        print(a.speak())
        print()


if __name__ == "__main__":
    main()
