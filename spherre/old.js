;(function ($) {

	/* Kami mencintai Indonesia */
	"use strict"

	window.data = [ // data.length = 441 = 21^2 --we should always try to show squares of odd numbers for symmetry
	"Brad Barbin",  // should be order with the user first followed by users ordered by the strength of their relationship with the user
	"Mike Jones",
	"Nick Jordan",
	"Michael Jordan",
	"Dennis Rodman",
	"Hank Williams Jr.",
	"Bob Dylan",
	"Jack Sparrow",
	"Joseph Stalin",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",
		"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",	
	"Cindy",
	"Pauly",
	"Mikey",
	"Janet",
	"Jack",
	"William",
	"Leonard",
	"Hershel",
	"Renee",
	"Cassie",
	"Burpie",
	"Sneezy",
	"Thinky",
	"The Brain",
	"Claire",
	"Jasmine",
	"Brittany",
	"Kyra",
	"Elvis",
	"Tupac",
	"Shakira",
	"Monica",
	"Bill",
	"Diego",
	"Monty",
	"Pirmantis",
	"Rooney",
	"Kip",
	"Brian",
	"Bryan",
	"Beverly",
	"Billy Joel",
	"Billy Chrystal",
];

	var total = data.length, //number of elements in the set -- ideally the square of an odd number
	upper = 0, //positive counter
	lower = 0, //negative counter
	x = 0, //keeps track of current row
	y = 0; //keeps track of current column
	
	// Config
	window.centerX = 248; // 
	window.centerY = 248; //
	window.elementHeight = 110; //make sure this matches css definition
	window.elementWidth = 110;  //make sure this matches css definition
	window.elementMargin = 10;


	window.counter = 0; //to be removed in production -- could be used with id tags
	window.numberOfRings = oddSquare(total); 
	window.rightmost = numberOfRings; 
	window.leftmost = -rightmost; // ######
	window.upmost = leftmost;     // ##  ##  
	window.downmost = rightmost;  // ###### 
	window.moveDown = "+="+(elementHeight+elementMargin);
	window.moveUp = "-="+(elementHeight+elementMargin);
	window.moveRight = "+="+(elementWidth+elementMargin);
	window.moveLeft = "-="+(elementWidth+elementMargin);
	window.bottomY = centerX + downmost*(elementHeight+elementMargin);
	window.topY = centerX + upmost*(elementHeight+elementMargin);
	window.leftX = centerX + rightmost*(elementWidth+elementMargin);
	window.rightX = centerX + leftmost*(elementWidth+elementMargin);


	/* With kind regards and love, from Smashing Boxes 
	 * http://smashingboxes.com
	 *
	 * An algorithm for keeping track of blocks in both directions relative to an origin
	 *
     */

	draw(x,y); //draw the origin at centerX, centerY
	upper ++; //we permutate through a set of numbers that increases by two for each new complete square ring around the center
	lower = upper*-1; //the numbers move in opposite from each other from 0 (i.e. upper = 5 => lower = -5)

for (var n = 0; n<numberOfRings; n++){
	x = lower;
	y = lower;
	
	draw(x, y); //start in the top left corner

	while(x < upper){ //move to top right corner
		x++
		draw(x,y);
	}
	while(y < upper){ //move to bottom right corner
		y++;
		draw(x,y);
	}
	while(x > lower){ //move to bottom left corner
		x--;
		draw(x,y);
	}
	while(y > lower+1){ //move to top left corner (almost)
		y--;
		draw(x,y);
	}

	upper++; //increment upper
	lower--; //lower is the opposite of upper
}


function draw(row, column){
	
	//console.log(window.counter + " : row : " + row + " column : " + column);
	
	var topPosition = centerY  + column*(elementHeight + elementMargin);
	var leftPosition = centerX + row*(elementWidth + elementMargin);
	
	
	/* 
	 *    This is what you'll need to customize: 
	 */
    
	
	$('#sphereBox').append("<div class='sphereElement' style='position:absolute;top: "
		+topPosition+"px;left:"+leftPosition+"px;' data-row='"+row+"' data-column='"+column
		+"'><h2>"+counter+"</h2><div>"+data[counter]+"</div></div>");
	counter++;
}

function oddSquare(x){
	return Math.ceil((Math.sqrt(x)-1)/2);
}




//Event Handlers -- Move and Shift The Extreme

$('#sphere-box-up').on('click', function(){
	$('.sphereElement').css( "top", moveDown);
	$("*[data-column='"+downmost+"']").css("top", topY);
	if(downmost < -1*numberOfRings+1){
		downmost = numberOfRings;
		upmost = -1*numberOfRings;
	}
	else{
		upmost = downmost;
		downmost = downmost - 1;
	}
});

$('#sphere-box-down').on('click', function(){
	$('.sphereElement').css( "top", moveUp );
	$("*[data-column='"+upmost+"']").css("top", bottomY);
	if(upmost > numberOfRings-1){
		upmost = -1*numberOfRings;
		downmost = numberOfRings;
	}
	else{
		downmost = upmost;
		upmost = upmost + 1;
	}
	
});

$('#sphere-box-left').on('click', function(){
	$('.sphereElement').css( "left", moveRight );
	$("*[data-row='"+rightmost+"']").css("left", rightX);
	if(rightmost < -1*numberOfRings+1){
		rightmost = numberOfRings;
		leftmost = -1*numberOfRings;
	}
	else{
		leftmost = rightmost;
		rightmost = rightmost - 1;
	}
});



$('#sphere-box-right').on('click', function(){
	$('.sphereElement').css( "left", "-=120" );
	$("*[data-row='"+leftmost+"']").css("left", leftX);
	if(leftmost > numberOfRings-1){
		rightmost = numberOfRings;
		leftmost = -1*numberOfRings;
	}
	else{
		rightmost = leftmost;
		leftmost = leftmost + 1;
	}
});

$('.sphereElement').hover(function(){
	$(this).children().toggle();
});



}(jQuery));



















