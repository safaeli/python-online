class Bank:
    def __init__(self):
        self.name = ""
        self.phone = ""
        self.PassportNo = ""
        self.__balance_amt = 0
        self.__acc_no = ""


    def account_create(self,n,p,passN,amt,ac):
        self.name = n
        self.phone = p
        self.PassportNo = passN
        self.__balance_amt = amt
        self.__acc_no = ac
        print("Your account has been created successfully")

    def bank_bal(self):
        return self.__balance_amt

    def deposit(self,ac,amt):
        if(self.__acc_no == ac):
           self.__balance_amt+=amt
        else:
            ("The account number is incorrect")

    def withdraw(self,ac,amt):
        if (self.__acc_no == ac):
            if(self.__balance_amt >= amt):
                
                self.__balance_amt-=amt
                print("Amount withdrawed successfully")
            else:
                
                print("No sufficient balance!")

c1 = Bank()
isExit = True
while(isExit):
    op = input("Choose a number: \n1) Create an account \n2) Deposit cash \n3) Withdraw cash \n4) View balance amount \n5) Exit \n")
    if(op == "1"):
        n = input("Enter your name:")
        p = int(input("Enter your phone number:"))
        passN = input("Enter your passport number:")
        ac = input("Enter your account number:")
        amt = float(input("Enter your deposit amount:"))
        c1.account_create(n,p,passN,amt,ac)
    elif(op == "2"):
        ac = input("Enter your account number:")
        amt = float(input("Enter the amount u want to deposit:"))
        c1.deposit(ac,amt)
    elif(op == "3"):
        ac = input("Enter your account number:")
        amt = float(input("Enter the withdrawal amount:"))
        c1.withdraw(ac,amt)
    elif(op == "4"):
        
        Bal = c1.bank_bal()
        
        print(f"Balance is : {Bal}")
    elif (op == "5"):
        isExit = False
        
        
            
