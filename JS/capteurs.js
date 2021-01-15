var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function loading(){
  document.getElementById('myonoffswitch').attributes.setNamedItem(document.createAttribute("checked"));
  console.log(document.getElementById('myonoffswitch').attributes);
    if(window.sessionStorage.getItem('Switch1.1') == 'false'){
        document.getElementById('myonoffswitch').checked = false;
        document.getElementsByClassName('purc-batt1')[0].style.display = "none";
    }
    if(window.sessionStorage.getItem('Switch1.2') == 'false'){
        document.getElementById('myonoffswitch2').checked = false;
        document.getElementsByClassName('purc-batt2')[0].style.display = "none";
    }
    if(window.sessionStorage.getItem('Switch1.3') == 'false'){
        document.getElementById('myonoffswitch3').checked = false;
        document.getElementsByClassName('purc-batt3')[0].style.display = "none";
    }
    if(window.sessionStorage.getItem('Switch1.4') == 'false'){
        document.getElementById('myonoffswitch4').checked = false;
        document.getElementsByClassName('purc-batt4')[0].style.display = "none";
    }
}

$(document).ready(function(){
    $(".onoffswitch1 input").on("change", function(e) {
        var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
        const isOn = e.currentTarget.checked;
        if(active_page == 'parc1'){
            if (isOn) {
                $(".purc-batt1").show();
                window.sessionStorage.setItem('Switch1.1', true);
            } else {
                $(".purc-batt1").hide();
                window.sessionStorage.setItem('Switch1.1', false);
            }
        }else if(active_page == 'parc2'){
            if (isOn) {
                $(".purc-batt1").show();
                window.sessionStorage.setItem('Switch2.1', true);
            } else {
                $(".purc-batt1").hide();
                window.sessionStorage.setItem('Switch2.1', false);
            }
        }else{
            if (isOn) {
                $(".purc-batt1").show();
                window.sessionStorage.setItem('Switch3.1', true);
            } else {
                $(".purc-batt1").hide();
                window.sessionStorage.setItem('Switch3.1', false);
            }
        }
    });
    $(".onoffswitch2 input").on("change", function(e) {
        var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
        const isOn = e.currentTarget.checked;
        if(active_page == 'parc1'){
            if (isOn) {
                $(".purc-batt2").show();
                window.sessionStorage.setItem('Switch1.2', true);
            } else {
                $(".purc-batt2").hide();
                window.sessionStorage.setItem('Switch1.2', false);
            }
        }else if(active_page == 'parc2'){
            if (isOn) {
                $(".purc-batt2").show();
                window.sessionStorage.setItem('Switch2.2', true);
            } else {
                $(".purc-batt2").hide();
                window.sessionStorage.setItem('Switch2.2', false);
            }
        }else{
            if (isOn) {
                $(".purc-batt2").show();
                window.sessionStorage.setItem('Switch3.2', true);
            } else {
                $(".purc-batt2").hide();
                window.sessionStorage.setItem('Switch3.2', false);
            }
        }
    });
    $(".onoffswitch3 input").on("change", function(e) {
        var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
        const isOn = e.currentTarget.checked;
        if(active_page == 'parc1'){
            if (isOn) {
                $(".purc-batt3").show();
                window.sessionStorage.setItem('Switch1.3', true);
            } else {
                $(".purc-batt3").hide();
                window.sessionStorage.setItem('Switch1.3', false);
            }
        }else if(active_page == 'parc2'){
            if (isOn) {
                $(".purc-batt3").show();
                window.sessionStorage.setItem('Switch2.3', true);
            } else {
                $(".purc-batt3").hide();
                window.sessionStorage.setItem('Switch2.3', false);
            }
        }else{
            if (isOn) {
                $(".purc-batt3").show();
                window.sessionStorage.setItem('Switch3.3', true);
            } else {
                $(".purc-batt3").hide();
                window.sessionStorage.setItem('Switch3.3', false);
            }
        }
    });
    $(".onoffswitch4 input").on("change", function(e) {
        var active_page = document.getElementsByClassName('active_link')[0].getAttribute('id');
        const isOn = e.currentTarget.checked;
        if(active_page == 'parc1'){
            if (isOn) {
                $(".purc-batt4").show();
                window.sessionStorage.setItem('Switch1.4', true);
            } else {
                $(".purc-batt4").hide();
                window.sessionStorage.setItem('Switch1.4', false);
            }
        }else if(active_page == 'parc2'){
            if (isOn) {
                $(".purc-batt4").show();
                window.sessionStorage.setItem('Switch2.4', true);
            } else {
                $(".purc-batt4").hide();
                window.sessionStorage.setItem('Switch2.4', false);
            }
        }else{
            if (isOn) {
                $(".purc-batt4").show();
                window.sessionStorage.setItem('Switch3.4', true);
            } else {
                $(".purc-batt4").hide();
                window.sessionStorage.setItem('Switch3.4', false);
            }
        }
    });
});

function dataParc1(){
    document.getElementById('parc1').onclick = null;
    document.getElementById('parc1').classList.add("active_link");
    document.getElementById('parc2').onclick = function (){dataParc2()};
    document.getElementById('parc2').classList.remove("active_link");
    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    if(window.sessionStorage.getItem('Switch1.1') == 'false'){
        document.getElementById('myonoffswitch').checked = false;
        document.getElementsByClassName('purc-batt1')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch').checked = true;
        document.getElementsByClassName('purc-batt1')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch1.2') == 'false'){
        document.getElementById('myonoffswitch2').checked = false;
        document.getElementsByClassName('purc-batt2')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch2').checked = true;
        document.getElementsByClassName('purc-batt2')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch1.3') == 'false'){
        document.getElementById('myonoffswitch3').checked = false;
        document.getElementsByClassName('purc-batt3')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch3').checked = true;;
        document.getElementsByClassName('purc-batt3')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch1.4') == 'false'){
        document.getElementById('myonoffswitch4').checked = false;
        document.getElementsByClassName('purc-batt4')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch4').checked = true;
        document.getElementsByClassName('purc-batt4')[0].style.display = "block";
    }
}

function dataParc2(){
    document.getElementById('parc1').onclick = function (){dataParc1()};
    document.getElementById('parc1').classList.remove("active_link");
    document.getElementById('parc2').onclick = null;
    document.getElementById('parc2').classList.add("active_link");
    document.getElementById('parc3').onclick = function (){dataParc3()};
    document.getElementById('parc3').classList.remove("active_link");

    if(window.sessionStorage.getItem('Switch2.1') == 'false'){
        document.getElementById('myonoffswitch').checked = false;
        document.getElementsByClassName('purc-batt1')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch').checked = true;
        document.getElementsByClassName('purc-batt1')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch2.2') == 'false'){
        document.getElementById('myonoffswitch2').checked = false;
        document.getElementsByClassName('purc-batt2')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch2').checked = true;
        document.getElementsByClassName('purc-batt2')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch2.3') == 'false'){
        document.getElementById('myonoffswitch3').checked = false;
        document.getElementsByClassName('purc-batt3')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch3').checked = true;
        document.getElementsByClassName('purc-batt3')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch2.4') == 'false'){
        document.getElementById('myonoffswitch4').checked = false;
        document.getElementsByClassName('purc-batt4')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch4').checked = true;
        document.getElementsByClassName('purc-batt4')[0].style.display = "block";
    }
}

function dataParc3(){
    document.getElementById('parc1').onclick = function (){dataParc1()}
    document.getElementById('parc1').classList.remove("active_link");
    document.getElementById('parc2').onclick = function (){dataParc2()}
    document.getElementById('parc2').classList.remove("active_link");
    document.getElementById('parc3').onclick = null;
    document.getElementById('parc3').classList.add("active_link");

    if(window.sessionStorage.getItem('Switch3.1') == 'false'){
        document.getElementById('myonoffswitch').checked = false;
        document.getElementsByClassName('purc-batt1')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch').checked = true;
        document.getElementsByClassName('purc-batt1')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch3.2') == 'false'){
        document.getElementById('myonoffswitch2').checked = false;
        document.getElementsByClassName('purc-batt2')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch2').checked = true;
        document.getElementsByClassName('purc-batt2')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch3.3') == 'false'){
        document.getElementById('myonoffswitch3').checked = false;
        document.getElementsByClassName('purc-batt3')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch3').checked = true;
        document.getElementsByClassName('purc-batt3')[0].style.display = "block";
    }
    if(window.sessionStorage.getItem('Switch3.4') == 'false'){
        document.getElementById('myonoffswitch4').checked = false;
        document.getElementsByClassName('purc-batt4')[0].style.display = "none";
    }else{
        document.getElementById('myonoffswitch4').checked = true;
        document.getElementsByClassName('purc-batt4')[0].style.display = "block";
    }
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

