console.log('ready');
$("#menu-button").on('click', function () {
    $("nav").toggleClass('-translate-x-full');
    $("#menu-open").toggleClass('hidden');
    $("#menu-close").toggleClass('hidden');
})
$('#theme-button').on('click', function () {
    $("body").toggleClass('dark');
    $("#sun").toggleClass("hidden");
    $("#moon").toggleClass("hidden");
})
