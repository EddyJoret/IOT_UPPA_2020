var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function loading(){
    if(window.sessionStorage.getItem('P1Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P1Irri');
    }
    if(window.sessionStorage.getItem('P1Prec') !== null){
        document.getElementById('3ValPrec').innerHTML = window.sessionStorage.getItem('P1Prec');
    }
    if(window.sessionStorage.getItem('P1Vol') !== null){
        document.getElementById('vc').innerHTML = window.sessionStorage.getItem('P1Vol');
    }
}

function dataParc1(){
    document.getElementById('parc1').onclick = null;
    document.getElementById('parc1').classList.add("active_link");
    document.getElementById('parc2').onclick = function (){dataParc2()};
    document.getElementById('parc2').classList.remove("active_link");
    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('titleParc').textContent = "Parcelle 1";
    document.getElementById('variete').textContent = "Maïs Grain";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "20/12/2020";

    document.getElementById('h').textContent = "Irrigation de la parcelle 1";
    if(window.sessionStorage.getItem('P1Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P1Irri');
    }else{
        document.getElementById('resultIrri').textContent = "2";
    }
    if(window.sessionStorage.getItem('P1Vol') !== null){
        document.getElementById('vc').innerHTML = window.sessionStorage.getItem('P1Vol');
    }else{
        document.getElementById('vc').textContent = "50mm";
    }
    document.getElementById('die').textContent = "8j";

    document.getElementById('1ValPrec').textContent = "3mm";
    document.getElementById('2ValPrec').textContent = "5mm";
    if(window.sessionStorage.getItem('P1Prec') !== null){
        document.getElementById('3ValPrec').textContent = window.sessionStorage.getItem('P1Prec');
    }else{
      document.getElementById('3ValPrec').textContent = "2mm";
    }
}

function dataParc2(){
    document.getElementById('parc1').onclick = function (){dataParc1()};
    document.getElementById('parc1').classList.remove("active_link");
    document.getElementById('parc2').onclick = null;
    document.getElementById('parc2').classList.add("active_link");
    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('titleParc').textContent = "Parcelle 2";
    document.getElementById('variete').textContent = "Maïs Waxy";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "30/12/2020";

    document.getElementById('h').textContent = "Irrigation de la parcelle 2";
    if(window.sessionStorage.getItem('P2Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P2Irri');
    }else{
        document.getElementById('resultIrri').textContent = "3";
    }
    if(window.sessionStorage.getItem('P2Vol') !== null){
        document.getElementById('vc').innerHTML = window.sessionStorage.getItem('P2Vol');
    }else{
        document.getElementById('vc').textContent = "65mm";
    }
    document.getElementById('die').textContent = "5j";

    document.getElementById('1ValPrec').textContent = "12mm";
    document.getElementById('2ValPrec').textContent = "14mm";
    if(window.sessionStorage.getItem('P2Prec') !== null){
        document.getElementById('3ValPrec').textContent = window.sessionStorage.getItem('P2Prec');
    }else{
      document.getElementById('3ValPrec').textContent = "11mm";
    }
}

function dataParc3(){
    document.getElementById('parc1').onclick = function (){dataParc1()}
    document.getElementById('parc1').classList.remove("active_link");
    document.getElementById('parc2').onclick = function (){dataParc2()}
    document.getElementById('parc2').classList.remove("active_link");
    document.getElementById('parc3').onclick = null;
    document.getElementById('parc3').classList.add("active_link");

    document.getElementById('titleParc').textContent = "Parcelle 3";
    document.getElementById('variete').textContent = "Maïs Grain";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "15/12/2020";

    document.getElementById('h').textContent = "Irrigation de la parcelle 3";
    if(window.sessionStorage.getItem('P3Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P3Irri');
    }else{
        document.getElementById('resultIrri').textContent = "2";
    }
    if(window.sessionStorage.getItem('P3Vol') !== null){
        document.getElementById('vc').innerHTML = window.sessionStorage.getItem('P3Vol');
    }else{
        document.getElementById('vc').textContent = "58mm";
    }
    document.getElementById('die').textContent = "7j";

    document.getElementById('1ValPrec').textContent = "0mm";
    document.getElementById('2ValPrec').textContent = "0mm";
    if(window.sessionStorage.getItem('P3Prec') !== null){
        document.getElementById('3ValPrec').textContent = window.sessionStorage.getItem('P3Prec');
    }else{
      document.getElementById('3ValPrec').textContent = "0mm";
    }
}

function valueInput(){
    var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
    var value = document.getElementById('Prec').value;
    if(value !== ''){
        document.getElementById('3ValPrec').innerHTML = value+"mm";
        if(active_page == 'parc1'){
            window.sessionStorage.setItem('P1Prec',value+"mm");
        }else if(active_page == 'parc2'){
            window.sessionStorage.setItem('P2Prec',value+"mm");
        }else{
            window.sessionStorage.setItem('P3Prec',value+"mm");
        }
    }
    document.getElementById('Prec').value = ' ';
}

function valueInputIrri(){
    var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
    var value = document.getElementById('nbIrri').value;
    var value2 = document.getElementById('nbVol').value;
    if(value !== ''){
        document.getElementById('resultIrri').innerHTML = value;
        if(active_page == 'parc1'){
            window.sessionStorage.setItem('P1Irri',value);
        }else if(active_page == 'parc2'){
            window.sessionStorage.setItem('P2Irri',value);
        }else{
            window.sessionStorage.setItem('P3Irri',value);
        }
    }
    if(value2 !== ''){
        document.getElementById('vc').innerHTML = value2+"mm";
        if(active_page == 'parc1'){
            window.sessionStorage.setItem('P1Vol',value2+"mm");
        }else if(active_page == 'parc2'){
            window.sessionStorage.setItem('P2Vol',value2+"mm");
        }else{
            window.sessionStorage.setItem('P3Vol',value2+"mm");
        }
    }
    document.getElementById('nbIrri').value = '';
    document.getElementById('nbVol').value = '';
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
