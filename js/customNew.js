$(function(){

    // NOTE: menu

    $('.mButton').click(function(){
        $('nav ul').toggleClass('show');

    });


    $('ul li a').click(function(){

        $(this).toggleClass('active');


    });


      // NOTE: For projets section

      $('.box p').click(function(){

          console.log("worked");

          var className = $(this).attr("class");

              console.log(className);

              //var projectPd = $('.detailsProject').attr("class");




              if(className=="Fn"){


                  console.log(className);
                  //$(".finalYearsDe").show();
                  $(".finalYearsDe").toggleClass('RowShow');
                //  $(".finalYearsDe").show();

                 $(".webDesign").removeClass('RowShow');

                 $(".android").removeClass('RowShow');
              }



              if(className=="Wd"){

                //$('.detailsProject').toggleClass('detailsProjectPadding');
                  console.log(className);
                  //$(".finalYearsDe").show();
                $(".webDesign").toggleClass('RowShow');
                  //$(".finalYearsDe").hide();
                   $(".finalYearsDe").removeClass('RowShow');
                    //$(".webDesign").show();
                    $(".android").removeClass('RowShow');
              }

              if(className=="An"){
                //$('.detailsProject').toggleClass('detailsProjectPadding');
                  $(".android").toggleClass('RowShow');

                  $(".finalYearsDe").removeClass('RowShow');

                  $(".webDesign").removeClass('RowShow');

              }

        
           if(className=="Gr"){
                //$('.detailsProject').toggleClass('detailsProjectPadding');
						$(".photo-gallery").toggleClass('RowShow');

					$(".android").removeClass('RowShow');
                  $(".finalYearsDe").removeClass('RowShow');

                  $(".webDesign").removeClass('RowShow');

              }






      });


        // NOTE: counter

        $('.AmIResponsible').one("mouseover",function(){


                 var tour = 0;
                 var travelers = 0;
                 var parkVisit =0;
                 var days = 0;


                 setInterval(function(){

                     if(tour>25){
                       $('.350').html(tour);

                     }
                     if(tour<=25){
                         $('.350').html(tour);
                         tour++;
                     }

                       // NOTE: Travelers
                       if(travelers>20){
                         $('.8500').html(travelers);

                       }
                       if(travelers<=20){
                           $('.8500').html(travelers);
                           travelers++;
                     }

                     // NOTE: national park
                     if(parkVisit>10){
                       $('.250').html(parkVisit);

                     }
                     if(parkVisit<=10){
                         $('.250').html(parkVisit);
                         parkVisit++;
                   }

                   // NOTE: days
                   if(days>35){
                     $('.800').html(days);

                   }
                   if(days<=35){
                       $('.800').html(days);
                       days++;
                 }




               },90);

               console.log("0125");


         });



         // NOTE: Hover skillsBar

         $('.aboutMe').hover(function(){

                $('.innerSk').css("animation","zeroToFull 3s");

         });


         // NOTE: Find scroll


           $(document).ready(function() {
           // Check if element is scrolled into view
           function isScrolledIntoView(elem) {
             var docViewTop = $(window).scrollTop();
             var docViewBottom = docViewTop + $(window).height();

             var elemTop = $(elem).offset().top;
             var elemBottom = elemTop + $(elem).height();

             return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
           }
           // If element is scrolled into view, fade it in
           $(window).scroll(function() {
             $('.detailsProject').each(function() {
               if (isScrolledIntoView(this) === true) {
                 // NOTE: Only check
                 $('.iconN').addClass('fadeInUp delay-1s');
               }
             });
           });
           });

         // NOTE: End scroll


});
