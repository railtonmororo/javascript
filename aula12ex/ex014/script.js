
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} minutos.`

    if(hora >= 0 && hora <12){
        img.src='imagens/dia.png'
        document.body.style.background = '#fcce3c'
    }else if(hora >=12 && hora < 18){
        img.src= 'imagens/tarde.png'
        document.body.style.background = '#c18d68'
    }else{
        img.src= 'imagens/noite.png'
        document.body.style.background = '#07151a'
        
    }
}