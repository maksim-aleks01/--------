  <script type="text/javascript">
        $(document).ready(function(){
            var touch = $('.btn_menu');
            var menu = $('.nav');
         
            $(touch).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
            $(window).resize(function(){
                var wid = $(window).width();
                if(wid > 760 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });
    </script>