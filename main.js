window.onload = (function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inherit";
})


function rolar(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
};
rolar();




function browserVerify() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //    alert('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //    alert('Chrome');

    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        // alert('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        document.getElementById("main-site").style.display = 'none';
        document.getElementById("not-suported").style.display = 'block';
        // alert('internet explorer')
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        document.getElementById("main-site").style.display = 'none';
        document.getElementById("not-suported").style.display = 'block';
    }
    else {
        //   alert('unknown');
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementById('header-mobile-2').style.display = "none";
  document.getElementById('header-mobile-2-logo').style.backgroundImage = "url(imagens/logo/logo-dark.jpg);"
}


