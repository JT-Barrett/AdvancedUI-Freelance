$(document).ready(function(){
  $("img.help-button, img.help-button-vacancies").on('click', function(e){
    if ($(".help-box").hasClass("hidden")){
      $(".help-box").removeClass("hidden")
    } else {
      $(".help-box").addClass("hidden");
    }

  });

  $(".room-select").click(function () {
    $(".room-selected").removeClass("room-selected");
    $(this).addClass("room-selected");

    //ready generate button
    $(".room-select-button").addClass("ready");
  });

  $(".form-control").on('input change', function(){
    var complete = true;
    $(".form-control").each(function(){
      console.log("Val:" + $(this).val());
      if ($(this).val() == "" || typeof $(this).val() == undefined){
        complete = false;
        $(".room-select-button").removeClass("ready");
      }
    });
    if(complete)
      $(".room-select-button").addClass("ready");
  });

  //if valid follow link, else shake
  $(".room-select-button").click(function (e) {
    if(!$(this).hasClass("ready")){
      e.preventDefault();
      $(this).shake();
    } else {
      window.location.href = $(this).attr('href');
    }
  });

  //this just fixes some height issues on the vacancies page
  if($(".form-container-large").length > 0){
    var realHeight = $(".form-container-large").css("height");
    $(".form-container-large-col").css("height", realHeight);
  }

});


//this is for shaking buttons or pages when some validation fails.
(function ($) {
    $.fn.shake = function (options) {
        // defaults
        var settings = {
            'shakes': 2,
            'distance': 3,
            'duration': 200
        };
        // merge options
        if (options) {
            $.extend(settings, options);
        }
        // make it so
        var pos;
        return this.each(function () {
            $this = $(this);
            // position if necessary
            pos = $this.css('position');
            if (!pos || pos === 'static') {
                $this.css('position', 'relative');
            }
            // shake it
            for (var x = 1; x <= settings.shakes; x++) {
                $this.animate({ left: settings.distance * -1 }, (settings.duration / settings.shakes) / 4)
                    .animate({ left: settings.distance }, (settings.duration / settings.shakes) / 2)
                    .animate({ left: 0 }, (settings.duration / settings.shakes) / 4);
            }
        });
    };
}(jQuery));
