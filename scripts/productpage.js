import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
import fetchdata from "../components/fetchdata.js";
import dropdown from "../components/dropdown.js"
document.getElementById("dropDown").innerHTML=dropdown;
import dropdown1 from "../components/dropdown1.js"
document.getElementById("dropDown1").innerHTML=dropdown1;
import dropdown2 from "../components/dropdown2.js"
document.getElementById("dropDown2").innerHTML=dropdown2;


let category=localStorage.getItem("category");
let id=localStorage.getItem("showid")
getinfo();
async function getinfo(){
    let url=`http://localhost:3000/products/${id}`
    let res=await fetch(url);
    let data1=await res.json();
    console.log("data",data1);
    display(data1);
    localStorage.setItem("currentproduct",JSON.stringify(data1));
}
function display(data){
    document.getElementById("adddescription").innerText=""
    document.getElementById("imgdiv").innerText=""
    let img=document.createElement("img")
    img.src=data.img
    document.getElementById("imgdiv").append(img)
    let p=document.createElement("p")
    p.innerText=data.description
    // console.log(data.description)
    document.getElementById("adddescription").append(p)
    displaydetail(data)
    displaybtn(data)
}
function displaybtn(el){
    let div=document.createElement("div")
    div.setAttribute("id","cartbutt")
    let op = document.createElement("span")
    op.innerText=`₹${el.discPrice}`
    op.setAttribute("id","discount");
    let p=document.createElement("div")
    p.innerHTML=`<span id="free"> FREE delivery</span> <span class="date">Saturday, 22 October</span> on first order. <a href="">Details</a>`
    p.setAttribute("id","free_dilevery")
    let p1=document.createElement("div")
    p1.innerHTML=`Or fastest delivery Tomorrow, <span class="date"> October 18</span>. Order within <span id="time">26 mins.</span>  <a href="">Details</a>`
    p1.setAttribute("id","paid_dilevery")
    let p2=document.createElement("div")
    p2.innerText="In stock."
    p2.setAttribute("id","stock")
    let p3=document.createElement("div")
    p3.innerText="Shows what is inside. Item often ships in manufacturer container to reduce packaging. If this is a gift, consider shipping to a different address."
    p3.setAttribute("id","giftitem");
    let div1=document.createElement("div")
    div1.setAttribute("id","quantity")
    let p4=document.createElement("span")
    p4.innerText="Qty:"
    
    let type=document.createElement("input")
    type.type="number"
    type.defaultValue=1
    type.min=1
    type.max=10
    type.setAttribute("id","Qty");
    div1.append(p4,type)
    let btn1=document.createElement("button")
    btn1.setAttribute("id","cart2")
    btn1.addEventListener("click",addtocart);
    btn1.innerHTML="Add To Cart"
    let btn2=document.createElement("button")
    btn2.setAttribute("id","buy")
    btn2.addEventListener("click", buynow )
    btn2.innerText="Buy Now"
    div.append(btn1,btn2)
    document.getElementById("cartdiv").append(op,p,p1,p2,p3,div1,div)
}
function displaydetail(el){
    let div1=document.createElement("div")
    div1.setAttribute("id","product_top")
    let head=document.createElement("div")
    head.setAttribute("id","product_head")
    head.innerHTML=`<span>${el.brand}</span> <span>${el.title}<span>`
    let div11 = document.createElement("div");
    let rating= document.createElement("div");
    rating.setAttribute("class","Rating");
    div11.setAttribute("class","rating")
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
    let count = document.createElement("p")
    count.innerText =` ( ${el.rating.count})`;
    count.setAttribute("class","count");
    div11.append(rating, count);
    div1.append(head,div11);


    let div2=document.createElement("div")
    div2.setAttribute("id","mrpdeda")
    let mrp = document.createElement("span")
    mrp.innerHTML=`M.R.P : <span id="Mrp">₹${el.price}</span>`
    mrp.setAttribute("id","mrp");
    let div22=document.createElement("div")
    div22.setAttribute("id","deal");
    let amz=document.createElement("img")
    amz.src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
    let deal = document.createElement("p")
    deal.innerText="Deal of the Day : "
    let op = document.createElement("span")
    op.innerText=`₹${el.discPrice}`
    div22.append(deal,amz,op)


    let end = document.createElement("p")
    end.innerText="Ends in 10 days"
    end.setAttribute("id","end");
    let save = document.createElement("p")
    let dif=+el.price-el.discPrice
    // console.log(dif)
    save.innerHTML=`You Save: ₹<span id="diff">${dif} </span><span id="disc">(${el.discount}% off)</span>`
    let tax = document.createElement("p")
    tax.innerText="Inclusive of all taxes"
    tax.setAttribute("id","tax")
    div2.append(mrp,div22,end,save,tax)
    let div3=document.createElement("div")
    div3.setAttribute("id","iconcontainer")
    let div31=document.createElement("div")
    div31.setAttribute("class","icons")
    let img1=document.createElement("img")
    img1.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
    let p1=document.createElement("p")
    p1.innerText="Pay on Delivery"
    let div32=document.createElement("div")
    div32.setAttribute("class","icons")
    let img2=document.createElement("img")
    img2.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
    let p2=document.createElement("p")
    p2.innerText="Free Delivery"
    let div33=document.createElement("div")
    div33.setAttribute("class","icons")
    let img3=document.createElement("img")
    img3.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
    let p3=document.createElement("p")
    p3.innerText="30 Days Returns & Exchange"
    let div34=document.createElement("div")
    div34.setAttribute("class","icons")
    let img4=document.createElement("img")
    img4.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
    let p4=document.createElement("p")
    p4.innerText="Amazon Delivered"
    div31.append(img1,p1)
    div32.append(img2,p2)
    div33.append(img3,p3)
    div34.append(img4,p4)
    div3.append(div31,div32,div33,div34)
    document.getElementById("pricediv").append(div1,div2,div3)
}
let getfun=async()=>{
    var data=await fetchdata;
    //console.log(data)
    appenddata(data);
}
getfun();
function appenddata(data){
    document.getElementById("relateddiv1").innerText=""
    data.map((el)=>{
        if(category=="men"){
            if(el.category==="men's clothing"&& el.id!=id){
                //displaydata(el);
                
                displaydata1(el);
                //console.log(el);
            }
        }
        else if(category=="women"){
            if(el.category==="women's clothing"&& el.id!=id){
                displaydata1(el);
                // console.log(el);
            }
        }
        
    })
}

function displaydata1(el){
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
        document.getElementById("relateddiv1").append(div);
}


////////////////////
////////////////
document.getElementById("mens").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})

document.getElementById("womens").addEventListener("click",()=>{
    localStorage.setItem("category","women")
    location.href="./women.html"
})
document.getElementById("mens").addEventListener("mouseover",()=>{
    document.querySelector("#dropDown").style.display="flex";
})
document.getElementById("womens").addEventListener("mouseover",()=>{
    document.querySelector("#dropDown1").style.display="flex";
})
document.getElementById("mens").addEventListener("mouseout",()=>{
    document.querySelector("#dropDown").style.display="none";
})
document.getElementById("womens").addEventListener("mouseout",()=>{
    document.querySelector("#dropDown1").style.display="none";
})
document.getElementById("kids").addEventListener("mouseover",()=>{
    document.querySelector("#dropDown2").style.display="flex";
})
document.getElementById("kids").addEventListener("mouseout",()=>{
    document.querySelector("#dropDown2").style.display="none";
})
document.getElementById("dropDown2").addEventListener("mouseover",()=>{
    document.querySelector("#dropDown2").style.display="flex";
})
document.getElementById("dropDown2").addEventListener("mouseout",()=>{
    document.querySelector("#dropDown2").style.display="none";
})
document.getElementById("dropDown").addEventListener("mouseover",()=>{
    document.querySelector("#dropDown").style.display="flex";
})
document.getElementById("dropDown").addEventListener("mouseout",()=>{
    document.querySelector("#dropDown").style.display="none";
})
document.getElementById("dropDown1").addEventListener("mouseover",()=>{
    document.querySelector("#dropDown1").style.display="flex";
})
document.getElementById("dropDown1").addEventListener("mouseout",()=>{
    document.querySelector("#dropDown1").style.display="none";
})

function addtocart()
{
    if(current_user==null || current_user.length==0)
    {
        window.alert("please signup first")
    }
    else
    {
    let cp=JSON.parse(localStorage.getItem("currentproduct"));
    let qty=document.getElementById("Qty").value;
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let quantity=JSON.parse(localStorage.getItem("Qty")) || []; 
    cart.push(cp);
    if(qty>10)
        qty=10;

    quantity.push(qty);
    localStorage.setItem("Qty",JSON.stringify(quantity));
    localStorage.setItem("cart",JSON.stringify(cart));
    
    }
}
function buynow()
{
    if(current_user==null || current_user.length==0)
    {
        window.alert("please signup first")
    }
    else
    {
    let cp=JSON.parse(localStorage.getItem("currentproduct"));
    
    let qty=document.getElementById("Qty").value;
    localStorage.setItem("buy",JSON.stringify(cp));
    localStorage.setItem("mode","buy")
    localStorage.setItem("buyqty",qty);
    window.location.href="./payment.html"
    }
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
    document.getElementById("sbsignIn").setAttribute("href","./productpage.html");

}
function logout()
{
    localStorage.removeItem("current_user");
}