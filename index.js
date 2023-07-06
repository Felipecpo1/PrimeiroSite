
let modoLeituraOn = false

function modoLeitura() {
    if (modoLeituraOn) {
        desativaMleitura()
        modoLeituraOn = false;
    } else {
        ativaMleitura()
        modoLeituraOn = true;
    
    }
}

function ativaMleitura() {
    let botao = document.getElementById('modoLeitura');
    botao.style.backgroundColor = 'rgba(255, 255, 255, 0.263)'
    botao.style.color = 'white'
    let secao = document.getElementsByTagName('section') [0];
    secao.style.backgroundColor = 'black'
    let artigo = document.getElementById('artigo');
    artigo.style.backgroundColor = 'black'
    artigo.style.color = 'white'
    artigo.style.borderColor = 'white'
    artigo.style.boxShadow = '1px 1px 1px 1px gray'
    let link = artigo.getElementsByTagName('a')
    for (let i = 0; i < link.length; i++) {
        link[i].style.color = 'lightblue'
    }
}

function desativaMleitura() {
    let botao = document.getElementById('modoLeitura');
    botao.style.backgroundColor = ''
    botao.style.color = ''
    let secao = document.getElementsByTagName('section') [0];
    secao.style.backgroundColor = '';
    let artigo = document.getElementById('artigo');
    artigo.style.backgroundColor = '';
    artigo.style.color = '';
    artigo.style.borderColor = '';
    let link = artigo.getElementsByTagName('a')
    for (let i = 0; i < link.length; i++) {
        link[i].style.color = ''
    }
    
}