(function (){
    // se o js funcionar faz a troca de class para ativar o js nos slides
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    // cria uma função construtora para o carousel das imagens
    var carouselImgs = new Carousel({
        container: '.container_slideshow .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()