$(document).ready(function(){
	// when the load more link is clicked
	$('a.load-more').click(function(e){

		// prevent the default click action
		e.preventDefault();

		// get the last id and save it in a variable 'last-id'
        var last_id = $('.record').last().attr('data-id');

        // make an ajax call passing along our last user id
        $.ajax({
            type: "GET",
            // get the url from the href attribute of our link
            url: $(this).attr('href'),
            // pass in our last id as part of the data being sent to
            // our rails app
            data: { id: last_id },
            dataType: "script"
        });

	})
})
