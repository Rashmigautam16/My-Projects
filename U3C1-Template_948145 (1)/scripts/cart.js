let get=JSON.parse(localStorage.getItem("cart"))


function cart(get){
    let container=document.getElementById("container");
    container.innerHTML=null;

    get.forEach(function(el,index){
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
        btn.innerText="remove"
        btn.addEventListener("click", function(){
            removecart(index)
        })
        div.append(image, name, brand, price, btn);
        container.append(div);
    })
}

cart(get)

function removecart(index) {
    get.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(get));
    window.location.reload();
}