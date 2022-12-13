function sair(){
    localStorage.removeItem('buscar')
    location.href='doacao.html'

}
let userlogado = JSON.parse(localStorage.getItem('buscar'));
let NomeDaOng = document.querySelector("#NomeDaOng");


window.addEventListener('load', () => {


    document.getElementById('labelMudar1').innerHTML =`${userlogado.nomeDaOng}`
    document.getElementById('labelMudar2').innerHTML =`${userlogado.nomeDaCampanha}`
    document.getElementById('labelMudar3').innerHTML=`${userlogado.descricaoDaCampanha}`
    document.getElementById('labelMudar4').innerHTML=`${userlogado.endereco}`
    document.getElementById('labelMudar5').innerHTML=`${userlogado.estado}`
    document.getElementById('labelMudar6').innerHTML=`${userlogado.cidade}`
    document.getElementById('labelMudar7').innerHTML=`${userlogado.telefone}`
    document.getElementById('labelMudar8').innerHTML=`${userlogado.pais}`
    document.getElementById('labelMudar9').innerHTML=`${userlogado.email}`
    let pix = userlogado.pix
    if (pix==false) {
        document.getElementById('labelMudar11').innerHTML= "Não"
    }else{
        document.getElementById('labelMudar11').innerHTML= "Sim"
    }
    let cartaoDeCredito = userlogado.cartaoDeCredito
    if (cartaoDeCredito==false) {
        document.getElementById('labelMudar12').innerHTML= "Não"
    }else{
        document.getElementById('labelMudar12').innerHTML= "Sim"
    }
    let receberFisico =userlogado.receberFisico
    if (receberFisico==false) {
        document.getElementById('labelMudar10').innerHTML= "Não"
    }else{
        document.getElementById('labelMudar10').innerHTML= "Sim"
    }

})
