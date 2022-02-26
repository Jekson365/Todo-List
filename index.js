
 

var color_1 = 130
var color_2 = 214
var todos = []
$(document).ready(function () {
     
    $("#submition").click(function (e) {
        e.preventDefault()
         
        const value_inp = $("#myinp").val()
        if (value_inp == "" || value_inp.length < 4) {
            alert("filed is empty or characters are less then 4 symbols")
        }
        else {
             
            $(".main").append('<div class="inner-main"><p>'
                + value_inp + '</p><button type="button" \
                 class= "btnn" > წაშლა</button ></div > ')
            if ($(".inner-main").length == 0) {
                $("#title").css({ "display": "block" })
            }
            else {
                $("#title").css({ "display": "none" })
            }
        }
        
        $("#myinp").val("")
        
    })
    
})


$(document).on("click", '.btnn', function () {
    $(this).parent().slideUp("slow")
     
    if ($(".inner-main").length == 0) {
        $("#title").css({"display":"block"})
    }
    else {
        $("#title").css({"display":"none"})
    }
})

 



 