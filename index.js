//  add variable for principle amount
let principleamt = document.querySelector("#principleamt");
// add variable for interest 
let interest = document.querySelector("#Rate");
// add variable for Tenure
let time = document.querySelector("#time");
//  add variable for select tag for select year and month 
let duration = document.querySelector("#duration");

// add variable for button 
let button = document.querySelector("#btn")
// add varible for total interest 
let TotalInterest = document.querySelector("#TotalInterest");
// add variable for get Total amout pay over the loan tensure
let totalamt = document.querySelector("#TotalAmount");
// add variable to add classList remove already exists classlist and addClasslist  
let EmiDetails = document.querySelector("#Emidetails");
console.log(totalamt.value);
// let emiamt = document.querySelector('#emiamt')
let Emi = document.querySelector("#emi")
// console.log(Emi);
// adding  event listener for button 
button.addEventListener("click", (e) => {
// show alert entre correct values when input values is empty
    if (principleamt.value !== "" && time.value !== "" && interest.value !== "") {
//  add condition when select value is month this condition will execute
        if (duration.value == "month") {
        if(time.value>=350){
            alert("Month  be below 350")
        }else{
            //  applying formula to inputs
            let rateOfint = interest.value / 1200
            let formula = Number((principleamt.value * rateOfint)) * ((1 + rateOfint) ** time.value)
            let formula2 = Number((1 + rateOfint) ** time.value - 1)
// add classList when it click button 
if(interest.value>20){
    alert("interest should be below 20%")
}else{
            EmiDetails.classList.add("show")
// dividing the 2 values   
            let MonthlyEmi = formula / formula2

            Emi.innerText = "Your EMI  per mont :" + " ₹" + Math.round(MonthlyEmi).toLocaleString();
            let totalamount = MonthlyEmi * time.value
        
          
            let Totalinterest = totalamount - principleamt.value

            TotalInterest.innerText = "Total Interest :" + " ₹" + Math.round(Totalinterest).toLocaleString();
            
            totalamt.innerText = "Total Amount :" + " ₹" + Math.round(totalamount).toLocaleString();
        }
        }  
        } else if (duration.value = "year") {
            if(time.value>35){
                alert("Years must be below 35")
            }else{
            // let selectyear = 12
            let years = time.value *12
            let yearofint =interest.value / 1200

            let formula = Number((principleamt.value * yearofint)) * ((1 + yearofint) ** years)
            let formula2 = Number((1 + yearofint) ** years - 1)
            if(interest.value>20){
                alert("interest  must be  below 20%")
            }else{
            EmiDetails.classList.add("show")

            let MonthlyEmi = formula / formula2

            Emi.innerText = "Your EMI  per month :" + " ₹" + Math.round(MonthlyEmi).toLocaleString();

            let totalamount = MonthlyEmi *years
           
            let Totalinterest = totalamount - principleamt.value

            TotalInterest.innerText = "Total Interest :" + " ₹" + Math.round(Totalinterest).toLocaleString();
            
            totalamt.innerText = "Total Amount :" + " ₹" + Math.round(totalamount).toLocaleString();
        }
    }
        }else{
            alert("please check it correctly")
        }
        
    }
    else {
        alert("please enter the values");
    }


});