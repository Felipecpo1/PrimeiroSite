/*--------------Cores da página-------------*/
class Cor {
    constructor(body, header, a, aside, asideColor, footer, footerColor) {
    this.body = body;
    this.header = header;
    this.a = a;
    this.aside = aside;
    this.asideColor = asideColor;
    this.footer = footer;
    this.footerColor = footerColor;
    }

    mudarCor() {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = this.body;
    let header = document.getElementsByTagName('header')[0];
    header.style.backgroundColor = this.header;
    let a = header.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = this.a;
    }
    let aside = document.getElementsByTagName('aside')[0];
    aside.style.backgroundColor = this.aside;
    aside.style.color = this.asideColor;
    let footer = document.getElementsByTagName('footer')[0];
    footer.style.backgroundColor = this.footer;
    footer.style.color = this.footerColor;
    }

/*------------Azul-----------*/
}
function azul(){
    class Azul extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor) {
        super(body, header, a, aside, asideColor, footer, footerColor);
        }
    }

    let corAzul = new Azul('#000A54', '#00073D', 'white', '#00073D', 'white', '#00073D', 'white');
    corAzul.mudarCor();
}

/*-----------Branco-------------*/

function branco(){
    class Branco extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor){
            super(body, header, a, aside, asideColor, footer, footerColor)
        }
    }

    let corBranco = new Branco('#DBDBDB', '#FFFFFF', 'black','#FFFFFF','black', '#FFFFFF', 'black')
    corBranco.mudarCor()
}

/*----------Padrão------------*/

function _default(){
    class Default extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor){
            super(body, header, a, aside, asideColor, footer, footerColor)
        }
    }

    let corDefault = new Default('rgb(7, 7, 7)','black','white','black','white', 'black', 'white')

    corDefault.mudarCor()
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