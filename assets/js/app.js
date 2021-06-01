window.addEventListener('load', function () {
    console.log('Hello')

    setTimeout(function () {
        let $loader = document.getElementById('loader');
        if ($loader) {
            $loader.classList.add('d-none')
        }
    }, 3000)
})