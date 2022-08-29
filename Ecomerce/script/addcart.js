import navbar from "./navbar.js";

document.getElementById("navbar").innerHTML=navbar()


let cart=JSON.parse(localStorage.getItem("Mens"));

console.log(cart)

function getCart(cart){
let container=document.getElementById("container");
   container.innerHTML=null;
   
   cart.forEach(function(el,index){
     let div=document.createElement('div');
     
      let img=document.createElement("img");
      img.src=el.image_url
      
      let name=document.createElement("p");
      name.innerText=el.name
     
      let price=document.createElement("h5");
      price.innerText="Rs."+el.price
      let butn=document.createElement("button");
      butn.innerText="Delete"
      butn.addEventListener("click",function(){
        deletecart(index);
      })
      div.append(img,name,price, butn)
      container.append(div)
    })
} 

getCart(cart)

function deletecart(index){
    cart.splice(index,1)
    localStorage.setItem("Mens",JSON.stringify(cart))
    window.location.reload()
}