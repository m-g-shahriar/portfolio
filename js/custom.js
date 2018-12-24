$(function(){

  console.log("work");


          $('.mButton').click(function(){

              //$('nav ul').show('fast');

              $('nav ul').toggleClass('show');



              // if ($('nav ul').is(":hidden")) {
              //     $('nav ul').show("fast");
              // }
              // else{
              //   $('nav ul').hide("fast");
              // }

  console.log("work");
          });


          // NOTE: Box section hover

          $('.boxSection').hover(function(){
                $('.w').addClass('W_animation');
          },function(){

          });

          $('.boxStyle').hover(function(){
                $('.webText').show('slow');
          },function(){
              $('.webText').hide('slow');
          });
          $('.boxStyle1').hover(function(){
                $('.SEOText').show('slow');
          },function(){
              $('.SEOText').hide('slow');
          });

          $('.boxStyle2').hover(function(){
                $('.AndroidText').show('slow');
          },function(){
              $('.AndroidText').hide('slow');
          });

          $('.boxStyle3').hover(function(){
                $('.graphicsText').show('slow');
          },function(){
              $('.graphicsText').hide('slow');
          });



});
