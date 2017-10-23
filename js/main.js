$(document).ready(function(){
    // Инициализирует карусель
    $(".start-slide").click(function(){
        $("#myCarousel2").carousel('cycle');
    });

    // Осуществляет переход на предыдущий слайд
    $(".prev-slide").click(function(){
        $("#myCarousel2").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide").click(function(){
        $("#myCarousel2").carousel('next');
    });

    $(".start-slide1").click(function(){
        $("#myCarousel1").carousel('cycle');
    });

    // Осуществляет переход на предыдущий слайд
    $(".prev-slide1").click(function(){
        $("#myCarousel1").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide1").click(function(){
        $("#myCarousel1").carousel('next');
    });
    $('#accordion').on('shown.bs.collapse', function (e) {
        var elem = e.target.previousElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
        elem.className = 'flaticon-arrows';
        var panelHeading = e.target.previousElementSibling;
        panelHeading.classList.add('active');
    });
    $('#accordion').on('hidden.bs.collapse', function (e) {
        var elem = e.target.previousElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
        elem.className = 'flaticon-arrows-1';
        var panelHeading = e.target.previousElementSibling;
        panelHeading.classList.remove('active');
    });

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
        $(".links").toggleClass("hidden");
    });
    $(".links a").click(function () {
        $(".sandwich").removeClass("active");
        $(".links").addClass("hidden");
        }
    );
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
});