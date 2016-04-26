 
    $('.number').each(function() {
        //test
        var percent = $(this).html();
        switch (percent) {
            case '100%':
                $(this).parent().siblings(".slice-left").addClass('time-left');
                $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice', 'animation-name': 'left-slice100' });
                break;
            case '95%':
                $(this).parent().siblings(".slice-left").addClass('time-left');
                $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice95' });
                break;
            case '90%':
                $(this).parent().siblings(".slice-left").addClass('time-left');
                $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice90' });
                break;
            case '80%':
                $(this).parent().siblings(".slice-left").addClass('time-left');
                $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice80' });
                break;
            case '70%':
                $(this).parent().siblings(".slice-left").addClass('time-left');
                $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice70' });
                break;
            case '60%':
                $(this).parent().siblings(".slice-left").addClass('time-left');
                $(this).parent().siblings(".slice-left").css({ '-webkit-animation-name': 'left-slice50', 'animation-name': 'left-slice60' });
                break;
            case '20%':
                $(this).parent().siblings(".slice-right").css({ '-webkit-animation-name': 'right-slice20', 'animation-name': 'right-slice20' });
                break;
            default:
                break;
        }
    });
   


