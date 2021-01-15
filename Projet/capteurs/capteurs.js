function loading(){
    if(window.sessionStorage.getItem('Switch1') == 'false'){
        document.getElementById('myonoffswitch').removeAttribute('checked');
    }
    if(window.sessionStorage.getItem('Switch2') == 'false'){
        document.getElementById('myonoffswitch2').removeAttribute('checked');
    }
    if(window.sessionStorage.getItem('Switch3') == 'false'){
        document.getElementById('myonoffswitch3').removeAttribute('checked');
    }
    if(window.sessionStorage.getItem('Switch4') == 'false'){
        document.getElementById('myonoffswitch4').removeAttribute('checked');
    }
}

$(document).ready(function(){
  $(".onoffswitch1 input").on("change", function(e) {
    const isOn = e.currentTarget.checked;
    console.log(e.currentTarget);
    if (isOn) {
      $(".purc-batt1").show();
      window.sessionStorage.setItem('Switch1', true);
    } else {
      $(".purc-batt1").hide();
      window.sessionStorage.setItem('Switch1', false);
    }
  });
  $(".onoffswitch2 input").on("change", function(e) {
    const isOn = e.currentTarget.checked;
    if (isOn) {
      $(".purc-batt2").show();
      window.sessionStorage.setItem('Switch2', true);
    } else {
      $(".purc-batt2").hide();
      window.sessionStorage.setItem('Switch2', false);
    }
  });
  $(".onoffswitch3 input").on("change", function(e) {
    const isOn = e.currentTarget.checked;
    if (isOn) {
      $(".purc-batt3").show();
      window.sessionStorage.setItem('Switch3', true);
    } else {
      $(".purc-batt3").hide();
      window.sessionStorage.setItem('Switch3', false);
    }
  });
  $(".onoffswitch4 input").on("change", function(e) {
    const isOn = e.currentTarget.checked;
    if (isOn) {
      $(".purc-batt4").show();
      window.sessionStorage.setItem('Switch4', true);
    } else {
      $(".purc-batt4").hide();
      window.sessionStorage.setItem('Switch4', false);
    }
  });
});

function myFunction() {
   var element = document.body.children[0].children[1];
   var element2 = document.body.children[0].children[0];
   console.log(element2);
   element.classList.toggle("dark-mode");
   element2.classList.toggle("dark-mode");
}
