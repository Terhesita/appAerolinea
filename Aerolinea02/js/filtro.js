$(function () {
   /* $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });*/

    /*let equipo = $('#info').offset().top,
        servicio = $('#destinos').offset().top,
        trabajo = $('#servicio').offset().top,
        contacto = $('#servicio').offset().top;*/

    window.addEventListener('resize', function(){
        let equipo = $('#info').offset().top,
        servicio = $('#destinos').offset().top,
        trabajo = $('#servicio').offset().top,
        contacto = $('#servicios').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 50
        },800);
    });

    $('#enlace-acercade').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: /*equipo -280*/280
        },800);
    });

    $('#enlace-destinos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -70
        },800);
    });

    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -20
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});