const dificuldades = document.getElementById("nivel")
const campo = document.getElementById("campo")
const tempo_restante = document.getElementById("tempo_restante")

var vidas = 3
var tempo = 100

var cronometro = setInterval(() => {
    tempo -= 1
    tempo_restante.innerText = `Tempo Restante: ${tempo}`
    if(vidas <= 1) clearInterval(cronometro);
}, 1000);

function gameover(){
    window.location.href = '../index.html'
}

function spawn_mosquito(){
    let heigth = Math.floor(Math.random() * 460)
    let width = Math.floor(Math.random() * (window.screen.width - 70))
    let tamanho = 60
    
    var novo_mosquito = document.createElement("img")
    novo_mosquito.src = '../imagens/mosca.png'
    novo_mosquito.className = 'mosca'
    novo_mosquito.style.height = tamanho + 'px'
    novo_mosquito.style.width = tamanho + 'px'
    novo_mosquito.style.left = width + 'px'
    novo_mosquito.style.top = heigth + 'px'
    novo_mosquito.style.position = 'absolute'
    novo_mosquito.id = 'mosquito'
    novo_mosquito.onclick = function(){
        document.getElementById('mosquito').remove()
    }

    if(document.getElementById('mosquito')){
        if (vidas == 1){
            gameover()
            document.getElementById(`vd-1`).src = "../imagens/coracao_vazio.png"
        }  else{
            document.getElementById('mosquito').remove()
            document.getElementById(`vd-${vidas}`).src = "../imagens/coracao_vazio.png"
            vidas -= 1
        }
    }

    campo.appendChild(novo_mosquito)
}

function JogoIniciado(){
    console.log("Jogo iniciado")

    let op = 'valor_3'
    let tempo_vida_mosquito = 5000
    
    vidas = 3
    
    if (op == 'valor_1') {
        op = 1
    } else {
        switch (op) {
            case 'valor_2':
                op = 1
                break
            case 'valor_3':
                op = 2
                break
            case 'valor_4':
                op = 3
                break
        }
    }
    tempo_vida_mosquito /= op
    console.log(`Tempo de vida do mosquito configurado para ${tempo_vida_mosquito}ms`)

    var spawnmoscas = setInterval(() => {
        spawn_mosquito()
        if(vidas <= 0 ) clearInterval(spawnmoscas);
    }, tempo_vida_mosquito);
}
