var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

var parc1temp = [];
var parc1pluie = [];
var parc1hygro = [];
var parc1ru = [];
var parc1et = [];
var parc1moytemp = 0;
var parc1moyhygro = 0;
var parc1moyru = 0;
var parc1moyet = 0;

var parc2temp = [];
var parc2pluie = [];
var parc2hygro = [];
var parc2ru = [];
var parc2et = [];
var parc2moytemp = 0;
var parc2moyhygro = 0;
var parc2moyru = 0;
var parc2moyet = 0;

var parc3temp = [];
var parc3pluie = [];
var parc3hygro = [];
var parc3ru = [];
var parc3et = [];
var parc3moytemp = 0;
var parc3moyhygro = 0;
var parc3moyru = 0;
var parc3moyet = 0;

var charttemp;
var charthygro;
var chartru;
var chartet;

var optionstemp = {
    series: [{
      name: 'Température',
      data: []
    }],
    chart: {
      height: 300,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
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
      text: 'Capteur horaire de température'
    },
    tooltip: {
      x: {
        show: false,
        format: 'dd MMM HH:mm'
      },
      y: {
        formatter: function(y) {
          if(typeof y != "undefinied") {
            return y.toFixed(1) + "°";
          }
          return y;
        }
      }
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
      height: 300,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
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
        text: 'Capteur horaire d\'hygrométrie'
    },
    tooltip: {
      x: {
        show: false,
        format: 'dd MMM HH:mm'
      },
      y: [{
        formatter: function(y) {
          if(typeof y != "undefinied") {
            return y.toFixed(1) + "%";
          }
          return y;
        }
      },
      {
        formatter: function(y) {
          if(typeof y != "undefinied") {
            return Math.ceil(y);
          }
          return y;
        }
      }]
    }
};

var optionsru = {
    series: [
      {
        name: 'RU',
        data: []
      }
    ],
    chart: {
      height: 300,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors : ['#006600'],
    markers: {
      size: 3
    },
    yaxis: {
      title: {
        text: 'RU (en mm)'
      },
      tickAmount: 20,
      max: 2,
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    annotations: {
      yaxis: [
        {
          y: 0.7,
          y2: 0.9,
          borderColor: '#000',
          fillColor: '#FEB019',
          label: {
            text: 'Stress Hydrique'
          }
        },
        {
          y: 0.9,
          y2: 1.2,
          borderColor: '#000',
          fillColor: '#007FFF',
          label: {
            text: 'Confort Hydrique'
          }
        }
      ]
    },
    title: {
      text: 'Capteur horaire du RU'
    },
    tooltip: {
      x: {
        show: false,
        format: 'dd MMM HH:mm'
      },
      y: {
        formatter: function(y) {
          if(typeof y != "undefinied") {
            return y.toFixed(2) + "mm";
          }
          return y;
        }
      }
    }
};

var optionset = {
    series: [{
      name: 'ETP',
      data: []
    }],
    chart: {
      height: 300,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors : ['#A98921'],
    markers: {
      size: 3
    },
    yaxis: {
      title: {
        text: 'ETP (en mm)'
      },
      max: 6,
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
      text: 'Capteur ETP depuis le début de la journée'
    },
    tooltip: {
      x: {
        show: false,
        format: 'dd MMM HH:mm'
      },
      y: {
        formatter: function(y) {
          if(typeof y != "undefinied") {
            return y.toFixed(2) + "mm";
          }
          return y;
        }
      }
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
    $.ajax({
        url: 'https://api.thingspeak.com/channels/1273038/feeds.json?api_key=CP02P7NYYDWERCCG',
        type: 'GET',
        dataType: "json",
        data: {
            format: 'json'
        },
        success: function(response) {
            initData(response, 3);
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
    var moyru = 0;
    var moyet = 0;
    if(res.feeds.length > 24){
        deb = res.feeds.length - 24;
    }

    for(var i = deb; i < res.feeds.length; i++){
        div++;

        moytemp += parseFloat(res.feeds[i].field2);
        moyhygro += parseFloat(res.feeds[i].field4);
        moyru += parseFloat(res.feeds[i].field5);
        moyet = parseFloat(res.feeds[i].field3);

        var texttemp = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field2 + '\"}';
        var objtemp = JSON.parse(texttemp);

        var textpluie = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field1 + '\"}';
        var objpluie = JSON.parse(textpluie);

        var texthygro = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field4 + '\"}';
        var objhygro = JSON.parse(texthygro);

        var textru = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field5 + '\"}';
        var objru = JSON.parse(textru);

        var textet = '{"x":\"' + res.feeds[i].created_at.substr(0,10) + '-' + res.feeds[i].created_at.substr(-9, 5) + '\","y":\"' + res.feeds[i].field3 + '\"}';
        var objet = JSON.parse(textet);


        switch(num){
          case 1:
            parc1temp.push(objtemp);
            parc1pluie.push(objpluie);
            parc1hygro.push(objhygro);
            parc1ru.push(objru);
            parc1et.push(objet);
            break;

          case 2:
            parc2temp.push(objtemp);
            parc2pluie.push(objpluie);
            parc2hygro.push(objhygro);
            parc2ru.push(objru);
            parc2et.push(objet);
            break;

          case 3:
            parc3temp.push(objtemp);
            parc3pluie.push(objpluie);
            parc3hygro.push(objhygro);
            parc3ru.push(objru);
            parc3et.push(objet);
            break;
        }
    }

    if(div != 0){
      moytemp /= div;
      moyhygro /= div;
      moyru /= div;
      moyet /= div;
    }else{
      moytemp = 0;
      moyhygro = 0;
      moyru = 0;
      moyet = 0;
    }

    switch(num){
      case 1:
        parc1moytemp = Math.round(moytemp*10)/10;
        parc1moyhygro = Math.round(moyhygro*10)/10;
        parc1moyru = Math.round(moyru*100)/100;
        parc1moyet = Math.round(moyet*100)/100;
        break;

      case 2:
        parc2moytemp = Math.round(moytemp*10)/10;
        parc2moyhygro = Math.round(moyhygro*10)/10;
        parc2moyru = Math.round(moyru*100)/100;
        parc2moyet = Math.round(moyet*100)/100;
        break;

      case 3:
        parc3moytemp = Math.round(moytemp*10)/10;
        parc3moyhygro = Math.round(moyhygro*10)/10;
        parc3moyru = Math.round(moyru*100)/100;
        parc3moyet = Math.round(moyet*100)/100;
        break;
    }
};

function displayMoy(num) {
    switch(num){
      case 1:
        document.getElementById("temp__text").textContent = parc1moytemp + "°";
        document.getElementById("hygro__text").textContent = parc1moyhygro + "%";
        document.getElementById("ru__text").textContent = parc1moyru + "mm";
        document.getElementById("et__text").textContent = parc1moyet + "mm";
        break;

      case 2:
        document.getElementById("temp__text").textContent = parc2moytemp + "°";
        document.getElementById("hygro__text").textContent = parc2moyhygro + "%";
        document.getElementById("ru__text").textContent = parc2moyru + "mm";
        document.getElementById("et__text").textContent = parc2moyet + "mm";
        break;

      case 3:
        document.getElementById("temp__text").textContent = parc3moytemp + "°";
        document.getElementById("hygro__text").textContent = parc3moyhygro + "%";
        document.getElementById("ru__text").textContent = parc3moyru + "mm";
        document.getElementById("et__text").textContent = parc3moyet + "mm";
        break;
    }
}

function displayGraph(num) {
    optionstemp.series[0].data = parc1temp;
    optionshygro.series[1].data = parc1pluie;
    optionshygro.series[0].data = parc1hygro;
    optionsru.series[0].data = parc1ru;
    optionset.series[0].data = parc1et;

    charttemp = new ApexCharts(document.querySelector("#apex1"), optionstemp);
    charthygro = new ApexCharts(document.querySelector("#apex2"), optionshygro);
    chartru = new ApexCharts(document.querySelector("#apex3"), optionsru);
    chartet = new ApexCharts(document.querySelector("#apex4"), optionset);

    charttemp.render();
    charthygro.render();
    chartru.render();
    chartet.render();
};

function changeGraph(num){
    switch(num){
      case 1:
        optionstemp.series[0].data = parc1temp;
        optionshygro.series[1].data = parc1pluie;
        optionshygro.series[0].data = parc1hygro;
        optionsru.series[0].data = parc1ru;
        optionset.series[0].data = parc1et;
        break;

      case 2:
        optionstemp.series[0].data = parc2temp;
        optionshygro.series[1].data = parc2pluie;
        optionshygro.series[0].data = parc2hygro;
        optionsru.series[0].data = parc2ru;
        optionset.series[0].data = parc2et;
        break;

      case 3:
        optionstemp.series[0].data = parc3temp;
        optionshygro.series[1].data = parc3pluie;
        optionshygro.series[0].data = parc3hygro;
        optionsru.series[0].data = parc3ru;
        optionset.series[0].data = parc3et;
        break;
    }

    charttemp.updateOptions(optionstemp);
    charthygro.updateOptions(optionshygro);
    chartru.updateOptions(optionsru);
    chartet.updateOptions(optionset);
}

function dataParc1(){
    document.getElementById('parc1').onclick = null;
    document.getElementById('parc1').classList.add("active_link");

    document.getElementById('parc2').onclick = function (){dataParc2()};
    document.getElementById('parc2').classList.remove("active_link");

    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('jr1temp').innerHTML = "17°";
    document.getElementById('jr1etp').innerHTML = "ETP: 3.3mm";

    document.getElementById('jr2icon').className = "fad fa-clouds fa-2x";
    document.getElementById('jr2icon').style.color = "#66a6f7";
    document.getElementById('jr2temp').innerHTML = "15°";
    document.getElementById('jr2etp').innerHTML = "ETP: 3mm";

    document.getElementById('jr3icon').className = "fa fa-sun fa-2x";
    document.getElementById('jr3icon').style.color = "#ffd74f";
    document.getElementById('jr3temp').innerHTML = "19°";
    document.getElementById('jr3etp').innerHTML = "ETP: 3.5mm";

    document.getElementById('jr4icon').className = "fa fa-sun fa-2x";
    document.getElementById('jr4icon').style.color = "#ffd74f";
    document.getElementById('jr4temp').innerHTML = "22°";
    document.getElementById('jr4etp').innerHTML = "ETP: 3.7mm";

    document.getElementById('jr5temp').innerHTML = "24°";
    document.getElementById('jr5etp').innerHTML = "ETP: 4.1mm";

    document.getElementById('jr6temp').innerHTML = "20°";
    document.getElementById('jr6etp').innerHTML = "ETP: 3.6mm";

    displayMoy(1);
    changeGraph(1);
}

function dataParc2(){
    document.getElementById('parc1').onclick = function (){dataParc1()};
    document.getElementById('parc1').classList.remove("active_link");

    document.getElementById('parc2').onclick = null;
    document.getElementById('parc2').classList.add("active_link");

    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('jr1temp').innerHTML = "17°";
    document.getElementById('jr1etp').innerHTML = "ETP: 2mm";

    document.getElementById('jr2icon').className = "fad fa-cloud-showers-heavy fa-2x";
    document.getElementById('jr2icon').style.color = "grey";
    document.getElementById('jr2temp').innerHTML = "15°";
    document.getElementById('jr2etp').innerHTML = "ETP: 1mm";

    document.getElementById('jr3icon').className = "fa fa-sun fa-2x";
    document.getElementById('jr3icon').style.color = "#ffd74f";
    document.getElementById('jr3temp').innerHTML = "18°";
    document.getElementById('jr3etp').innerHTML = "ETP: 2.3mm";

    document.getElementById('jr4icon').className = "fad fa-clouds fa-2x";
    document.getElementById('jr4icon').style.color = "#66a6f7";
    document.getElementById('jr4temp').innerHTML = "18°";
    document.getElementById('jr4etp').innerHTML = "ETP: 2mm";

    document.getElementById('jr5temp').innerHTML = "26°";
    document.getElementById('jr5etp').innerHTML = "ETP: 2.5mm";

    document.getElementById('jr6temp').innerHTML = "20°";
    document.getElementById('jr6etp').innerHTML = "ETP: 2.3mm";

    displayMoy(2);
    changeGraph(2);
}

function dataParc3(){
    document.getElementById('parc1').onclick = function (){dataParc1()}
    document.getElementById('parc1').classList.remove("active_link");

    document.getElementById('parc2').onclick = function (){dataParc2()}
    document.getElementById('parc2').classList.remove("active_link");

    document.getElementById('parc3').onclick = null;
    document.getElementById('parc3').classList.add("active_link");

    document.getElementById('jr1temp').innerHTML = "20°";
    document.getElementById('jr1etp').innerHTML = "ETP: 4.5mm";

    document.getElementById('jr2icon').className = "fa fa-sun fa-2x";
    document.getElementById('jr2icon').style.color = "#ffd74f";
    document.getElementById('jr2temp').innerHTML = "26°";
    document.getElementById('jr2etp').innerHTML = "ETP: 5.5mm";

    document.getElementById('jr3icon').className = "fad fa-clouds fa-2x";
    document.getElementById('jr3icon').style.color = "#66a6f7";
    document.getElementById('jr3temp').innerHTML = "23°";
    document.getElementById('jr3etp').innerHTML = "ETP: 4.8mm";

    document.getElementById('jr4icon').className = "fa fa-sun fa-2x";
    document.getElementById('jr4icon').style.color = "#ffd74f";
    document.getElementById('jr4temp').innerHTML = "22°";
    document.getElementById('jr4etp').innerHTML = "ETP: 5mm";

    document.getElementById('jr5temp').innerHTML = "24°";
    document.getElementById('jr5etp').innerHTML = "ETP: 5.2mm";

    document.getElementById('jr6temp').innerHTML = "27°";
    document.getElementById('jr6etp').innerHTML = "ETP: 5.8mm";



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
