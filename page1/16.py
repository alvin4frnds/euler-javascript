def power(n):
    power = 2
    for x in range(1, n):
        power = 2*power
    return power

def sum(n):
    pow = power(n)
    sum = 0
    while pow > 0:
        modulo = pow%10
        sum = sum + modulo
        pow = int((pow - modulo)/10)
    return sum

def main():
    print(int(sum(1000)))

if __name__ == '__main__':
    main()
