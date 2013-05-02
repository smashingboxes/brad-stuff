$(function(){
/* Initialize the variables we'll use */

	var x = 0.0, //where f(x) = 1/(1+e^(-x)) & f'(x) = e^(x)/(1+e^(x))^2
	goodVotes = badVotes =0,
	interval = maxCredibility = 1.0,
	minCredibilty = confidence = agreement = 0.0;

/* Initialize the slider and tooltip ui */

	$("#slider").slider({
	    range: 'true',
	    value: maxCredibility,
	    max: maxCredibility,
	    min: minCredibilty,
	    step: 0.1,
	    slide: function(event, ui) {
	        interval=(ui.value);
	        $('#intervalValue').text(interval);
	    }
	});

	$('.badge').tooltip({
		placement: 'right'
	});

/* Event Handlers */

	$('button#bad').on('click', function(){
		x-= interval;
		badVotes += 1;
		registerClick(x);
		//console.log(x, findSigmoid(x), normalizeConfidence(findSigmoid(x)));
	});
	$('button#good').on('click', function(){
		x+= interval;
        goodVotes += 1;
		registerClick(x);
		//console.log(x, findSigmoid(x), normalizeConfidence(findSigmoid(x)));
	});

	$('#refresh').on('click', function(){
		location.reload();
	});

/* Calculations */

	function findSigmoid(x){
		//this is called the Sigmoid or Lodgistic function
		//it is represented as 1/(1+e^(-x))

		var y = numeric.abs([x]);
		return (1/(1+(numeric.exp([-y]))));
	}

	function normalizeConfidence(x){
		//normalize values from 0.09 to 0.99 to scores from 1-100
		x = x*1000; //now it's from 90 - 99
		var oldRange = 10;
		var newRange = 100;
		return (((x-90)*newRange)/oldRange);
	}

	function calculateAgreement(x){
		//what percentage of voters agreed with the most likely answer?
		var p = x;
		return p/(goodVotes+badVotes);
	}

	function registerClick(x){
		
		confidence = Math.round(normalizeConfidence(findSigmoid(x)));

		(x>=0) ?
			agreement = (Math.round(calculateAgreement(goodVotes)*1000)/1000) 
			: agreement = (Math.round(calculateAgreement(badVotes)*1000)/1000);
		

		if(confidence == "100" || confidence == 100){
			(x>0) ?
				alert('We are pretty sure this is a good haircut') 
				: alert('We are pretty sure this is a bad haircut');
			
			location.reload(); //when we finish a haircut we stop asking and get a new haircut
		}

		updatePage();
		
	}

	

/* Write calculations to page */

	function updatePage(){
		var totalVotes = goodVotes+badVotes;
		//a fancy way to do console.log()
		if(x>0){ $('#judgement').text('Good Haircut'); }
		else if(x<0){ $('#judgement').text('Bad Haircut'); }
		else{ $('#judgement').text('Unknown'); }
		$('#confidence>span').text(confidence);
		$('#agreementValue').text(agreement);
		$('#numberOfVotes').text(totalVotes);
		$('#runningTotal').text(x);
		if(goodVotes>0) $('#goodVotes').text("("+goodVotes+")");
		if(badVotes>0) $('#badVotes').text("("+badVotes+")");
	}	

	

	
});

/* Get a random photo of a haircut from Flickr */ 
/* Thanks to CodeAlias.info for the flickr API call */

function jsonFlickrApi(rsp) {
 if (rsp.stat != "ok"){
  return;
 }
 
 var s = "";
 var i = Math.random();
 i = i * 100;
 i = Math.ceil(i);
 
 photo = rsp.photos.photo[ i ];
 
 t_url = "http://farm" + photo.farm +
 ".static.flickr.com/" + photo.server + "/" +
 photo.id + "_" + photo.secret + "_" + "m.jpg";
 
 p_url = "http://www.flickr.com/photos/" +
 photo.owner + "/" + photo.id;
 
 s =  '<img alt="'+ photo.title + '"src="' + t_url + '"/>'  
 	+	'<p id="refresh">New Photo</p>';
 
 $('.img-container').append(s);
 //this tells the jQuery to write
 //everything in variable "s" onto the page
 
}