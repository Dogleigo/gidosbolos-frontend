//Criando função para passar slides

    var mostrarslides = document.getElementById('mostrarslides');
    var slides = mostrarslides.getElementsByTagName('img');
    var index = 0;

        function passarSlide(){
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active'); 
        }
        
        function voltarSlide(){
            slides[index].classList.remove('active');
            index = (index - 1 + slides.length) % slides.length;
            slides[index].classList.add('active'); 
        }

//Criando função para passar o texto

    var mostrartextoslides = document.getElementById('mostrartextoslides');
    var textoslides = mostrartextoslides.getElementsByTagName('div');
    var i = 0;

        function passarTextoSlide(){
            textoslides[i].classList.remove('active');
            i = (i + 1) % textoslides.length;
            textoslides[i].classList.add('active'); 
        }

        function voltarTextoSlide(){
            textoslides[i].classList.remove('active');
            i = (i - 1 + textoslides.length) % textoslides.length;
            textoslides[i].classList.add('active'); 
        }

//Menu CSS e JS

        function menuToggle(){
            var nav = document.getElementById('navegacao');
            nav.classList.toggle('active')

        }

//Valores dinamicos nos banners

    var vlrBolo = document.getElementById('vlrBolo');

        function calcBolo(vlrb){
            vlrBolo.innerHTML = `R$${vlrb}`
        }

    var vlrCup = document.getElementById('vlrCup');

        function calcCup(vlrc){
            vlrCup.innerHTML = `R$${vlrc}`
        }

    var vlrDoces = document.getElementById('vlrDoces');

        function calcDoces(vlrd){
            vlrDoces.innerHTML = `R$${vlrd}`
        }

//Carrinho modal

function modal(){
    
    var desfoque = document.getElementById('desfoque');
    desfoque.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}
