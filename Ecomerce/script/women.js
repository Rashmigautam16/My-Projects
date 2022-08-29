import navbar from "./navbar.js";

document.getElementById("navbar").innerHTML=navbar()

var womensData = [
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
      name: "WOMEN'S REEBOK PRINT LEGGINGS ",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
      name: "WOMEN'S REEBOK POLYTIGHT",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name: "WOMEN'S REEBOK SLEEVE TEE",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC TIGHTS",
      price: 1099,
      strikedoffprice: 1249,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",
      name: "UNISEX REEBOK SHOW SHOES",
      price: 1249,
      strikedoffprice: 1489,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S CLASSIC REEBOK PANTS",
      price: 1459,
      strikedoffprice: 1235,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
      price: 849,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
      price: 1550,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
      price: 1399,
      strikedoffprice: 6599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
      name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
      price: 949,
      strikedoffprice: 1899,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
      name: "WOMEN'S REEBOK PRINT LEGGINGS ",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
      name: "WOMEN'S REEBOK POLYTIGHT",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name: "WOMEN'S REEBOK SLEEVE TEE",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC TIGHTS",
      price: 1099,
      strikedoffprice: 1249,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",
      name: "UNISEX REEBOK SHOW SHOES",
      price: 1249,
      strikedoffprice: 1489,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S CLASSIC REEBOK PANTS",
      price: 1459,
      strikedoffprice: 1235,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
      price: 849,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
      price: 1550,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
      price: 1399,
      strikedoffprice: 6599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
      name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
      price: 949,
      strikedoffprice: 1899,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
      name: "WOMEN'S REEBOK PRINT LEGGINGS ",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
      name: "WOMEN'S REEBOK POLYTIGHT",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name: "WOMEN'S REEBOK SLEEVE TEE",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC TIGHTS",
      price: 1099,
      strikedoffprice: 1249,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",
      name: "UNISEX REEBOK SHOW SHOES",
      price: 1249,
      strikedoffprice: 1489,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S CLASSIC REEBOK PANTS",
      price: 1459,
      strikedoffprice: 1235,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
      price: 849,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
      price: 1550,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
      price: 1399,
      strikedoffprice: 6599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
      name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
      price: 949,
      strikedoffprice: 1899,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
      name: "WOMEN'S REEBOK PRINT LEGGINGS ",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
      name: "WOMEN'S REEBOK POLYTIGHT",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name: "WOMEN'S REEBOK SLEEVE TEE",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC TIGHTS",
      price: 1099,
      strikedoffprice: 1249,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",
      name: "UNISEX REEBOK SHOW SHOES",
      price: 1249,
      strikedoffprice: 1489,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S CLASSIC REEBOK PANTS",
      price: 1459,
      strikedoffprice: 1235,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
      price: 849,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
      price: 1550,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
      price: 1399,
      strikedoffprice: 6599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
      name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
      price: 949,
      strikedoffprice: 1899,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
      name: "WOMEN'S REEBOK PRINT LEGGINGS ",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
      name: "WOMEN'S REEBOK POLYTIGHT",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name: "WOMEN'S REEBOK SLEEVE TEE",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
      name: "WOMEN'S REEBOK PP TIGHTS",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK CLASSIC TIGHTS",
      price: 1099,
      strikedoffprice: 1249,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",
      name: "UNISEX REEBOK SHOW SHOES",
      price: 1249,
      strikedoffprice: 1489,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "WOMEN'S CLASSIC REEBOK PANTS",
      price: 1459,
      strikedoffprice: 1235,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
      price: 849,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
      price: 1550,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",
      name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
      price: 1399,
      strikedoffprice: 6599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
      name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
      price: 949,
      strikedoffprice: 1899,
    },
  ];
  
 
  
  function getdata(womensData){
    
  let container=document.getElementById('container');
  
  container.innerHTML=null;
  womensData.forEach(function(el){
      let div=document.createElement('div');
    
      let img=document.createElement("img");
      img.src=el.image_url
      
      let name=document.createElement("p");
      name.innerText=el.name
     
      let price=document.createElement("h5");
      price.innerText="Rs."+el.price
     
      let butn=document.createElement("button");
      butn.innerText="AddCart"
      
      div.append(img, name, price, butn)
      container.append(div);
  });

  localStorage.setItem("Women",JSON.stringify(womensData));
}
getdata(womensData)



document.getElementById("low").addEventListener("click",function(){
  decbutn(womensData)

})
document.getElementById("high").addEventListener("click",function(){
  incbutn(womensData)

})
 
    function decbutn(womensData){
        womensData=womensData.sort(function(a,b){
            return a.price - b.price
        })
     getdata(womensData) 
  }
  
  function incbutn(womensData){
    womensData=womensData.sort(function(a,b){
      return b.price - a.price
  })
   getdata(womensData)
  }