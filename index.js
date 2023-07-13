/*--------------Cores da página-------------*/
class Cor {
    constructor(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas) {
    this.body = body;
    this.header = header;
    this.a = a;
    this.aside = aside;
    this.asideColor = asideColor;
    this.footer = footer;
    this.footerColor = footerColor;
    this.ocult = ocult;
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
    let ocult =document.getElementById ('oculto')
    ocult.style.backgroundColor = this.ocult
    let bordas = document.getElementsByClassName ('menul')
        for (let i = 0; i< bordas.length; i++) {
            bordas[i].style.border = this.bordas
        }
    }
}

/*------------Azul-----------*/

function azul(){
    class Azul extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas) {
        super(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas);
        }
    }

    let corAzul = new Azul('#000A54', '#00073D', 'white', '#000A54', 'white', '#00073D', 'white', '#00073D', '2px solid #0014AB');
    corAzul.mudarCor();
    desativaMleitura()

    //armazenando escolha do usuário
    localStorage.setItem ('selecaoCor', 'azul')
}

/*-----------Branco-------------*/

function branco() {
    class Branco extends Cor {
      constructor(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas) {
        super(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas);
      }
    }
    let corBranco = new Branco('#DBDBDB', '#FFFFFF', 'black', '#FFFFFF', 'black', '#FFFFFF', 'black', 'white', '2px solid #DBDBDB');
    corBranco.mudarCor();
    desativaMleitura()

    //armazenando escolha do usuário
    localStorage.setItem ('selecaoCor', 'branco')
}

/*----------Padrão------------*/

function _default(){
    class Default extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas){
            super(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas)
        }
    }

    let corDefault = new Default('rgb(7, 7, 7)','black','white','black','white', 'black', 'white', 'black', '2px solid rgb(41, 41, 44)')

    corDefault.mudarCor()
    desativaMleitura()

    //armazenando escolha do usuário
    localStorage.setItem ('selecaoCor', 'default')
}

/* --------------modo leitura-----------------*/
function modoLeitura(){
    class ModoL extends Cor {
        constructor(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas){
            super(body, header, a, aside, asideColor, footer, footerColor, ocult, bordas)
        }
    }

    let modol = new ModoL('rgb(7, 7, 7)','black','white','black','white', 'black', 'white', 'black', '2px solid rgb(41, 41, 44)')

    modol.mudarCor()
    ativaMleitura()
    
    //armazenando escolha do usuário
    localStorage.setItem ('selecaoCor', 'modoLeitura')
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

/* Menu cor da página aparece */

clica = false

function corAparece() {
    if (clica) {
        some()
        clica = false
        
    } else {
        aparece()
        clica = true
    }
}

function aparece () {
    let main = document.getElementById('corOculto')
    main.style.display = 'block'
}

function some() {
    let main = document.getElementById('corOculto')
    main.style.display = 'none'
}

/*Evento Onload para carregar a cor selecionada em outras paginas dentro do site, sem necessidade de selecionar a opc de nv*/

window.onload = function() {
    let selecaoCor = localStorage.getItem('selecaoCor')
    if (selecaoCor) {
        if (selecaoCor == 'azul') {
            azul()
        } else if (selecaoCor == 'branco'){
            branco()
        } else if (selecaoCor == 'default'){
            _default()
        } else {
            modoLeitura()
        }
    }
}

/* ----------------------Definição de idoma do site--------------------------  */

