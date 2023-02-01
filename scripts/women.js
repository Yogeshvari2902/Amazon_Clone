import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
import fetchdata from "../components/fetchdata.js";
import dropdown from "../components/dropdown.js"
document.getElementById("dropDown").innerHTML=dropdown;
import dropdown1 from "../components/dropdown1.js"
document.getElementById("dropDown1").innerHTML=dropdown1;
import dropdown2 from "../components/dropdown2.js"
document.getElementById("dropDown2").innerHTML=dropdown2;




localStorage.setItem("showid","")
let category=localStorage.getItem("category");
let getfun=async()=>{
    var data=await fetchdata;
    console.log(data)
    appenddata(data);
    filterDiscoun(data)
}
getfun();
function appenddata(data){
    //document.getElementById("sort").onchange(handlesort(data))
    document.getElementById("sort").addEventListener("change",()=>{ handlesort(data); })
    handlesort(data)
}
function getinfo(data){
    document.getElementById("showresult").innerText=""
    data.map((el)=>{
        if(el.category==="women's clothing"){
            displaydata(el);
        }
    })
}
function handlesort(data){
    var nameorder=document.getElementById("sort").value
    if(nameorder==="ascending"){
        console.log("asc")
      data.sort(function(a,b){
        if(a.discPrice>b.discPrice){
          return 1
        }
        if(a.discPrice<b.discPrice){
          return -1
        }
        return 0
      })
    }
    if(nameorder==="all"){
      console.log("all")
    data.sort(function(a,b){
      if(true){
        if( 1-Math.floor(Math.random()*2) ==1)
        {
          return 1
        }
        else
        {
          return -1
        }
    }
  })
}
    if(nameorder==="descending"){
        console.log("dsc")
      data.sort(function(a,b){
        if(a.discPrice>b.discPrice){
          return -1
        }
        if(a.discPrice<b.discPrice){
          return 1
        }
        return 0
      })
    }
    if(nameorder==="rating"){
        console.log("rating")
      data.sort(function(a,b){
        if(a.rating.rate>b.rating.rate){
          return -1
        }
        if(a.rating.rate<b.rating.rate){
          return 1
        }
        return 0
      })
    }
    getinfo(data)
}

function displaydata(el){
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
            document.getElementById("showresult").append(div);
}
//////////////////
function filterDiscoun(data){

    ///************DISCOUNT FILTER********//
    function filterDiscount(discount) {
        //console.log(discount,data);
      var brandList = data.filter(function (elem) {
        return elem.discount >= discount;
      });
       document.getElementById("showresult").innerText=""
       //console.log(brandList);
       appenddata(brandList)
      
     }
    var checkbox = document.querySelectorAll(".discount-input");
    checkbox.forEach(function (e) {
        e.addEventListener("change", function () {
            if (this.checked) {
                //console.log(e.value)
                var discount = e.value;
                filterDiscount(discount);
            } else {
                //console.log("reset discount");
                appenddata(data)
            }
        });
    });
    ///////***color filter**************///
    function colorFilter(value) {
        var brandList = data.filter(function (elem) {
            return elem.color == value;
        });
        //empty product container to before appending the filter products

        document.getElementById("showresult").innerText=""
       //console.log(brandList);
       appenddata(brandList)
    }
    var checkbox = document.querySelectorAll(".color-input");
    checkbox.forEach(function (e) {
        e.addEventListener("change", function () {
            if (this.checked) {
                var value = e.value;
                //console.log(data);
                colorFilter(value);

            } else {
                appenddata(data)
            }
        });
    });
    //////////************price******** */////////////
    var checkbox = document.querySelectorAll(".price-input");
checkbox.forEach(function (e) {
  e.addEventListener("change", function () {
    if (this.checked) {
      var max = e.value;
      var min = e.name;
      //console.log(max,min);
      filterRate(min, max);
      
    } else {
        appenddata(data)
    }
  });
});

function filterRate(min, max) {
  var brandList = data.filter(function (elem) {
    return elem.discPrice >= min && elem.discPrice <= max;
  });
  document.getElementById("showresult").innerText=""
  //console.log(brandList);
  appenddata(brandList)
}
/////***************brand filter**************///////////
var checkbox = document.querySelectorAll(".brand-input");
checkbox.forEach(function (e) {
  e.addEventListener("change", function () {
    if (this.checked) {
      var value = e.value;
      if(value==""){
        checkBox("Amazon Brand - Symactive")  
        checkBox("Amazon Brand - Symbol")
        } 
        else{
            checkBox(value);
        }
    }
     
    else {
        appenddata(data)
    }
  });
});
function checkBox(value) {
    //console.log('value');
    document.getElementById("showresult").innerText=""
    
  var brandList = data.filter(function (elem) {
    return elem.brand == value;
  });
       console.log(brandList);
       appenddata(brandList)
}

}
/////////////////////
// ///////////////////
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
    document.getElementById("sbsignIn").setAttribute("href","./women.html");

}
function logout()
{
    localStorage.removeItem("current_user");
}