var heure = [];
var date = [];
var temp = [];
var pluie = [];
var lum = [];

var tempdata = [];

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

/*var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'Température',
      data: []
    }],
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [],
      title: {
          text: 'Heures'
      }
    },
    yaxis: {
        title: {
            text: 'Température (en degré)'
        }
    },
    title: {
        text: 'Capteur température'
    }
};*/

var options = {
    series: [{
      name: 'Température',
      data: tempdata
    }],
    chart: {
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 3
    },
    xaxis: {
      type: 'datetime'
    }
};

$(document).ready(function() {
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
});

function initHtml(res){
    initData(res);
    initOptions();
    initGraph();
};

function initData(res){
    for(var i = 0; i < res.feeds.length; i++){
        var text = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field2 + '\"}';
        var objtemp = JSON.parse(text);
        tempdata.push(objtemp);
        console.log(text);
        console.log(objtemp);


        date.push(res.feeds[i].created_at.substr(0,10));
        heure.push(res.feeds[i].created_at.substr(-9, 5));
        temp.push(res.feeds[i].field2);
        pluie.push(res.feeds[i].field1);
        lum.push(res.feeds[i].field3);
    }
    //console.log(tempdata);
};

function initOptions(){
    /*options.series[0].data = temp;
    options.xaxis.categories = heure;*/
};

function initGraph(){
    var chart = new ApexCharts(document.querySelector("#apex1"), options);
    chart.render();
};

function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
};

function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
};
