var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

var parc1temp = [];
var parc1pluie = [];
var parc1hygro = [];
var parc1rfu = [];
var parc1et = [];
var parc1moytemp = 0;
var parc1moyhygro = 0;
var parc1moyrfu = 0;
var parc1moyet = 0;

var parc2temp = [];
var parc2pluie = [];
var parc2hygro = [];
var parc2rfu = [];
var parc2et = [];
var parc2moytemp = 0;
var parc2moyhygro = 0;
var parc2moyrfu = 0;
var parc2moyet = 0;

var parc3temp = [];
var parc3pluie = [];
var parc3hygro = [];
var parc3rfu = [];
var parc3et = [];
var parc3moytemp = 0;
var parc3moyhygro = 0;
var parc3moyrfu = 0;
var parc3moyet = 0;

var charttemp;
var charthygro;
var chartrfu;
var chartet;

var optionstemp = {
    series: [{
      name: 'Température',
      data: []
    }],
    chart: {
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors : ['#FF4F33'],
    markers: {
      size: 3
    },
    yaxis: {
        title: {
            text: 'Température (en degré C°)'
        },
        tickAmount: 8,
        max: 40,
        min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur température'
    }
};

var optionshygro = {
    series: [
      {
        name: 'Hygrométrie',
        data: []
      },
      {
        name: 'Pluie',
        type: 'column',
        data: []
      }
    ],
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
    yaxis: [
      {
        title: {
            text: 'Hygrométrie (en %)'
        },
        max: 100,
        min: 0
      },
      {
        title: {
            text: 'Pluie'
        },
        opposite: true,
        tickAmount: 1,
        max: 1,
        min: 0
      }
    ],
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
      data: []
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
            text: 'RFU (en mm)'
        }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur RFU'
    }
};

var optionset = {
    series: [{
      name: 'Évapotranspiration',
      data: []
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
            text: 'Évapotranspiration (en %)'
        },
        max: 100,
        min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
        text: 'Capteur évapotranspiration'
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
            initHtml(response, 1);
        },
        error: function() {
            $('#errors').text("There was an error processing your request. Please try again.");
        }
    });
    $.ajax({
        url: 'https://api.thingspeak.com/channels/1272998/feeds.json?api_key=9GGZJSGYAU160UOK',
        type: 'GET',
        dataType: "json",
        data: {
            format: 'json'
        },
        success: function(response) {
            initData(response, 2);
        },
        error: function() {
            $('#errors').text("There was an error processing your request. Please try again.");
        }
    });
});

function initHtml(res, num) {
    initData(res, num);
    displayMoy(num);
    displayGraph(num);
};

function initData(res, num) {
    var deb = 0;

    var div = 0;
    var moytemp = 0;
    var moyhygro = 0;
    var moyrfu = 0;
    var moyet = 0;
    if(res.feeds.length > 24){
        deb = res.feeds.length - 24;
    }

    for(var i = deb; i < res.feeds.length; i++){
        div++;

        moytemp += parseInt(res.feeds[i].field2, 10);
        moyhygro += parseInt(res.feeds[i].field4, 10);
        moyrfu += parseInt(res.feeds[i].field5, 10);
        moyet += parseInt(res.feeds[i].field3, 10);

        var texttemp = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field2 + '\"}';
        var objtemp = JSON.parse(texttemp);

        var textpluie = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field1 + '\"}';
        var objpluie = JSON.parse(textpluie);

        var texthygro = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field4 + '\"}';
        var objhygro = JSON.parse(texthygro);

        var textrfu = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field5 + '\"}';
        var objrfu = JSON.parse(textrfu);

        var textet = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field3 + '\"}';
        var objet = JSON.parse(textet);


        switch(num){
          case 1:
            parc1temp.push(objtemp);
            parc1pluie.push(objpluie);
            parc1hygro.push(objhygro);
            parc1rfu.push(objrfu);
            parc1et.push(objet);
            break;

          case 2:
            parc2temp.push(objtemp);
            parc2pluie.push(objpluie);
            parc2hygro.push(objhygro);
            parc2rfu.push(objrfu);
            parc2et.push(objet);
            break;

          case 3:
            parc3temp.push(objtemp);
            parc3pluie.push(objpluie);
            parc3hygro.push(objhygro);
            parc3rfu.push(objrfu);
            parc3et.push(objet);
            break;
        }
    }

    if(div != 0){
      moytemp /= div;
      moyhygro /= div;
      moyrfu /= div;
      moyet /= div;
    }else{
      moytemp = 0;
      moyhygro = 0;
      moyrfu = 0;
      moyet = 0;
    }

    switch(num){
      case 1:
        parc1moytemp = Math.ceil(moytemp*10)/10;
        parc1moyhygro = Math.ceil(moyhygro*10)/10;
        parc1moyrfu = Math.ceil(moyrfu*10)/10;
        parc1moyet = Math.ceil(moyet*10)/10;
        break;

      case 2:
        parc2moytemp = Math.ceil(moytemp*10)/10;
        parc2moyhygro = Math.ceil(moyhygro*10)/10;
        parc2moyrfu = Math.ceil(moyrfu*10)/10;
        parc2moyet = Math.ceil(moyet*10)/10;
        break;

      case 3:
        parc3moytemp = Math.ceil(moytemp*10)/10;
        parc3moyhygro = Math.ceil(moyhygro*10)/10;
        parc3moyrfu = Math.ceil(moyrfu*10)/10;
        parc3moyet = Math.ceil(moyet*10)/10;
        break;
    }
};

function displayMoy(num) {
    switch(num){
      case 1:
        document.getElementById("temp__text").textContent = parc1moytemp + "°";
        document.getElementById("hygro__text").textContent = parc1moyhygro + "%";
        document.getElementById("rfu__text").textContent = parc1moyrfu + "%";
        document.getElementById("et__text").textContent = parc1moyet + "%";
        break;

      case 2:
        document.getElementById("temp__text").textContent = parc2moytemp + "°";
        document.getElementById("hygro__text").textContent = parc2moyhygro + "%";
        document.getElementById("rfu__text").textContent = parc2moyrfu + "%";
        document.getElementById("et__text").textContent = parc2moyet + "%";
        break;

      case 3:
        document.getElementById("temp__text").textContent = parc3moytemp + "°";
        document.getElementById("hygro__text").textContent = parc3moyhygro + "%";
        document.getElementById("rfu__text").textContent = parc3moyrfu + "%";
        document.getElementById("et__text").textContent = parc3moyet + "%";
        break;
    }
}

function displayGraph(num) {
    optionstemp.series[0].data = parc1temp;
    optionshygro.series[1].data = parc1pluie;
    optionshygro.series[0].data = parc1hygro;
    optionsrfu.series[0].data = parc1rfu;
    optionset.series[0].data = parc1et;

    charttemp = new ApexCharts(document.querySelector("#apex1"), optionstemp);
    charthygro = new ApexCharts(document.querySelector("#apex2"), optionshygro);
    chartrfu = new ApexCharts(document.querySelector("#apex3"), optionsrfu);
    chartet = new ApexCharts(document.querySelector("#apex4"), optionset);

    charttemp.render();
    charthygro.render();
    chartrfu.render();
    chartet.render();
};

function changeGraph(num){
    switch(num){
      case 1:
        optionstemp.series[0].data = parc1temp;
        optionshygro.series[1].data = parc1pluie;
        optionshygro.series[0].data = parc1hygro;
        optionsrfu.series[0].data = parc1rfu;
        optionset.series[0].data = parc1et;
        break;

      case 2:
        optionstemp.series[0].data = parc2temp;
        optionshygro.series[1].data = parc2pluie;
        optionshygro.series[0].data = parc2hygro;
        optionsrfu.series[0].data = parc2rfu;
        optionset.series[0].data = parc2et;
        break;

      case 3:
        optionstemp.series[0].data = parc3temp;
        optionshygro.series[1].data = parc3pluie;
        optionshygro.series[0].data = parc3hygro;
        optionsrfu.series[0].data = parc3rfu;
        optionset.series[0].data = parc3et;
        break;
    }

    charttemp.updateOptions(optionstemp);
    charthygro.updateOptions(optionshygro);
    chartrfu.updateOptions(optionsrfu);
    chartet.updateOptions(optionset);
}

function dataParc1(){
    console.log("Parcelle 1");
    displayMoy(1);
    changeGraph(1);
}

function dataParc2(){
    console.log("Parcelle 2");
    displayMoy(2);
    changeGraph(2);
}

function dataParc3(){
    console.log("Parcelle 3");
    displayMoy(3);
    changeGraph(3);
}

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
