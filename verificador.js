function verificar() {
    var data = new Date() //pegar a data atual do sistema
    var ano = data.getFullYear() // ano atual do sistema com 4 digitos
    var fano = document.getElementById('txtano') // o ano que a pessoa colocou
    var res = document.getElementById('res') // onde vai atualizar o resultado
    if (fano.value.length == 0 || fano.value > ano) {  //se a caixa de texto ta vazia ou o ano for maior que o atual
        window.alert('[ERRO] VERIFIQUE SEUS DADOS E TENTE NOVAMENTE')
    } else {
        var fsex = document.getElementsByName('radsex') // qual dos dois botoes foi marcado: mas ou fem
        var idade = ano - Number(fano.value) // calculo  da idade que é o ano atual menos o que nasceu
        var genero = '' // o genero recebe um valor com condicoes :
        var img = document.createElement('img') // criar uma var de imagem
        img.setAttribute('id', 'foto') // colocar o id da foto, mas pode colocar no html tambem
        if (fsex[0].checked) { // se a primeira caixa for marcada é homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { // entre 0 e 9 é criança
                // criança
                img.setAttribute('src', 'foto-bebe-m.png') // atribui a foto de criança
            } else if (idade >= 10 && idade < 21) { 
                // jovem 
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // para mostrar a imagem
    }
}
