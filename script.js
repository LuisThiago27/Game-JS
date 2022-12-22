var elementos = document.querySelectorAll('.player-options div > img');
const enemyOpitions = document.querySelectorAll('.enemy-options div');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria() {
    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel") {
        if(inimigoOpt == "papel") {
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "pedra") {
            vencedor.innerHTML = "Player venceu!";
        } else if(inimigoOpt == "tesoura") {
            vencedor.innerHTML = "Inimigo venceu!";
        }
    }

    if(playerOpt == "tesoura") {
        if(inimigoOpt == "tesoura") {
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "papel") {
            vencedor.innerHTML = "Player venceu!";
        } else if(inimigoOpt == "pedra") {
            vencedor.innerHTML = "Inimigo venceu!";
        }
    }

    if(playerOpt == "pedra") {
        if(inimigoOpt == "pedra") {
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "tesoura") {
            vencedor.innerHTML = "Player venceu!";
        } else if(inimigoOpt == "papel") {
            vencedor.innerHTML = "Inimigo venceu!";
        }
    }
}

function resetInimigo() {
    for(var i = 0; i < enemyOpitions.length; i ++) {
        enemyOpitions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar() {
    let rand = Math.floor(Math.random()*3);

    resetInimigo();
    for(var i = 0; i < enemyOpitions.length; i ++) {
        if(i == rand) {
            enemyOpitions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOpitions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();

}

function resetOpacityPlayer() {
    for(var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function(t) {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    });
}