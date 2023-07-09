/*--------------Cores da página-------------*/
class Cor {
    constructor(body, header, a, aside, asideColor, footer, footerColor, bordas) {
    this.body = body;
    this.header = header;
    this.a = a;
    this.aside = aside;
    this.asideColor = asideColor;
    this.footer = footer;
    this.footerColor = footerColor;
    this.bordas = bordas;
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
    desativaMleitura()
}

/*-----------Branco-------------*/

function branco() {
    class Branco extends Cor {
      constructor(body, header, a, aside, asideColor, footer, footerColor) {
        super(body, header, a, aside, asideColor, footer, footerColor);
      }
    }
    let corBranco = new Branco('#DBDBDB', '#FFFFFF', 'black', '#FFFFFF', 'black', '#FFFFFF', 'black');
    corBranco.mudarCor();
    desativaMleitura()
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
    desativaMleitura()
}

/* --------------modo leitura-----------------*/
function modoLeitura(){
    class ModoL extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor){
            super(body, header, a, aside, asideColor, footer, footerColor)
        }
    }

    let modol = new ModoL('rgb(7, 7, 7)','black','white','black','white', 'black', 'white')

    modol.mudarCor()
    ativaMleitura()
    
}

function ativaMleitura() {
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
    let pisca = artigo.getElementsByTagName('div')
        for (let a = 0; a < pisca.length; a++) {
            pisca[a].style.backgroundColor = 'white'
        }
}

function desativaMleitura() {
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
    let pisca = artigo.getElementsByTagName('div')
        for (let a = 0; a < pisca.length; a++) {
            pisca[a].style.backgroundColor = ''
        }
}

/*---------Sobre Mim-------------*/

click = false 

function sobreMim() {
    if(click){
        ocultar()
        click = false
    } else {
        exibir()
        click = true
    }
}

function ocultar(){
    let ocultar = document.getElementById('oculto')
    ocultar.style.display = 'none'  
}

function exibir(){
    let exibir = document.getElementById('oculto')
    exibir.style.display = 'block'  
}
