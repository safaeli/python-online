employee = {
    "Name":["Safa", "Sana"],
    "ID": ["E1", "E2"],
    "Age": [25, 23],
    "Email": ["safa@gmail.com", "sana@gmail.com"],
    "Salary": [500000, 400000]
    }
#print(employee)

K = employee.keys()
K = list(K)

V = employee.values()
V = list(V)

for key in K:
    print(key, end="    ")
print()

num_rows = len(V[0])  

for i in range(num_rows):
    for j in range(len(K)):
        print(V[j][i], end="    ")
    print()

