$(document).ready(function()
{
    $("#bars").click(function(){
        if ($("#ddown").hasClass("ddown"))
        {
            $("#ddown").removeClass("ddown");
        }
        else
        {
            $("#ddown").addClass("ddown");
        }
        return false; 
    });
});