$(function() { 

    console.log("Test Login")
    $("#problem").hide();
    $("#sign-problem").hide();
    var libraryPage = "home.html"
    
    
    //Login Page 

    $(".login-btn").on("click", function(){
        event.preventDefault();
    
        var nameInput = document.getElementById("inputName").value
        var passwordInput = document.getElementById("inputPassword").value

        if(nameInput == "Metal"){
            if(passwordInput == "X"){
                $(location).attr('href', libraryPage);
                
            }
            
        }   
        
        if(nameInput == "Mike"){
            if(passwordInput == "rick"){
                $(location).attr('href', libraryPage);
                
            }

        } 
        
        if(nameInput == "Mike"){
            if(passwordInput == "morty"){
                $(location).attr('href', libraryPage);
                
            }
            
        } 
        

        if(nameInput == "Admin"){
            if(passwordInput == "1234"){
                $(location).attr('href', libraryPage);
                
            }
            
        } 

        if(nameInput == ""){
            $("#problem").show();
            $("#problem").text("Wow, that cool name isn't in our database sorry about that")
            
        }  
            
        if(passwordInput == ""){
            $("#problem").show();
            $("#problem").text("Unfortunately that password isn't in our awesome database")
            
        }  

        if(nameInput == ""){
            if(passwordInput == ""){
                $("#problem").show();
                $("#problem").text("We are sorry, but that awesome username and password isn't available")
                
            }
        } 
    
    });

    //Sign Up

    $(".signup-btn").on("click", function(){
        event.preventDefault();
       
        var signupUser = document.getElementById("inputName").value
        var signupEmail = document.getElementById("inputPassword").value
        var signupPass = document.getElementById("inputName").value
        var signupPassConfirm = document.getElementById("inputPassword").value   

        if(signupUser == ""){
            $("#sign-problem").show();
            $("#sign-problem").text("Please make sure that your epic details is correct")
            
        }  
            
        if(signupEmail == ""){
            $("#sign-problem").show();
            $("#sign-problem").text("Please make sure that your epic details is correct")
            
        }  

        if(signupPass == ""){
            $("#sign-problem").show();
            $("#sign-problem").text("Please make sure that your epic details is correct")
           
        } 

        if(signupPassConfirm == ""){
            $("#sign-problem").show();
            $("#sign-problem").text("Please make sure that your epic details is correct")
             
        }

        if(signupPass == signupPassConfirm){
            $(location).attr('href', libraryPage);     
        }

    });

});