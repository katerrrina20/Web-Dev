a = int(input())
b = int(input())
result = []
n = 1
while n * n <= b:
    square = n * n
    if square >= a:
        result.append(square)
    n += 1
print(' '.join(map(str, result)))
