function loading(){
    if(window.sessionStorage.getItem('P1Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P1Irri');
    }
    if(window.sessionStorage.getItem('P1Prec') !== null){
        document.getElementById('resultPrec').innerHTML = window.sessionStorage.getItem('P1Prec');
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
    document.getElementById('dateSemis').textContent = "20/04/2020";

    document.getElementById('h').textContent = "Irrigation de la parcelle 1";
    if(window.sessionStorage.getItem('P1Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P1Irri');
    }else{
        document.getElementById('resultIrri').textContent = "2";
    }
    document.getElementById('vc').textContent = "50mm";
    document.getElementById('die').textContent = "8j";
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
    document.getElementById('dateSemis').textContent = "30/04/2020";

    document.getElementById('h').textContent = "Irrigation de la parcelle 2";
    if(window.sessionStorage.getItem('P2Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P2Irri');
    }else{
        document.getElementById('resultIrri').textContent = "3";
    }
    document.getElementById('vc').textContent = "65mm";
    document.getElementById('die').textContent = "5j";
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
    document.getElementById('dateSemis').textContent = "15/04/2020";

    document.getElementById('h').textContent = "Irrigation de la parcelle 3";
    if(window.sessionStorage.getItem('P3Irri') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P3Irri');
    }else{
        document.getElementById('resultIrri').textContent = "2";
    }
    document.getElementById('vc').textContent = "58mm";
    document.getElementById('die').textContent = "7j";
}

function valueInput(){
    var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
    var value = document.getElementById('Prec').value;
    if(value !== ''){
        document.getElementById('resultPrec').innerHTML = value;
        if(active_page == 'parc1'){
            window.sessionStorage.setItem('P1Prec',value);
        }else if(active_page == 'parc2'){
            window.sessionStorage.setItem('P2Prec',value);
        }else{
            window.sessionStorage.setItem('P3Prec',value);
        }
    }
    document.getElementById('Prec').value = ' ';
}

function valueInputIrri(){
    var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
    var value = document.getElementById('nbIrri').value;
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
    document.getElementById('nbIrri').value = '';
}
