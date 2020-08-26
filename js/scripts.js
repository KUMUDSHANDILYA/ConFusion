

        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function() {
                if ($("#carouselButton").children("span").hasClass('fa-pause'))
                {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
            $("#loginformlink").click(function(){
                $("#loginModal").modal('show');
            });
            $("#closeloginform").click(function() {
                $("#loginModal").modal('hide');
            });
            $("#cancellogin").click(function() {
                $("#loginModal").modal('hide');
            });
            $("#reserveformlink").click(function() {
                $("#reserveModal").modal('show');
            });
            $("#closereserveform").click(function() {
                $("#reserveModal").modal('hide');
            });
            $("#reserveformcancel").click(function() {
                $("#reserveModal").modal('hide');
            });
        });

