window.addEventListener('load', function () {
    console.log('Hello');

    setTimeout(function () {
        var $loader = document.getElementById('loader');
        if ($loader) {
            $loader.classList.add('d-none');
        }
    }, 3000);

    // alert('Hello World');
});
