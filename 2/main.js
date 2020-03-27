function runPage(){
    $("p").click(()=>$("#updateButton").text("Click here to update"));
    $("#updateButton").click(()=>{
    $.get('response.json', (data)=>$("p").text(data.body))
    })
}
$(document).ready(runPage);