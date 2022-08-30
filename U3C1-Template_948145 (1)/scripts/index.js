//store the products array in localstorage as "data"


document.getElementById("product_form").addEventListener("submit", function(event) {
    getdata(event)
})

let arr=JSON.parse(localStorage.getItem("data")) ||[]

function getdata(event) {
    event.preventDefault()

    let form=document.getElementById("product_form")
    let image=form.product_image.value;
    let name=form.product_name.value;
    let brand=form.product_brand.value;
    let price=form.product_price.value;

    let data=new productData(image, name, brand, price);

   arr.push(data);
   console.log(arr);
   localStorage.setItem("data", JSON.stringify(arr));

}

function productData(i, n, b, p){
    this.product_image=i,
    this.product_name=n,
    this.product_brand=b
    this.product_price=p

}

document.getElementById("show_products").addEventListener("click", function(){
    window.location.href="inventory.html"
})

  
