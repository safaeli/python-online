#Q1 find the prime number from 1 to 20
"""def prime():
    for i in range(2,21):
        for x in range(2,i):
            if i % x ==0:
                break
        else:
            print(i)

print("The prime numbers between 1-20 are:")
prime()"""

#Q2 find armstrong number
"""num = int(input("Enter a number: "))

digits = len(str(num))

armstrong_sum = 0
temp = num

while temp > 0:
    digit = temp % 10
    armstrong_sum += digit ** digits
    temp //= 10

if armstrong_sum == num:
    print(num, "is an Armstrong number")
else:
    print(num, "is not an Armstrong number")"""


#Q3 find factorial of 10 using recursion function
"""def fact(n):
    if n ==0:
     return 1
    else:
        ans = n*fact(n-1)
        return ans
num = 10
if num < 0:
    print("No factorial for negative nums")
else:
    result = fact(num)
    print(f"The factorial of 10 is: {result}")"""

#Q4 pattern hexagon
rows = 3  

for i in range(rows):
    print(" " * (rows - i - 1) + "* " * (rows + i))

for i in range(rows - 2, -1, -1):
    print(" " * (rows - i - 1) + "* " * (rows + i))

