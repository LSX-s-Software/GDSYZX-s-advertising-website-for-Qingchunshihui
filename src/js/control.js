var playing = false;
function finish(){
    $("#movie").css("display","none");
    $("#buttons").css("display","none");
    window.location.href="index2.html";
}
$(document).ready(function () {
                var movie = document.getElementById('movie');
                movie.addEventListener('ended', function () {
                    finish();
                });
                $('#para1').click(function () {
                                  $("#para1").fadeOut();
                                  $("#index").hide();
                                  $("#buttons").css("visibility","visible");
                                  $("#movie").css("visibility","visible");
                    movie.play();
                });
                $('#skip').click(function(){
                        movie.pause();
                        finish();
                });
                $('#mute').click(function() {
                        var sta = movie.muted;
                        if (sta == true) {
                            movie.muted = false;
                        } else {
                            movie.muted = true;
                        }
                });
            });
            //switch (window.navigator.connection.type) {
            //    case "wifi":
            //        $("movie").attr("src", "src/media/1080.mp4");
            //        break;
            //    default:
            //        $("movie").attr("src", "src/media/720.mp4");
            //}
