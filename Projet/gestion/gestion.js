function loading(){
    if(window.sessionStorage.getItem('P1') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P1');
    }
}

function dataParc1(){
    document.getElementById('parc1').onclick = null;
    document.getElementById('parc1').classList.add("active_link");

    document.getElementById('parc2').onclick = function (){dataParc2()};
    document.getElementById('parc2').classList.remove("active_link");

    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('h').textContent = "Irrigation de la parcelle 1";
    if(window.sessionStorage.getItem('P1') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P1');
    }else{
        document.getElementById('resultIrri').textContent = "2";
    }
    document.getElementById('vc').textContent = "50mm";
    document.getElementById('die').textContent = "8j";

    document.getElementById('titleParc').textContent = "Parcelle 1";
    document.getElementById('variete').textContent = "Maïs Grain";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "20/04/2020";
}

function dataParc2(){
    document.getElementById('parc1').onclick = function (){dataParc1()};
    document.getElementById('parc1').classList.remove("active_link");

    document.getElementById('parc2').onclick = null;
    document.getElementById('parc2').classList.add("active_link");

    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('h').textContent = "Irrigation de la parcelle 2";
    if(window.sessionStorage.getItem('P2') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P2');
    }else{
        document.getElementById('resultIrri').textContent = "3";
    }
    document.getElementById('vc').textContent = "65mm";
    document.getElementById('die').textContent = "5j";

    document.getElementById('titleParc').textContent = "Parcelle 2";
    document.getElementById('variete').textContent = "Maïs Waxy";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "30/04/2020";
}

function dataParc3(){
    document.getElementById('parc1').onclick = function (){dataParc1()}
    document.getElementById('parc1').classList.remove("active_link");

    document.getElementById('parc2').onclick = function (){dataParc2()}
    document.getElementById('parc2').classList.remove("active_link");

    document.getElementById('parc3').onclick = null;
    document.getElementById('parc3').classList.add("active_link");

    document.getElementById('h').textContent = "Irrigation de la parcelle 3";
    if(window.sessionStorage.getItem('P3') !== null){
        document.getElementById('resultIrri').innerHTML = window.sessionStorage.getItem('P3');
    }else{
        document.getElementById('resultIrri').textContent = "2";
    }
    document.getElementById('vc').textContent = "58mm";
    document.getElementById('die').textContent = "7j";

    document.getElementById('titleParc').textContent = "Parcelle 3";
    document.getElementById('variete').textContent = "Maïs Grain";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "15/04/2020";
}

function valueInput(){
    var valueDate = document.getElementById('Prec').value;
    if(valueDate !== ''){
        document.getElementById('resultPrec').innerHTML = valueDate;
    }
    document.getElementById('Prec').value = ' ';
}

function valueInputIrri(){
    var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
    var value = document.getElementById('nbIrri').value;
    if(value !== ''){
        document.getElementById('resultIrri').innerHTML = value;
        if(active_page == 'parc1'){
            window.sessionStorage.setItem('P1',value);
        }else if(active_page == 'parc2'){
            window.sessionStorage.setItem('P2',value);
        }else{
            window.sessionStorage.setItem('P3',value);
        }
    }
    console.log(window.sessionStorage.getItem('P1'));
    document.getElementById('nbIrri').value = '';
}
