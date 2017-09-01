/*
	NOTE: 
	All callback fnctions in this code are written 
	as an anonymous function.
*/


//High-order function
//Separates true and false elements into an object
function Select(callback, srcArray)
{
	
	var composition =
	{
		Valuable:[],
		Waste:[]
	}	
	
	
	for(var i = 0; i < srcArray.length; i++)
	{
		if(callback(srcArray[i]))
		{
			composition.Valuable.push(srcArray[i]);
		}
		else
		{
			composition.Waste.push(srcArray[i]);
		}
	}
	
	return composition;
}




//Valuer 1 - select all numbers in user input
function Condition_one()
{
	
	var userInput 		= document.getElementById('input').value;
	var result_valuable	= document.getElementById('valuable_V1');
	var result_waste	= document.getElementById('waste_V1');
	
	var structure = Select
	(
		function(element)
		{
			
			if (!isNaN(parseInt(element)))
			{
				return true;
			}
			
		},
		userInput
		
	);
	
	//Shows results in browser
	result_valuable.innerHTML 	= "<li>" + structure.Valuable + "</li>";
	result_waste.innerHTML 		= "<li>" + structure.Waste + "</li>";
}




//Valuer 2 - select all upper case characters in user input
function Condition_two()
{
	var userInput 		= document.getElementById('input').value;
	var result_valuable	= document.getElementById('valuable_V2');
	var result_waste	= document.getElementById('waste_V2');
	
	var structure = Select
	(
		function(element)
		{
			//Excludes numbers and special characters
			if	(element === element.toUpperCase() && element !== element.toLowerCase())
			{
				return true;
			}
			
		},
		userInput
		
	);
	
	
	//Shows results in browser
	result_valuable.innerHTML 	= "<li>" + structure.Valuable + "</li>";
	result_waste.innerHTML 		= "<li>" + structure.Waste + "</li>";
}




//Valuer 3 - select all vowels in user input
function Condition_three()
{
	var userInput 		= document.getElementById('input').value;
	var result_valuable	= document.getElementById('valuable_V3');
	var result_waste	= document.getElementById('waste_V3');
	var vowels			= ["a","e","u","i","o"];
	
	var structure = Select
	(
		function(element)
		{
			/*
				indexOf - 
				searches for the position a character appears in an array
				and outputs -1 if character doesn´t exist
			*/
			if	(vowels.indexOf(element.toLowerCase()) !== -1)
			{
				return true;
			}
			
		},
		userInput
		
	);
	
	//Shows results in browser
	result_valuable.innerHTML 	= "<li>" + structure.Valuable + "</li>";
	result_waste.innerHTML 		= "<li>" + structure.Waste + "</li>";
	
}















