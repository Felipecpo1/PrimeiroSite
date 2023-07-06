/*---------------cor da página----------------*/

function azul() {
    let body = document.getElementsByTagName('body') [0]
    body.style.backgroundColor = '#000A54'
    let header = document.getElementsByTagName('header') [0]
    header.style.backgroundColor = '#00073D'
    let a = header.getElementsByTagName('a')
        for(i = 0; i < a.length; i++) {
            a[i].style.color = 'white'
        }
    let aside = document.getElementsByTagName('aside' ) [0]
    aside.style.backgroundColor = '#00073D'
    aside.style.color = 'white'
    let footer = document.getElementsByTagName('footer') [0]
    footer.style.backgroundColor = '#00073D'
    footer.style.color = 'white'
}

function branco() {
    let body = document.getElementsByTagName('body') [0]
    body.style.backgroundColor = '#DBDBDB'
    let header = document.getElementsByTagName('header') [0]
    header.style.backgroundColor = '#FFFFFF'
    let a = header.getElementsByTagName('a')
        for(i = 0; i < a.length; i++) {
            a[i].style.color = 'black'
        }
    let aside = document.getElementsByTagName('aside' ) [0]
    aside.style.backgroundColor = '#FFFFFF'
    aside.style.color = 'black'
    let footer = document.getElementsByTagName('footer') [0]
    footer.style.backgroundColor = '#FFFFFF'
    footer.style.color = 'black'
}

/* --------------modo leitura-----------------*/
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