function Carousel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens;
    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev;
    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext;

    var _this = this;
    var _currentSlide = 0;

    init();

    function init(){
        var _show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('.show');
        })
        _this.itens[0].classList.add('show');
        _this.btnPrev.removeAttribute('style');
        _this.btnNext.removeAttribute('style');

        addListeneres();

        function addListeneres(){
            _this.btnPrev.addEventListener('click', showPrevSlide);
            _this.btnNext.addEventListener('click', showNextSlide);
        }

        function showPrevSlide(){
            _currentSlide--;
            showSlide();
        }

        function showNextSlide(){
            _currentSlide++;
            showSlide();
        }

        setInterval(showNextSlide, 5000);

        function showSlide(){
            var qtd = _this.itens.length;
            var slide = _currentSlide % qtd; // retorna o resto da divisão num munero inteiro
            // logo vai sempre retornar de 0 a 3, os quatro slides
            slide = Math.abs(slide); // no caso da operação acima devolver um valor negativo, este método vai passar esse valor para positivo
           
            _this.container.querySelector('.show').classList.remove('show');
            _this.itens[slide].classList.add('show');
        }
    }

}