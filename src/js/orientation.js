        function orient() {
        if (window.orientation == 180 || window.orientation == 0) {
        //竖屏
        $("#Reminding").show();
        return false;
        }
        else {
        $("#Reminding").hide();
        return false;
        }
                         }
        //页面加载时调用
        $(function(){
        orient();
        });
        //用户变化屏幕方向时调用
        $(window).bind( 'orientationchange', function(e){
        orient();
        });
