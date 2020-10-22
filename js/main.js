$(function() {
    
    console.log("Main js test");
    
    $("#main-title").text("Welcome to ALPHA AIRLINES"); 
    
    
    $(function(){
   
    $(".logo-container").on("mouseenter",function(){
    $(this).find("img").attr("src", "img/Logo_hover.png");
    });
        
    $(".logo-container").on("mouseleave",function(){
    $(this).find("img").attr("src", "img/logo.png");
    });

        
});
});