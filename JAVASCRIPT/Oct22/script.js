// let n1 = prompt("Enter number1")
// let n2 = prompt("Enter number2")
// let op = prompt("Enter Operator + , - , * , / , %")

//  switch (op) {
//    case "+":
//      let sum = Number(n1) + Number(n2);
//      document.writeln(sum);
//      break;
//    case "-":
//      let sub = n1 - n2;
//      document.writeln(sub);
//      break;
//    case "*":
//      let mul = n1 * n2;
//      document.writeln(mul);
//      break;
//     case "/":
//      let div = n1 / n2;
//      document.writeln(div);
//      break;
//     case "%":
//      let mol = n1 % n2;
//      document.writeln(mol);
//      break;
//    default:
//      document.writeln("input case input")
//      break;
//  }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2) {
//     if (i == 5) {
//       document.writeln(i, "<span style='color:red'> Father Name </span> <br>")
//     }
//     else {
//       document.writeln(i, "<span style='color:red'> SAFA </span> <br>")
//     }
//   }
//   else {
//     if (i == 10) {
//       document.writeln(i, "<span style='color:red'> Mother Name </span> <br>")
//     } else {
//       document.writeln(i, "<span style='color:green'> SANA </span> <br>")
//     }
//   }


// let name, phone, address, acc_no;
// let amount = 0;
// let ischeck = true;
// while (ischeck) {
//   let op = prompt("Enter your option \n 1 . create Account \n 2.Deposit \n 3. withdrawal \n 4. Balance Check \n 5. exit Account")
//   switch (op) {
//     case "1":
//       name = prompt("Enter your Name?")
//       phone = prompt("Enter your Phone?")
//       address = prompt("Enter your Address?")
//       acc_no = prompt("Enter your account No?")
//       let amt1 = Number(prompt("Enter Amount?"));
//       amount += amt1; // amount = amount+500;
//       break;
//     case "2":
//       let ano = prompt("Enter account No?");
//       if (acc_no === ano) {
//         alert("Account no matched successfully")
//         let amt = Number(prompt("Enter amount?"));
//         amount += amt;
//         alert("Amount Deposited  successfully")
//       } else {
//         alert("account does not match!!!.")
//       }
//       break;
//     case "3":
//       let ano1 = prompt("Enter account No?");
//       if (acc_no == ano1) {
//         alert("Account no matched successfully Your amount is Rs: " + amount);
//         let getAmount = prompt("Enter your Amount?");
//         if (amount < getAmount) {
//           alert("Insufficient fund!..")
//         } else {
//           amount -= getAmount;
//           alert("Amount Withdraw  successfully")
//         }
//       }
//       break;
//     case "4":
//       console.log("==========================");
//       console.log(" Name : " + name + "");
//       console.log(" Phone : " + phone + "");
//       console.log(" Address : " + address + "");
//       console.log(" account No : " + acc_no + "");
//       console.log("Amount : " + amount + "");
//       console.log("==========================");
//       break;
//     case "5":
//       ischeck = false;
//       break;
//     default:
//       console.log("invalid option 1- 5");
//       break;
//   }
// }