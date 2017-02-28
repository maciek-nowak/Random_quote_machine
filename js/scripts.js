$(function(){
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?",
		tweetLink = 'https://twitter.com/mcnowak77';
		
	function createTweet(input) {
		if (input.quoteAuthor.length == 0) {
			input.quoteAuthor = "Unknown author";
		};
		var tweetText = "Quote of the day: " + input.quoteText + " Author: " + input.quoteAuthor;
		if (tweetText.length > 140) {
			getQuote()
		} else {
				$('.quote').text(input.quoteText);
				$('.author').text("Author: " + input.quoteAuthor);
				$('.tweet').attr('href', 'https://twitter.com/intent/tweet?url=[' + tweetLink + ']&text=' + tweetText );
		};
	};
	
	function getQuote() {
		$.getJSON(url, createTweet);
	};

	getQuote();
	$('.trigger').click(function() {
		getQuote();
	});
});