#Q1(multiplication table 1-5)
"""for i in range(1, 6):  
    for j in range(1, 6):
        print(i * j, end=" ") 
    print()"""


#Q2(alphabet square A-E)
"""for i in range(5):
    for j in range(5):
        alph = chr(65 + j)
        print(alph, end= " ")
    print()"""

#Q3(reverse number square)
"""for i in range (5,0,-1):
    for j in range (5,0,-1):
        print(j, end = " ")
    print()"""

#Q4(right angled triangle of even numbers)
"""rows = 5
num = 2
for i in range(rows):
    for j in range(i + 1):
        print(num, end=" ")
        num += 2
    print()"""

#Q5(half diamond of numbers)
"""rows = 5
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end="")
    print()


for i in range(rows - 1, 0, -1):
    for j in range(1, i + 1):
        print(j, end="")
    print()"""
        
