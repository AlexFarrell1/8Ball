$(document).ready(function(){

/*THE MAGIC 8 BALL MADE BY ALEX FARRELL Enjoy :-)
  IF YOU WISH TO CONTACT ME ABOUT THE CODE OR
  WISH ME TO MAKE YOU A WEB APP OR WEBSITE
  EMAIL ME AT: alex@stainsby.org PLEASE DO 
  NOT TAKE CREDIT OR ATTEMPT TO STEAL
  THIS CODE!
*/


	//animation section


	$("#Ball").on( "click", function(){
		$(this).fadeOut(1000).fadeIn(1000);


	});




	//End of animation Section


	//Start of functional code

	//When the button is pressed
	$("#Press").click(function(){

		//Loop
		for(var i;i=10;i++)
		{

		//Gets the user input via prompt	
		var UserInput = prompt("Ask a question or press cancel to exit: ");
		//Random number Generator
		var RanNumGen = Math.floor(Math.random() * 6) + 1;


		//Switch statement to get a random answer
		switch(RanNumGen)
		{
			case 1:
			alert("Yes");
			break;

			case 2:
			alert("Possibly");
			break;

			case 3:
			alert("Maybe");
			break;

			case 4:
			alert("Probably not");
			break;

			case 5:
			alert("Not a chance");
			break;

			case 6:
			alert("No Way");
			break;
		}

		// Breaks operation if the user presses cancel
		if(UserInput.Length == 0)
		{
			break;
		}

		}
		
	});

	//End of functional code	

});
