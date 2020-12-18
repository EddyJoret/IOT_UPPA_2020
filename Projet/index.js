var res;
$(document).ready(function() {

    $.ajax({
        url: 'https://api.thingspeak.com/channels/1262751/feeds.json?api_key=2S085VSZXSR18S66&results=5',
        type: 'GET',
        dataType: "json",
        data: {
            format: 'json'
        },
        success: function(response) {
            //console.log(response);
            res = response;
            console.log(res);
            data();
        },
        error: function() {
            $('#errors').text("There was an error processing your request. Please try again.");
        }
    });


});

function data(){
    for(var i=0; i<res.feeds.length; i++){
        console.log(res.feeds[i].created_at); 
    }
    console.log(res.feeds);
}

