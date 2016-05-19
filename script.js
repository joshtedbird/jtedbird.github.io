$(document).ready(function(){
    
    //Log in Variables
    var LogSin = 0;
    var home = true;

    //Calculator Variables
    var calcString = "";
    var calcScore = 0;
    var calcQ = 0;

    var infoArr = [];
    var calcArr =   [
                    "Are you over the age of 50?",
                    "Do you have high blood pressure?",
                    "Are you diabetic?",
                    "Does cardiovascular disease or strokes run in your family?",
                    "Do you have an irregular heartbeat?",

                    "Do you smoke?",
                    "Is your diet high in saturated fats and salt intake?",
                    "Are you obese?",
                    "Do you fail to exercise regularly?",
                    "Do you consume alcohol daily?",
                    ];

    var calcFinalArr =  ["Very Low", "Very Low", "Very Low",
                        "Low", "Low",
                        "Medium", "Medium",
                        "High", "High",
                        "Very High", "Very High",];

    //DOCUMENT LOAD
    if($.cookie("logs") == "1"){
        $(".banner_login").html($.cookie("hfs"));
        $("#99").html("Logout");
    }else{
        $(".banner_login").html("Guest");
        $("#99").html("Login");
    };

    //SIGN UP
    $("#11").click(function(){
        $(".login_btn").fadeOut("fast", function(){
        	$(".login_input").fadeIn("fast");
        	$("#26").fadeIn("fast");
        	$("#27").fadeIn("fast");
        });
    	$("#01").html("Sign Up");
    	LogSin = 1;
    });

    //LOGIN
    $("#12").click(function(){
    	$(".login_btn").fadeOut("fast", function(){
        	$("#23").fadeIn("fast");
        	$("#24").fadeIn("fast");
        	$("#26").fadeIn("fast");
        	$("#27").fadeIn("fast");
        });
    	$("#01").html("Login");
    	$("#26").html("Login");
    	LogSin = 2;
    });

    //LOGIN BACK
    $("#27").click(function(){
        $("#26").fadeOut("fast");
        $("#27").fadeOut("fast", function(){
        	$("#01").html("Login / Sign Up");
        	$(".login_btn").fadeIn("fast");
        });
        $(".login_input").fadeOut("fast", function(){
        	$(".login_input").val("");
        });
        LogSin = 0;
        fs = "";
    	ln = "";
    	us = "";
   	 	p = "";
    	p2 = "";
    });

    //LOGIN CONFIRM
    $("#26").click(function(){
        var fs = $("#21").val();
        var ln = $("#22").val();
        var us = $("#23").val();
        var p = $("#24").val();
        var p2 = $("#25").val();
        if(LogSin == 1){
            if(fs === "" || ln === "" || us === ""){
                alert("Please fill all fields.");
	        }else if(us === $.cookie("us" + us)){
	        	alert("Username already exists.");
	        }else if(p.length < 6){
	        	alert("Password must be 6 characters or more.");
	        }else if(p != p2){
	        	alert("Passwords do not match.");
	        }else{
                //Create Cookies
                $.cookie("fs" + us, fs);
                $.cookie("ln" + us, ln);
                $.cookie("us" + us, us);
                $.cookie("p" + us, p);
                $.cookie("logs", "1");
                $.cookie("hfs", fs);
                $.cookie("hus", us);
                window.location.href = "index.html";
	        };
        }else{
        	if(us != $.cookie("us" + us) || p != $.cookie("p" + us)){
                alert("Username or Password incorrect.");
            }else{
                $.cookie("logs", "1");
                $.cookie("hfs", $.cookie("fs" + us));
                window.location.href = "index.html";
            };
            
        LogSin = 0;
        };
    });

    $('#24').keypress(function(e){
      if(e.keyCode==13)
      $('#26').click();
    });

    $('#25').keypress(function(e){
      if(e.keyCode==13)
      $('#26').click();
    });

    //LOGOUT
    $("#99").click(function(){
        if($.cookie("logs") === "1"){
            $.cookie("logs", "0");
            alert("You have successfully logged out.")
            window.location.href = "index.html";
        }else{
            window.location.href = "login.html";
        };
    });

    //JUMBOTRON
    if($("body.home").length > 0){
        var slide = [1, 2, 0];
        var i = 0;
        setInterval(function(){
            $(".jumbotron").animate({right: slide[i]*960}, "slow");
            i++;
            if (i > 2){
                i = 0;
            }
        }, 5000);
    };

    //CALCULATOR BEGIN
    $("#calc_end").click(function(){
        $(".calcEnds").fadeOut(function() {
            $("#calc_text").html(calcArr[calcQ]);
            $("#calc_count").html(calcQ + 1 + "/10");

            $("#calc_text").fadeIn();
            $(".btnCalc").fadeIn();
            $("#calc_count").fadeIn();
        });
    });



    //CALCULATOR CLICK NO
    $("#calc_no").click(function(){
        calcQ ++;
        calcString += "0."; 
        $("#calc_no").calculate(); 
    });

    //CALCULATOR CLICK UNKNOWN
    $("#calc_idk").click(function(){
        calcQ ++;
        calcString += "2.";
        $("#calc_idk").calculate(); 
    });

    //CALCULATOR CLICK YES
    $("#calc_yes").click(function(){
        calcQ ++;
        calcScore ++;
        calcString += "1."; 
        $("#calc_yes").calculate(); 
    });

    //Calculating the risk of stroke
    $.fn.calculate = function(){
        if(calcQ == 10){
            $("#calc_count").fadeOut();
            $(".btnCalc").prop("disabled", true);
            $(".btnCalc").fadeOut(function() {
                $("#calc_text").html("You're risk of having a stroke is:");
                $(".calcBtns").html(calcFinalArr[calcScore]);
            });
            if($.cookie("logs") == "1"){
                $.cookie("cal" + $.cookie("hus"), calcString);
            };
        }else{
            $("#calc_text").html(calcArr[calcQ]);
            $("#calc_count").html(calcQ + 1 + "/10");
        } 
    };
    
    if($("body.info").length > 0){
        if($.cookie("logs") == "1" && $.cookie("cal" + $.cookie("hus")).length > 0){
            infoArr = $.cookie("cal" + $.cookie("hus")).split('.');
            $("#infoH").show();
            for(j = 0; j < 10; j++){
                if(infoArr[j] > 0){
                    $('#h' + j).show();
                    $('#p' + j).show();
                }
            }
        };    
            
    };

    // CLEAR COOKIES - DEBUG PURPOSE ONLY
    /*var cookies = $.cookie();
    for(var cookie in cookies) {
        $.removeCookie(cookie);
    }*/
}); 
