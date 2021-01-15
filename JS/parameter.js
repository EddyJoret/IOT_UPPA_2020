
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");
function loading(){
    document.getElementById('checkbox').attributes.setNamedItem(document.createAttribute("checked"));
      if(window.sessionStorage.getItem('Switch1.1') == 'false'){
          document.getElementById('checkbox').checked = false;
      }
      if(window.sessionStorage.getItem('Switch1.2') == 'false'){
          document.getElementById('checkbox2').checked = false;
      }
      if(window.sessionStorage.getItem('Switch1.3') == 'false'){
          document.getElementById('checkbox3').checked = false;
      }
      if(window.sessionStorage.getItem('Switch1.4') == 'false'){
          document.getElementById('checkbox4').checked = false;
      }
}

$(document).ready(function(){
    $(".switch-wrapper input").on("change", function(e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            window.sessionStorage.setItem('Switch1.1', true);
        } else {
            window.sessionStorage.setItem('Switch1.1', false);
        }
    });
    $(".switch-wrapper-2 input").on("change", function(e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            window.sessionStorage.setItem('Switch1.2', true);
        } else {
            window.sessionStorage.setItem('Switch1.2', false);
        }
    });
    $(".switch-wrapper-3 input").on("change", function(e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            window.sessionStorage.setItem('Switch1.3', true);
        } else {
            window.sessionStorage.setItem('Switch1.3', false);
        }
    });
    $(".switch-wrapper-4 input").on("change", function(e) {
        const isOn = e.currentTarget.checked;
        if (isOn) {
            window.sessionStorage.setItem('Switch1.4', true);
        } else {
            window.sessionStorage.setItem('Switch1.4', false);
        }
    });
});


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
