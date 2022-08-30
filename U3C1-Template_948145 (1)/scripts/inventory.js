

let arr=JSON.parse(localStorage.getItem("data"))
console.log(arr)

function mydata(arr){
    let container = document.getElementById("products_data")

    container.innerHTML = null;
    arr.forEach(function(el,index){
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.product_image;
        let name=document.createElement("p")
        name.innerText=el.product_name;
        let brand=document.createElement("h3")
        brand.innerText=el.product_brand;
        let price=document.createElement("p")
        price.innerText=el.product_price;
        let btn=document.createElement("button")
        btn.innerText="delete"
        btn.addEventListener("click", function(){
            deletedata(index)
        })

        let btn1=document.createElement("button")
        btn1.innerText="addcart"
        btn1.addEventListener("click", function(){
            addcart(el)
        })
       
        div.append(image, name, brand, price ,btn, btn1);
        container.append(div);
   })
}
mydata(arr)

function deletedata(index){
    arr.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(arr));
    window.location.reload();
}


document.getElementById("add_product").addEventListener("click", function(){
    window.location.href = "index.html";
})

let getcart=JSON.parse(localStorage.getItem("cart"))||[];
function addcart(el) {
getcart.push(el);
localStorage.setItem("cart", JSON.stringify(getcart));
}