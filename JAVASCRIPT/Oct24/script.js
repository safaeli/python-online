let Num = Number(prompt("Enter the number for the multiplication table: "))
let range = Number(prompt("Enter the highest value of the range: "))
debugger
for (i = 1; i<=range ; i++){
    let result = Num * i 
    document.writeln(Num, " * ", i, " = ", result, "<br>")
}