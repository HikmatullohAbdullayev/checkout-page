const minusBtn = document.querySelector('.product_minus')
const plusBtn = document.querySelector('.product_plus')
let totalPrice = document.querySelector('.total_price') 
let num = document.querySelector('.product_number')

let a = 0;
let price = 0
let num2 = 0

plusBtn.addEventListener("click" , () => {
  a++
a = (a < 10) ? "0" + a : parseInt(a);
  num.innerText = a
price += 149.99

totalPrice.innerText = `$ ${price}`
  

})

minusBtn.addEventListener("click" , () => {
  a--
  a= (a<=0) ? num2 : a;
  num.innerText = a

  price -= 149.99
  price = (price < 0) ? num2 : price;

totalPrice.innerText = `${price}`
console.log(totalPrice);

})



