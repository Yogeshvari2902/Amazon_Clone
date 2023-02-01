import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
import dropdown from "../components/dropdown.js"
document.getElementById("dropDown").innerHTML=dropdown;
import dropdown1 from "../components/dropdown1.js"
document.getElementById("dropDown1").innerHTML=dropdown1;
import dropdown2 from "../components/dropdown2.js"
document.getElementById("dropDown2").innerHTML=dropdown2;


localStorage.setItem("category","")
localStorage.setItem("showid","")

/////////
document.getElementById("men").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})
document.getElementById("women").addEventListener("click",()=>{
    localStorage.setItem("category","women")
    location.href="./women.html"
})
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
    document.getElementById("sbsignIn").setAttribute("href","./fashion.html");

}
function logout()
{
    localStorage.removeItem("current_user");
}