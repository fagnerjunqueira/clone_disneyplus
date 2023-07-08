document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const alturaHero = document.querySelector('.hero').clientHeight

    window.addEventListener('scroll', function(){
        if(this.window.scrollY < alturaHero){
            ocultaElementosHeader()
        } else {
            exibeElementosHeader()
        }
    })
    
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function removeBotaoAtivo() { 
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
 }

function escondeTodasAbas() { 
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
function ocultaElementosHeader() { 
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() { 
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}