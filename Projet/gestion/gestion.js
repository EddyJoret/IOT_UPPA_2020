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
}
