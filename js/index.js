

$(document).ready(function(){
    $("#btn1").click(function(){
        var element = document.getElementById('segregation');
        $('html, body').animate({
          scrollTop: (getOffset2(element).top-220)
        }, 1000);
    });
  });
  
  $(document).ready(function(){
    $("#btn2").click(function(){
        var element = document.getElementById('transportation');
        $('html, body').animate({
          scrollTop: (getOffset2(element).top-120)
        }, 1000);
    });
  });
  
  $(document).ready(function(){
  $("#btn3").click(function(){
      var element = document.getElementById('incineration');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-120)
      }, 1000);
  });
  });


$(document).ready(function(){
    $("#btn4").click(function(){
        var element = document.getElementById('segregation1');
        $('html, body').animate({
          scrollTop: (getOffset2(element).top-220)
        }, 1000);
    });
  });
  
  $(document).ready(function(){
    $("#btn5").click(function(){
        var element = document.getElementById('transportation1');
        $('html, body').animate({
          scrollTop: (getOffset2(element).top-120)
        }, 1000);
    });
  });
  
  $(document).ready(function(){
  $("#btn6").click(function(){
      var element = document.getElementById('incineration1');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-120)
      }, 1000);
  });
  });
  $(document).ready(function(){
  $("#btn7").click(function(){
      var element = document.getElementById('home');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-120)
      }, 1000);
  });
  });
  $(document).ready(function(){
  $("#btn8").click(function(){
      var element = document.getElementById('home');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-120)
      }, 1000);
  });
  });



  
  
  function getOffset2( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }








  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


(function () {
    const header_mobile = document.querySelector('.header_mobile');
      const icon = document.querySelector('.icon-container');
      const icon1 = document.querySelector('.icon-container1');
      const icon2 = document.querySelector('.icon-container2');
      const icon3 = document.querySelector('.icon-container3');
      const icon4 = document.querySelector('.icon-container4');
      const icon5 = document.querySelector('.icon-container5');
      icon.onclick = function () {
          header_mobile.classList.toggle('menu-open');
      }
      icon1.onclick = function () {
          header_mobile.classList.toggle('menu-open');
      }
      icon2.onclick = function () {
          header_mobile.classList.toggle('menu-open');
      }
      icon3.onclick = function () {
          header_mobile.classList.toggle('menu-open');
      }
      icon4.onclick = function () {
          header_mobile.classList.toggle('menu-open');
      }
      icon5.onclick = function () {
          header_mobile.classList.toggle('menu-open');
      }
  }());



  