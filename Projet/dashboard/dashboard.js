var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

var datatemp = [];
var datahygro = [];
var datarfu = [];
var datalum = [];

var moytemp = 0;
var moyhygro = 0;
var moyrfu = 0;
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

var optionsrfu = {
    series: [{
      name: 'RFU',
      data: datarfu
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
            text: 'RFU (en %)'
        }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur RFU'
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
        moyrfu += parseInt(res.feeds[i].field5, 10);
        moylum += parseInt(res.feeds[i].field3, 10);

        var texttemp = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field2 + '\"}';
        var objtemp = JSON.parse(texttemp);
        datatemp.push(objtemp);

        var texthygro = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field4 + '\"}';
        var objhygro = JSON.parse(texthygro);
        datahygro.push(objhygro);

        var textrfu = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field5 + '\"}';
        var objrfu = JSON.parse(textrfu);
        datarfu.push(objrfu);

        var textlum = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field3 + '\"}';
        var objlum = JSON.parse(textlum);
        datalum.push(objlum);
    }

    if(div != 0){
      moytemp /= div;
      moyhygro /= div;
      moyrfu /= div;
      moylum /= div;

      moytemp = Math.ceil(moytemp);
      moyhygro = Math.ceil(moyhygro);
      moyrfu = Math.ceil(moyrfu);
      moylum = Math.ceil(moylum);
    }else{
      moytemp = 0;
      moyhygro = 0;
      moyrfu = 0;
      moylum = 0;
    }
};

function initMoy(){
  document.getElementById("temp__text").textContent = moytemp + "°";
  document.getElementById("hygro__text").textContent = moyhygro + "%";
  document.getElementById("rfu__text").textContent = moyrfu + "%";
  document.getElementById("lum__text").textContent = moylum + "%";
}

function initGraph(){
    var charttemp = new ApexCharts(document.querySelector("#apex1"), optionstemp);
    var charthygro = new ApexCharts(document.querySelector("#apex2"), optionshygro);
    var chartrfu = new ApexCharts(document.querySelector("#apex3"), optionsrfu);
    var chartlum = new ApexCharts(document.querySelector("#apex4"), optionslum);

    charttemp.render();
    charthygro.render();
    chartrfu.render();
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
