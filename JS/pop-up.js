//Звёздное небо
if ('.popup-open-stars') {
    $(document).ready(function ($) {
        $('.popup-open-stars').click(function () {
            $('.stars-block_pop-up').fadeIn();
            return false;
        });
        $('.popup-close').click(function () {
            $(this).parents('.stars-block_pop-up').fadeOut();
            return false;
        });
        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.stars-block_pop-up').fadeOut();
            }
        });
        $('.stars-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}

//ПВХ потолки
if ('.popup-open-pvh') {
    $(document).ready(function ($) {
        $('.popup-open-pvh').click(function () {
            $('.pvh-block_pop-up').fadeIn();
            return false;
        });
        $('.popup-close').click(function () {
            $(this).parents('.pvh-block_pop-up').fadeOut();
            return false;
        });
        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.pvh-block_pop-up').fadeOut();
            }
        });
        $('.pvh-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}

//Тканевые
if ('.popup-open-tkan') {
    $(document).ready(function ($) {
        $('.popup-open-tkan').click(function () {
            $('.tkan-block_pop-up').fadeIn();
            return false;
        });

        $('.popup-close').click(function () {
            $(this).parents('.tkan-block_pop-up').fadeOut();
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.tkan-block_pop-up').fadeOut();
            }
        });

        $('.tkan-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}

//Сатиновый
if ('.satin-block_pop-up') {
    $(document).ready(function ($) {
        $('.popup-open-satin').click(function () {
            $('.satin-block_pop-up').fadeIn();
            return false;
        });

        $('.popup-close').click(function () {
            $(this).parents('.satin-block_pop-up').fadeOut();
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.satin-block_pop-up').fadeOut();
            }
        });

        $('.satin-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}

//Матовый потолок
if ('.matov-block_pop-up') {
    $(document).ready(function ($) {
        $('.popup-open-matov').click(function () {
            $('.matov-block_pop-up').fadeIn();
            return false;
        });

        $('.popup-close').click(function () {
            $(this).parents('.matov-block_pop-up').fadeOut();
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.matov-block_pop-up').fadeOut();
            }
        });

        $('.matov-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}

//Цветные потолки
if ('.cvet-block_pop-up') {
    $(document).ready(function ($) {
        $('.popup-open-cvet').click(function () {
            $('.cvet-block_pop-up').fadeIn();
            return false;
        });

        $('.popup-close').click(function () {
            $(this).parents('.cvet-block_pop-up').fadeOut();
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.cvet-block_pop-up').fadeOut();
            }
        });

        $('.cvet-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}

//глянцевые потолки
if ('.glanc-block_pop-up') {
    $(document).ready(function ($) {
        $('.popup-open-glanc').click(function () {
            $('.glanc-block_pop-up').fadeIn();
            return false;
        });

        $('.popup-close').click(function () {
            $(this).parents('.glanc-block_pop-up').fadeOut();
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.glanc-block_pop-up').fadeOut();
            }
        });

        $('.glanc-block_pop-up').click(function (e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });
}