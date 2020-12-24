var datatemp = [];
var datalum = [];

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

var optionstemp = {
    series: [{
      name: 'Température',
      data: datatemp
    }],
    chart: {
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 3
    },
    yaxis: {
        title: {
            text: 'Température (en degré C°)'
        }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur température'
    }
};

var optionshygro = {
    series: [{
      name: 'Hygrométrie',
      data: datatemp
    }],
    chart: {
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 3
    },
    yaxis: {
        title: {
            text: 'Hygrométrie (en %)'
        }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur hygrométrie'
    }
};

var optionshumsol = {
    series: [{
      name: 'Humidité Sol',
      data: datatemp
    }],
    chart: {
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 3
    },
    yaxis: {
        title: {
            text: 'Humidité du sol (en %)'
        }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur humidité du sol'
    }
};

var optionslum = {
    series: [{
      name: 'Luminosité',
      data: datalum
    }],
    chart: {
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 3
    },
    yaxis: {
        title: {
            text: 'Luminosité (en %)'
        }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur luminosité'
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
    initGraph();
};

function initData(res){
    var deb = 0;
    if(res.feeds.length > 24){
        deb = res.feeds.length - 24;
    }

    for(var i = deb; i < res.feeds.length; i++){
        var texttemp = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field2 + '\"}';
        var objtemp = JSON.parse(texttemp);
        datatemp.push(objtemp);

        var textlum = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field3 + '\"}';
        var objlum = JSON.parse(textlum);
        datalum.push(objlum);
    }
};

function initGraph(){
    var charttemp = new ApexCharts(document.querySelector("#apex1"), optionstemp);
    var charthygro = new ApexCharts(document.querySelector("#apex2"), optionshygro);
    var charthumsol = new ApexCharts(document.querySelector("#apex3"), optionshumsol);
    var chartlum = new ApexCharts(document.querySelector("#apex4"), optionslum);

    charttemp.render();
    charthygro.render();
    charthumsol.render();
    chartlum.render();
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
