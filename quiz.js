

function checkAns1(){
	var count = 0;	//can only move on if count = 4
	var incorrect = new Array(4);
	var x = 0;
	//Checks question 1
	var q1 = document.getElementsByName("S1");
	var noOfRadios1 = q1.length;

	for(var i=0; i<noOfRadios1; i++){
		if(q1[i].checked){
			if(q1[i].value == "cor"){
					count++;
				}
				else{
					incorrect[x] = "Question 1 is incorrect."
					x++;
				}
			}
		}

		// Checks question 2
		var q2 = document.getElementsByName("S2");
		var noOfRadios2 = q2.length;

		for(var j=0; j<noOfRadios2; j++){
			if(q2[j].checked){
				if(q2[j].value == "cor"){
						count++;
					} else{
						incorrect[x] = "Question 2 is incorrect."
						x++;
					}
				}
			}

			// Checks question 3
			var q3 = document.getElementsByName("S3");
			var noOfRadios3 = q3.length;

			for(var k=0; k<noOfRadios3; k++){
				if(q3[k].checked){
					if(q3[k].value == "cor"){
							count++;
						}else{
							incorrect[x] = "Question 3 is incorrect."
							x++;
						}
					}
				}

				// Checks question 4
				var q4 = document.getElementsByName("S4");
				var noOfRadios4 = q4.length;

				for(var l=0; l<noOfRadios4; l++){
					if(q4[l].checked){
						if(q4[l].value == "cor"){
								count++;
							} else{
								incorrect[x] = "Question 4 is incorrect."
								x++;
							}
						}
					}

			// once all answers have been checked for section 1
			if(count == 4){
				alert("Section 1 Correct!");
			} else {
				alert(incorrect.join("\n") + "Please try again.");
			}
}

//---------------------------------------------------------------//

function checkAns2(){
	var count = 0;	//can only move on if count = 3
	var incorrect = new Array(3);
	var x = 0;
	//Checks question 1
	var q1 = document.getElementsByName("P&T1");
	var noOfRadios1 = q1.length;

	for(var i=0; i<noOfRadios1; i++){
		if(q1[i].checked){
			if(q1[i].value == "cor"){
					count++;
				}
				else{
					incorrect[x] = "Question 1 is incorrect."
					x++;
				}
			}
		}

		// Checks question 2
		var q2 = document.getElementsByName("P&T2");
		var noOfRadios2 = q2.length;

		for(var j=0; j<noOfRadios2; j++){
			if(q2[j].checked){
				if(q2[j].value == "cor"){
						count++;
					} else{
						incorrect[x] = "Question 2 is incorrect."
						x++;
					}
				}
			}

			// Checks question 3
			var q3 = document.getElementsByName("P&T3");
			var noOfRadios3 = q3.length;

			for(var k=0; k<noOfRadios3; k++){
				if(q3[k].checked){
					if(q3[k].value == "cor"){
							count++;
						}else{
							incorrect[x] = "Question 3 is incorrect."
							x++;
						}
					}
				}


			// once all answers have been checked for section 1
			if(count == 3){
				alert("Section 2 Correct!");
			} else {
				alert(incorrect.join("\n") + "Please try again.");
			}
}

//---------------------------------------------------------------//

function checkAns3(){
	var count = 0;	//can only move on if count = 3
	var incorrect = new Array(3);
	var x = 0;
	//Checks question 1
	var q1 = document.getElementsByName("IM1");
	var noOfRadios1 = q1.length;

	for(var i=0; i<noOfRadios1; i++){
		if(q1[i].checked){
			if(q1[i].value == "cor"){
					count++;
				}
				else{
					incorrect[x] = "Question 1 is incorrect."
					x++;
				}
			}
		}

		// Checks question 2
		var q2 = document.getElementsByName("IM2");
		var noOfRadios2 = q2.length;

		for(var j=0; j<noOfRadios2; j++){
			if(q2[j].checked){
				if(q2[j].value == "cor"){
						count++;
					} else{
						incorrect[x] = "Question 2 is incorrect."
						x++;
					}
				}
			}

			// Checks question 3
			var q3 = document.getElementsByName("IM3");
			var noOfRadios3 = q3.length;

			for(var k=0; k<noOfRadios3; k++){
				if(q3[k].checked){
					if(q3[k].value == "cor"){
							count++;
						}else{
							incorrect[x] = "Question 3 is incorrect."
							x++;
						}
					}
				}


			// once all answers have been checked for section 1
			if(count == 3){
				alert("Section 3 Correct!");
			} else {
				alert(incorrect.join("\n") + "Please try again.");
			}
}
