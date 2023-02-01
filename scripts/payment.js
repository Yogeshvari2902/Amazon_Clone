

//                                     card details
document.querySelector(".payment_popup").style.display = "none";
            document.getElementById("enterCardDetail").addEventListener("click", function(){
                event.preventDefault();
                document.querySelector(".payment_popup").style.display = "flex";
            })
            document.querySelector(".payment_close").addEventListener("click",function(){
                event.preventDefault();
                document.querySelector(".payment_popup").style.display = "none";
            })
    document.querySelector("#submit").addEventListener("click",payment);
    function payment(){
        event.preventDefault();
        let card = document.getElementById("cardNum").value;
        let name = document.getElementById("nameOnCard").value;
        let ex1 = document.querySelector(".day_btn").value;
        let ex2= document.querySelector(".year_btn").value;
        console.log(card.length,typeof(+card),name,typeof(name),ex1,typeof(+ex1),ex2,typeof(+ex2))
        if(card.length ==8 && typeof(+card)==typeof(5) && name.length>2  && (+ex1)>0 && (+ex1) <13 && (+ex2) > 22){
            window.alert("your card details are saved\nyou can now continue")
            document.getElementById("selectOption1").value="modeCARD"
            document.querySelector(".payment_popup").style.display = "none";
            //    alert("Payment Succesfully");
            //     alert("Your Order is placed Succesfully");
            //     window.location.href = "../index.html"
        }
        else{
            window.alert("Incorrect Credentials");
          }
    }


    //                           continue
    document.getElementById("continue1").addEventListener("click",Payment);
    document.getElementById("continue2").addEventListener("click",Payment);
    function Payment(){
        let mode=localStorage.getItem("mode")
        // event.preventDefault();
        // let inpt = document.getElementById("selectOption");
        let inpt1 = document.getElementById("selectOption1");
        let inpt2 = document.getElementById("selectOption2");
        let inpt3 = document.getElementById("selectOption3");
        let inpt4 = document.getElementById("selectOption4");
        let amt=0;
        if(mode=="cart")
            {
                amt=localStorage.getItem("subtotal")
            }
        else
        {
            let b=JSON.parse(localStorage.getItem("buy"));
            amt=+(b.disc)*(+(localStorage.getItem("buyqty")))
        }
        if(document.getElementById("masai").value=="20" || document.getElementById("masaih").value=="20")
        {
            let dis=Math.ceil(amt*20/100)
            if (dis>500)
                dis=500
            
                amt=amt-dis;
        }
        if(inpt1.checked === true){
   
            loading();
            alert("Your order is placed Thankyou! \nTotal:"+amt)
            window.location.href="../index.html"

            }
           
        else if(inpt2.checked === true){
            let a = document.getElementById("hii").value;
            if(a!=""){
                loading();
                alert("Your order is placed Thankyou! \nTotal:"+amt)
                window.location.href="../index.html"
;
            }
            else{
                alert("Please select any Bank Account");
            
            }
        }
        else if(inpt3.checked === true){
            let b = document.querySelector(".input_gape2").value;
            if(b!=""){
                loading();
                alert("Your order is placed Thankyou! \nTotal:"+amt)
            window.location.href="../index.html"


            }
            else{
                window.alert("please enter a valid UPI")
            }
        }
        else if(inpt4.checked === true){
            loading();
            window.alert("Your order is placed Thankyou! \nTotal:"+amt)
            alert("You will pay after delivery");
            window.location.href="../index.html"
        }
        else{
            alert("Please select any payment method");
        }
    }



    //            loading

function loading()
{
    document.getElementById("loading_paymenthid").setAttribute("id","loading_payment")
    document.getElementById("loading_gifhid").setAttribute("id","loading_gif");
    setTimeout(function(){
        document.getElementById("loading_payment").setAttribute("id","loading_paymenthid");
        document.getElementById("loading_gif").setAttribute("id","loading_gifhid");
    },1000)
}
document.getElementById("voucher").addEventListener("click",voucher)
loading();

function voucher()
{
    document.getElementById("masaih").setAttribute("id","masai");
    
}