import random

def invert_binary(binario):
    # Invertir el número binario de abajo hacia arriba
    binary_inverted = binario[::-1]
    return binary_inverted

def decimal_to_binary_game():
    random_int = random.randint(1, 50)
    random_bin = format(random_int, 'b')

    console = input(f"Convierte este numero ({random_int}) a binario: ")
    if console == random_bin or console == invert_binary(random_bin):
        print(f"Correcto, el resultado es '{console}'!")
    else:
        print(f"Incorrecto. El numero '{random_int}' en binario es '{random_bin}'")

def binary_to_decimal_game():
    random_bin = bin(random.randint(1, 50))[2:]

    console = input(f"Convierte este numero binario ({random_bin}) a decimal: ")
    if console == str(int(random_bin, 2)):
        print(f"Correcto, el resultado es '{console}'!")
    else:
        print(f"Incorrecto. El numero binario '{random_bin}' en decimal es '{int(random_bin, 2)}'")

games = [decimal_to_binary_game, binary_to_decimal_game]

while True:
    game = random.choice(games)
    game()
