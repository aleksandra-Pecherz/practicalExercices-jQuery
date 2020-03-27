
function runPage(){
    var birthdayInformation=$("<p>");
    var resultInformation =$("<h2>");
    $("div").append(birthdayInformation);
    $("div").append(resultInformation);
    var birthday= $("#birthday").datepicker({
        showAnim:"fadeIn",
        onSelect:()=>{
            birthdayInformation.text("Your birthday: " + $("#birthday").val())
            if($("#birthday").hasClass("unselected")){
                 $("#birthday").removeClass("hasDatepicker unselected");
                 displayInformation(resultInformation);
            }
        }
    }) 
    var selectedDate= $("#selectedDate").datepicker({
        showAnim:"fadeIn",
        onSelect:()=>displayInformation(resultInformation)
    })
    console.log("here");
}
function displayInformation(resultInformation){
if ($("#birthday").val()===""){  
    resultInformation.text("You didn't select birth day")
    resultInformation.css("color","black");
    $("#birthday").addClass("unselected");
}
else {
    if($("#birthday").val()===$("#selectedDate").val()) {
       resultInformation.text("Happy Birthday")
       resultInformation.css("color","red");
    }
    else {
        resultInformation.text("Have a nice day")
        resultInformation.css("color","green");
    }
}
}
$(document).ready(runPage);
 