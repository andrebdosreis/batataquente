function comecar() {
        document.querySelector('.container').classList.remove('vermelho');
        let numero = Math.floor(Math.random() * 20);

        let intervalo = setInterval(function(){
            if (numero <= 0) {
                document.querySelector('h1').innerHTML = 'QUEIMOU!';
                document.querySelector('button').style.display = "block";
                document.querySelector('#perdeu').play();
                document.querySelector('.container').classList.add('vermelho');
                document.querySelector('button').innerHTML = "JOGAR DE NOVO";''
                clearInterval(intervalo);
                return;
            }

            numero = numero - 1;
            document.querySelector('h1').innerHTML = 'QUENTE';
            document.querySelector('.container').classList.toggle('verde');
        }, 700);
    }

    function clicou(e) {
        e.preventDefault();
        document.querySelector('h1').innerHTML = "BATATA";
        comecar();
        document.querySelector('button').style.display = "none";
    }

    document.querySelector('button').addEventListener('click', clicou);