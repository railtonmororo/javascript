function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let op = document.getElementById('op').value
    if(num.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // limpa a área da tabuada

        function gerarOperacao(tipo, callback){
            let grupo = document.createElement('optgroup')
            grupo.label = tipo
            c = 1
            while(c <= 10){
                let item = document.createElement('option')
                item.text = callback(c)
                item.value = `tab${c}`
                grupo.appendChild(item)
                 c++
            }
            tab.appendChild(grupo)
            
        }
        

        if(op == 'adição' || op == 'todas'){
            gerarOperacao('Adição', c => `${n} + ${c} = ${n+c}`)
        } else if(op == 'subtração' || op == 'todas'){
            gerarOperacao('Subtração', c => `${n} - ${c} = ${n-c}`)
        }else if(op == 'multiplicação' || op == 'todas'){
            gerarOperacao('Multiplicação', c => `${n} x ${c} = ${n*c}`)
        }else if(op == 'divisão' || op == 'todas'){
            gerarOperacao('Divisão', c => `${n} ÷ ${c} = ${(n/c).toFixed(2)}`)
        }

    }
}