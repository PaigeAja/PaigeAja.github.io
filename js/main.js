

//Mobile Menu
$(document).on('click','.btn-menu',function(){
                $('nav').slideDown(200).addClass('close-menu');
                $(this).addClass('btn-menu-close');
            });

            $(document).on('click','.btn-menu-close',function(){
                $('nav').slideUp(200).addClass('close-menu');
                $(this).removeClass('btn-menu-close');
            });
            
            
            $(document).on('click','.menu-close',function(){
                $('nav').slideUp(200);
            });


//Highlight Footer Links
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}


// Typewriter

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


// Remove Typewrite and Additional Text on Hover - Homepage
    $(function(){
      // When your search icon is hovered over, display the search box
      $("footer a").hover(function(){
        // Display the search box
        $(".blc-sq-2 p").hide();
      }, function(){
        // Hide it when the container is moused out of
        $(".blc-sq-2 p").show();
      });
   });


   $(function(){
      // When your search icon is hovered over, display the search box
      $("footer a").hover(function(){
        // Display the search box
        $(".blc-sq-2 img").show();
      }, function(){
        // Hide it when the container is moused out of
        $(".blc-sq-2 img").hide();
      });
   });


//Change Image on Hover 

$(document).ready(function(){
  $('footer a#hov2').hover(
    function(){
      $(this).addClass('mouseover');
      $('.blc-sq-2 img').attr('src', 'img/cdmobile.png');
    },
    function(){
      // $(this).removeClass('mouseoff');
      $('blc-sq-2 img').hide();
    }
  );

  $('footer a#hov4').hover(
    function(){
      $(this).addClass('mouseover');
      $('.blc-sq-2 img').attr('src', 'img/jp-08.png');
    },
    function(){
      // $(this).removeClass('mouseoff');
      $('blc-sq-2 img').hide();
    }
  );

  $('footer a#hov5').hover(
    function(){
      $(this).addClass('mouseover');
      $('.blc-sq-2 img').attr('src', 'img/19.png');
    },
    function(){
      // $(this).removeClass('mouseoff');
      $('blc-sq-2 img').hide();
    }
  );

});


