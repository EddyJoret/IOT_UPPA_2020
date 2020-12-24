var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

var datatemp = [];
var datahygro = [];
var datahumsol = [];
var datalum = [];

var moytemp = 0;
var moyhygro = 0;
var moyhumsol = 0;
var moylum = 0;

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
      data: datahygro
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
      data: datahumsol
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
    initMoy();
    initGraph();
};

function initData(res){
    var div = 0;
    var deb = 0;
    if(res.feeds.length > 24){
        deb = res.feeds.length - 24;
    }

    for(var i = deb; i < res.feeds.length; i++){
        div++;

        moytemp += parseInt(res.feeds[i].field2, 10);
        moyhygro += parseInt(res.feeds[i].field4, 10);
        moyhumsol += parseInt(res.feeds[i].field5, 10);
        moylum += parseInt(res.feeds[i].field3, 10);

        var texttemp = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field2 + '\"}';
        var objtemp = JSON.parse(texttemp);
        datatemp.push(objtemp);

        var texthygro = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field4 + '\"}';
        var objhygro = JSON.parse(texthygro);
        datahygro.push(objhygro);

        var texthumsol = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field5 + '\"}';
        var objhumsol = JSON.parse(texthumsol);
        datahumsol.push(objhumsol);

        var textlum = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field3 + '\"}';
        var objlum = JSON.parse(textlum);
        datalum.push(objlum);
    }

    if(div != 0){
      moytemp /= div;
      moyhygro /= div;
      moyhumsol /= div;
      moylum /= div;

      moytemp = Math.ceil(moytemp);
      moyhygro = Math.ceil(moyhygro);
      moyhumsol = Math.ceil(moyhumsol);
      moylum = Math.ceil(moylum);
    }else{
      moytemp = 0;
      moyhygro = 0;
      moyhumsol = 0;
      moylum = 0;
    }
};

function initMoy(){
  document.getElementById("temp__text").textContent = moytemp + "°";
  document.getElementById("hygro__text").textContent = moyhygro + "%";
  document.getElementById("humsol__text").textContent = moyhumsol + "%";
  document.getElementById("lum__text").textContent = moylum + "%";
}

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
