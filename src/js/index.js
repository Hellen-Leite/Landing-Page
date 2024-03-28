const imagensPainel= document.querySelectorAll('.imagem-painel');
const setaAvancar= document.getElementById('btn-avancar');
const setaVoltar= document.getElementById('btn-voltar');

let imagemAtual=0

function esconderImagens(){
    imagensPainel.forEach(imagem=>{imagem.classList.toggle('mostrar')
    })
}

function mostrarImagens(){
    imagensPainel[imagemAtual].classList.toggle('mostrar')
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem= imagemAtual!==0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    }
        else{setaVoltar.classList.add("opacidade")}
    
    const chegouNaUltimaImagem=imagemAtual!== 0 && imagemAtual === imagensPainel.length -1
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }}


setaAvancar.addEventListener('click',()=>{
    if(imagemAtual=== imagensPainel.length -1){
        return
    }

    imagemAtual++

    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSetas()

})

setaVoltar.addEventListener('click',()=>{
    if(imagemAtual===0){
        return
    }
    imagemAtual--

    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSetas()
})