def test(a, b):
    return a+b


a = [1, 2, 3, test]

print(a[1])
print(a[3](1, 11))
