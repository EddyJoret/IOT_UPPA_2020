function dataParc1(){
    document.getElementById('parc1').onclick = null;
    document.getElementById('parc1').classList.add("active_link");

    document.getElementById('parc2').onclick = function (){dataParc2()};
    document.getElementById('parc2').classList.remove("active_link");

    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    document.getElementById('h').textContent = "Irrigation de la parcelle 1";
    document.getElementById('nir').textContent = "2";
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
    document.getElementById('nir').textContent = "3";
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
    document.getElementById('nir').textContent = "2";
    document.getElementById('vc').textContent = "58mm";
    document.getElementById('die').textContent = "7j";

    document.getElementById('titleParc').textContent = "Parcelle 3";
    document.getElementById('variete').textContent = "Maïs Grain";
    document.getElementById('flor').textContent = "Floraison femelle";
    document.getElementById('dateSemis').textContent = "15/04/2020";
}

function valueInput(){
    var valueDate = document.getElementById('datePrec').value;
    document.getElementById('result').innerHTML = valueDate;
    document.getElementById('datePrec').value = ' ';
}

function valueInputIrri(){
    var valueDate = document.getElementById('nbIrri').value;
    if(valueDate = ' '){
        console.log()
        valueDate = document.getElementById('resultIrri').textContent;
    }else{
        document.getElementById('resultIrri').innerHTML = valueDate;
    }
    document.getElementById('nbIrri').value = ' ';
    
    
}