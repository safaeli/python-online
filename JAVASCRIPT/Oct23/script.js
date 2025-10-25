let name;
let amount = 0;
let ischeck = true;
while (ischeck) {
  let opt = prompt("Enter your option \n 1. Create Product \n 2. Take Product \n 3. Add Product \n 4. Balance Check \n 5. Exit")
  switch (opt) {
    case "1":
      name = prompt("Enter the product name")
      let amt1 = Number(prompt("Enter the product quantity"))
      amount += amt1
      break;
    case "2":
      let getProduct = Number(prompt("Enter how many u want to take"))
      if (amount < getProduct) {
        alert("Not enought")
      } else{
        amount -= getProduct
        alert("Taken successfully")
      }
      break;
    case "3":
      let addProduct = Number(prompt("Enter how many u want to add"))
      amount += addProduct
      alert("Added successfully")
      break;
    case "4":
      console.log("==========================");
      console.log(" Name : " + name + "");
      console.log("Amount : " + amount + "");
      console.log("==========================");
      break;
    case "5":
      ischeck = false;
      break;
    default:
      console.log("invalid option 1- 5");
      break;
  }
}
