
localStorage.setItem("mode","cart")
getinfo();
async function getinfo(){
    let url=`http://localhost:3000/products?_sort=rating.count&_order=desc`
    let res=await fetch(url);
    let data1=await res.json();
    console.log("data",data1);
    displayrecdata(data1);
    displayreldata(data1)
}
function displayrecdata(data)
{
    document.getElementById("recitems").innerHTML=""
    for(let i=0;i<6;i++)
    {
        displayrec2data(data[i]);
    }
}
function displayrec2data(el){

    
    let div=document.createElement("div")
    div.addEventListener("click",()=>{
        localStorage.setItem("showid",el.id)
        location.href="./productpage.html"
        let history=JSON.parse(localStorage.getItem("history")) || [];
        history.push(el);
        localStorage.setItem("history",JSON.stringify(history));
    })
        let imgdiv=document.createElement("div")
        let img=document.createElement("img")

        img.src=el.img
        imgdiv.setAttribute("class","imgdiv")
       imgdiv.append(img);
   
        let brand=document.createElement("h2")
       brand.innerText=el.brand
       let title=document.createElement("h3")
       title.innerText=el.title
    
       let div1=document.createElement("div")
       div1.setAttribute("class","rating")
       let rating=document.createElement("div")
       for(let ss=0;ss<5;ss++)
        {
            let star=document.createElement("i")
             if(ss<el.rating.rate)
                {
                  star.setAttribute("class","fa-solid fa-star checked");
                }
               else
               {
                 star.setAttribute("class","fa-solid fa-star");
                }
            rating.append(star)
         }
    
    
    // div1.append(star);
        let count=document.createElement("p")
        count.innerText=`(${el.rating.count})`;
       div1.append(rating,count);
       let div2=document.createElement("div")
       div2.setAttribute("class","price")
       let oprice=document.createElement("p")
       oprice.innerText=`₹${el.price}`
       oprice.style.textDecoration="line-through"
       let price=document.createElement("h4")
        price.innerText=`₹${el.discPrice}`
        let disper=document.createElement("p")
        disper.innerText=`(${el.discount}% off)`
        disper.setAttribute("class","discount")
        div2.append(price,oprice,disper)
        div.append(imgdiv,brand,title,div1,div2)
        document.getElementById("recitems").append(div);
}
function displaycart()
{
    document.getElementById("cartitems").innerHTML=``
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let qty=JSON.parse(localStorage.getItem("Qty")) || [];
    console.log(cart);
    let amt=0;
    let tit=0;
    cart.map(function(ele,ind)
    {
        let pro=document.createElement("div");
        let p1=document.createElement("div");
        let proimg=document.createElement("img");
        let product=document.createElement("div");
        let p2=document.createElement("span");
        let p3=document.createElement("span");
        let p4=document.createElement("img");
        let p5=document.createElement("span");
        let low=document.createElement("div");
        let del=document.createElement("span");
        let see=document.createElement("a");
        let Qty=document.createElement("div");
        let q=document.createElement("span");
        let sel=document.createElement("select");

        pro.setAttribute("class","catemdad");
        p1.setAttribute("class","proimg");
        product.setAttribute("class","catem");
        p2.setAttribute("class","catemhead");
        p3.setAttribute("class","catemstock");
        p4.setAttribute("class","catemimg");
        p5.setAttribute("class","catemcat");
        low.setAttribute("class","catemdiv");
        see.setAttribute("class","catemsee");
        Qty.setAttribute("class","catemqty");
        del.setAttribute("class","catemdel");
        sel.setAttribute("class","catemselect");

        p1.innerHTML=`<img src=${ele.img}>`
        p2.innerHTML=`${ele.brand} ${ele.title}<span>₹${ele.discPrice}`
        p3.innerHTML=`In Stock`
        p4.src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
        p5.innerHTML=`category:${ele.category}`
        see.innerHTML=`See more like this`
        del.innerHTML=`Delete`
        q.innerHTML=`Qty:`
        sel.innerHTML=` 
        <option default value="${qty[ind]}">${qty[ind]}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        
        `
        amt+=+(ele.discPrice)*(qty[ind]);
        tit+=+(qty[ind]);

        if(ele.categoy=="men's clothing")
        {
            see.href="./men.html"
        }
        else
        {
            see.href="./women.html"
        }
        del.addEventListener("click",()=>{ delfromcart(ind) })
        
        sel.addEventListener("change",()=>{ quan(ind,sel.value) })
        Qty.append(q,sel)
        low.append(Qty,del,see);
        product.append(p2,p3,p4,p5,low);
        p1.append(proimg)
        pro.append(p1,product)
        document.getElementById("cartitems").append(pro);

    })
    if(amt>0)
        displaytotal(amt,tit);
}

displaycart();
function delfromcart(ind){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let qty=JSON.parse(localStorage.getItem("Qty")) || [];
    cart.splice(ind,1);
    qty.splice(ind,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    localStorage.setItem("Qty",JSON.stringify(qty));
    displaycart();
} 
function quan(indx,val)
{

    let qty=JSON.parse(localStorage.getItem("Qty")) || [];
     qty[indx]=0+val;
    localStorage.setItem("Qty",JSON.stringify(qty));
    console.log(val);
    displaycart();
}
function displaytotal(a,t)
{ 
    document.getElementById("subtotal").innerHTML="";
    console.log(a,t)
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    div1.setAttribute("id","eligible");
    div2.setAttribute("id","carttotal");
    div1.innerHTML=`<img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"><p>Your order is eligible for FREE Delivery.</p>`;
    div2.innerHTML=`Subtotal (${t} items): <span>₹${a}.00</span>`
    localStorage.setItem("subtotal",a);
    if(a>=499)
    {
        document.getElementById("subtotal").append(div1,div2);
    }
    else
    {
        document.getElementById("subtotal").append(div2);
    }
    }


    function displayreldata(data)
{
    document.getElementById("releitems").innerHTML=""
    for(let i=0;i<13;i++)
    {
        let t=Math.floor(Math.random()*24);
        displayrel2data(data[t]);
    }
}
function displayrel2data(el){

    
    let div=document.createElement("div")
    div.addEventListener("click",()=>{
        localStorage.setItem("showid",el.id)
        location.href="./productpage.html"
        let history=JSON.parse(localStorage.getItem("history")) || [];
        history.push(el);
        localStorage.setItem("history",JSON.stringify(history));
    })
        let imgdiv=document.createElement("div")
        let img=document.createElement("img")

        img.src=el.img
        imgdiv.setAttribute("class","imgdiv")
       imgdiv.append(img);
   
        let brand=document.createElement("h2")
       brand.innerText=el.brand
       let title=document.createElement("h3")
       title.innerText=el.title
    
       let div1=document.createElement("div")
       div1.setAttribute("class","rating")
       let rating=document.createElement("div")
       for(let ss=0;ss<5;ss++)
        {
            let star=document.createElement("i")
             if(ss<el.rating.rate)
                {
                  star.setAttribute("class","fa-solid fa-star checked");
                }
               else
               {
                 star.setAttribute("class","fa-solid fa-star");
                }
            rating.append(star)
         }
    
    
    // div1.append(star);
        let count=document.createElement("p")
        count.innerText=`(${el.rating.count})`;
       div1.append(rating,count);
       let div2=document.createElement("div")
       div2.setAttribute("class","price")
       let oprice=document.createElement("p")
       oprice.innerText=`₹${el.price}`
       oprice.style.textDecoration="line-through"
       let price=document.createElement("h4")
        price.innerText=`₹${el.discPrice}`
        let disper=document.createElement("p")
        disper.innerText=`(${el.discount}% off)`
        disper.setAttribute("class","discount")
        div2.append(price,oprice,disper)
        div.append(imgdiv,brand,title,div1,div2)
        document.getElementById("releitems").append(div);
}
function whistory()
{
    document.getElementById("hItems").innerHTML="";
    let his=JSON.parse(localStorage.getItem("history")) || [];
    his.map(function(ele)
    {
       let h=document.createElement("div")
       h.setAttribute("class","hItem")
        h.innerHTML=`<img src=${ele.img} >`
        document.getElementById("hItems").append(h)
    })
}
whistory();
document.getElementById("buy").addEventListener("click",buycart);
function buycart()
{
    window.location.href="./payment.html"
}

//                                            navbar






let current_user=JSON.parse(localStorage.getItem("current_user")) || null;

let logFlag=false;
if(current_user!==null)
{
    logFlag=true;
}

document.getElementById("openSidebar").addEventListener("click",()=>{
    event.preventDefault();
    document.getElementById("sideBar").style="left : 0";
});

document.getElementById("crossBtn").addEventListener("click",()=>{
    event.preventDefault();
    document.getElementById("sideBar").style="left : -28%";
});

document.getElementById("handleSubmit").addEventListener("click",()=>{
   let input = document.getElementById("search").value;
   if(input == "mens" || input=="mans" || input=="men" || input=="mans tshirt" || input=="man shirts" || input=="man"){
    location.href = "./men.html";
   }
   else if(input === "womens" || input=="womans" || input=="women" || input=="womans tshirt" || input=="woman shirts" || input=="woman"){
    location.href = "./women.html";
   }
   else if(input === "fashion" || input== "clothes" || input=="clothing" || input=="cloths"  ){
    location.href = "./fashion.html";
   }
   else if(input === "kids" || "diwali"){
    location.href = "./fashion.html";
   }
   else if(input === "products"){
    location.href = "./fashion.html";
   }
   else{
    // write path of home page
    location.href = "#";
   }
   document.getElementById("search").value = "";
});
if(logFlag==true)
{
    document.getElementById("signIn").innerHTML=`<span id="username">${current_user.name}</span>`;
    document.getElementById("signInuser").setAttribute("href","./account");
    document.getElementById("user2").innerHTML=`Hello, ${current_user.name}`;
    document.getElementById("sbsignIn").innerText="logout";
    document.getElementById("sbsignIn").addEventListener("click",logout);
    document.getElementById("sbsignIn").setAttribute("href","./fashion.html");

}
function logout()
{
    localStorage.removeItem("current_user");
}