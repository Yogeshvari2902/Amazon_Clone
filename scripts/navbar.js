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
   if(input == "mens" || input=="mans" || input=="men" || input=="mans tshirt"){
    location.href = "./pages/men.html";
   }
   else if(input === "womens" || input=="womans" || input=="women" || input=="womans tshirt"){
    location.href = "./pages/women.html";
   }
   else if(input === "fashion" || input== "clothes" || input=="clothing" || input=="cloths"){
    location.href = "./pages/fashion.html";
   }
   else if(input === "kids"){
    location.href = "./pages/fashion.html";
   }
   else if(input === "products"){
    location.href = "./pages/fashion.html";
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
    document.getElementById("signInuser").setAttribute("href","./pages/account");
    document.getElementById("user2").innerHTML=`Hello, ${current_user.name}`;
    document.getElementById("sbsignIn").innerText="logout";
    document.getElementById("sbsignIn").addEventListener("click",logout);
    document.getElementById("sbsignIn").setAttribute("href","./index.html");

}
function logout()
{
    localStorage.removeItem("current_user");
}
