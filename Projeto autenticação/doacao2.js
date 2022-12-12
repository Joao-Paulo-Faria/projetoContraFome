function sair() {
    localStorage.removeItem('buscar')
    location.href = 'doacao.html'
 

}
let userlogado = JSON.parse(localStorage.getItem('buscar'));
let pi = userlogado.pix
let cc = userlogado.cartaoDeCredito



mudar(pi, cc)
retornar(pi, cc)

function mudar(pi, cc) {
    if (pi === false) {

        document.querySelector(".doacao").style.display = "none";
        document.querySelector(".inputdoacao").style.display = "none";
    }
    if (cc === false) {

        document.querySelector(".inputcc").style.display = "none";
        document.querySelector(".labelcc").style.display = "none";
    }

}

function retornar(pi, cc) {
    if (pi === false && cc === false) {
        document.querySelector(".botao").style.display = "none"
        document.querySelector(".labelvalor").style.display = "none"
        document.querySelector(".textvalor").style.display = "none"
        let doar = document.querySelector(".doar")
        doar.innerHTML = `Olá, essa campanha aceita apenas doação física(no local)`
    
    }

}




async function final() {
    let userlogado2 = JSON.parse(localStorage.getItem('buscar'));
    let idCampanha = userlogado2.idCampanha
    let cadastroCampanhaidCampanha = userlogado2.idCampanha
    let valor = document.getElementById('valor').value;
    let tipoDoacao = 0
    if (!document.querySelector('input[name=forma-de-doacao]:checked')) {
        return alert("Favor marcar a forma de pagamento!")
    }

    let ver = document.querySelector('input[name=forma-de-doacao]:checked').value

    if (ver === "pix") {

        tipoDoacao = 1

    } else if (ver === "credito") {

        tipoDoacao = 2
    }

    if (valor === "") {
        return alert("Favor informar o valor")

    }
    var x;
    var r = confirm(`Deseja confirmar a doação de ${valor} reais?`);
    if (r == true) {
        x = "você Realizou a Doação!";
        alert(x)
    }
    else {
        x = "você Não realizou a Doação";
        return alert(x)
    }


    await http.post(`api/Doacao`, {
        tipoDoacao,
        valor,
        idCampanha,
        cadastroCampanhaidCampanha
    })
    localStorage.removeItem('buscar')
    window.location.href = 'doacao.html'


}



// async function buscaCampanhasLogado(){
//     let userlogado = JSON.parse(localStorage.getItem('usuario'))
//     const response = await http.get(`api/Cadastro/${userlogado.codigo}`)
//         localStorage.setItem('usuarioLogado', JSON.stringify(response.data))
//         window.location.href='Gerenciar.html'
// }