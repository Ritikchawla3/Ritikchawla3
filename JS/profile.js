

var click = 0;
var i=0;


function fun() {
    imageUpdate();
    cartUpdate();
}

function imageUpdate() {
  document.getElementById('display').innerHTML = ++click;
  click = click;
}



function cartUpdate(){
document.getElementById('itm').innerHTML = ++i;
i = i;
}




$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


