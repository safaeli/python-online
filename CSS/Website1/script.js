let addToCart = ()=>{
   let c = document.getElementById("addtocartcount");
    let count = Number(c.innerText)
    count+=1;
    c.innerText = count
}