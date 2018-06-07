//welcome page animation
$(document).ready(function () {


    $(".greet").slideDown(4000)
    $(".left").animate({
        height: "80%"
    }, 3000);
    $(".bottom").animate({
        width: "140%"
    }, 3000)
})

//Animation for welcome modal panel


var modalShow = setTimeout(function () {
    $("#exampleModal").modal('show');
}, 1000)



$(".later").click(function () {

    $("#exampleModal").modal('hide');
    setTimeout(function () {
        $("#exampleModal").modal('show');
    }, 3000)
})

$(".no").click(function () {
    $("#exampleModal").modal('hide');
    clearTimeout(modalShow)

})


//Hire me button animation 

setInterval(function () {
    setTimeout(function () {
        $(".hire").css({
            "background": "#ffb900",
            "border": "1px solid #ffb900"
        })
    }, 500)

    setTimeout(function () {
        $(".hire").css({
            "background": "green",
            "border": "1px solid green"
        })
    }, 1000)
    setTimeout(function () {
        $(".hire").css({
            "background": "#1d1f21",
            "border": "1px solid #1d1f21"

        })
    }, 1500)
    setTimeout(function () {
        $(".hire").css({
            "background": "#de5347",
            "border": "1px solid #de5347"
        })
    }, 2000)

    setTimeout(function () {
        $(".hire").css({
            "background": "purple",
            "border": "1px solid purple"

        })
    }, 2500)

}, 3000)




//Animation for twinkle start---------------------------------------------------------------      
setInterval(function () {

    var a = 1000;

    $(".overlayThree").animate({
        marginLeft: a
    });



    setTimeout(function () {
        $(".overlayThree").animate({
            marginLeft: -800
        });

    }, 20000)


}, 15000);


//panelOverlay

setInterval(function () {

    var a = 1000;

    $(".panelOverlay").animate({
        marginLeft: a
    });



    setTimeout(function () {
        $(".panelOverlay").animate({
            marginLeft: -500
        });

    }, 15000)


}, 10000);



//Animation for twinkle start end---------------------------------------------------------------
