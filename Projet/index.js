var heure = [];
var date = [];
var temp = [];
var pluie = [];
var lum = [];

/*$(document).ready(function() {

    $.ajax({
        url: 'https://api.thingspeak.com/channels/1262751/feeds.json?api_key=2S085VSZXSR18S66',
        type: 'GET',
        dataType: "json",
        data: {
            format: 'json'
        },
        success: function(response) {
            var res = response;
            initHtml(res);
        },
        error: function() {
            $('#errors').text("There was an error processing your request. Please try again.");
        }
    });


});*/

function initHtml(res){
    initData(res);
};

function initData(res){
    for(var i=0; i<res.feeds.length; i++){
        date.push(res.feeds[i].created_at.substr(0,10));
        heure.push(res.feeds[i].created_at.substr(-9, 8));
        temp.push(res.feeds[i].field2);
        pluie.push(res.feeds[i].field1);
        lum.push(res.feeds[i].field3);
    }
};



