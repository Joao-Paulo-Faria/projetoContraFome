
async function cadastrar() {

    let nomeDaOng = document.querySelector("#NomeDaOng").value || $("#NomeDaOng").val();
    let nomeDaCampanha = document.querySelector("#NomeDaCampanha").value || $("#NomeDaCampanha").val();
    let descricaoDaCampanha = document.querySelector("#descricaoDaCampanha").value || $("#descricaoDaCampanha").val();
    let telefone = document.querySelector("#Telefone").value || $("#Telefone").val();
    let email = document.querySelector("#Email").value || $("#Email").val();
    let endereco = document.querySelector("#Endereco").value || $("#Endereco").val();
    let cidade = document.querySelector("#cidade").value || $("#cidade").val();
    let estado = document.querySelector("#Estado").value || $("#Estado").val();
    let pais = document.querySelector("#Pais").value || $("#Pais").val();
    // let pix = document.getElementById('Pix').value || $('Pix').val();
    // let cartaoDeCredito = document.getElementById('CartaoDeCredito').value || $('CartaoDeCredito').val();
    // let receberFisico = document.getElementById('ReceberFisico').value || $('ReceberFisico').val();
    let userlogado = JSON.parse(localStorage.getItem('usuario'));
    let cadastroCodigo = userlogado.codigo;
    let pix = false;
    let cartaoDeCredito = false;
    let receberFisico = false;
    if (document.querySelector("#Pix").value != null) {
        pix = document.querySelector("#Pix").value === 'sim' || document.querySelector("#Pix").value === 'Sim'|| document.querySelector("#Pix").value === 'SIM' ? true : false;
    };
    if (document.querySelector("#CartaoDeCredito").value != null) {
        cartaoDeCredito = document.querySelector("#CartaoDeCredito").value === 'sim' || document.querySelector("#CartaoDeCredito").value === 'Sim' || document.querySelector("#Pix").value === 'SIM' ? true : false;
    };

    if (document.querySelector("#ReceberFisico").value != null) {
        receberFisico = document.querySelector("#ReceberFisico").value === 'sim' || document.querySelector("#ReceberFisico").value === 'Sim' || document.querySelector("#Pix").value === 'SIM' ? true : false;
    };
    // alert(nomeDaOng )
    // alert(nomeDaCampanha)
    // alert(descricaoDaCampanha)
    // alert(telefone)
   
    if (nomeDaOng == "" || nomeDaCampanha== "" || descricaoDaCampanha==""  || telefone=="" || email=="" || endereco=="" || cidade=="" || estado=="" || pais=="") {

        
        // msgError.setAttribute('style', 'display:block')
        // msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        // msgSuccess.innerHTML = ''
        // msgSuccess.setAttribute('style', 'display:none')
        
        return  alert("Existe campo vazio!")
    }else {

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário, favor aguardar...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''

        http.post(`api/CadastroCampanhas`, {
            nomeDaOng,
            nomeDaCampanha,
            descricaoDaCampanha,
            telefone,
            email,
            endereco,
            cidade,
            estado,
            pais,
            pix,
            cartaoDeCredito,
            receberFisico,
            cadastroCodigo
        })

       
        setTimeout(() => {
            buscaCampanhasLogado()
            // window.location.href='Gerenciar.html'
        }, 3000)

    }

   


}

async function buscaCampanhasLogado() {
    let userlogado = JSON.parse(localStorage.getItem('usuario'))
    const response = await http.get(`api/Cadastro/${userlogado.codigo}`)
    localStorage.setItem('usuarioLogado', JSON.stringify(response.data))
    window.location.href = 'Gerenciar.html'
}

function sair() {
    location.href = 'Gerenciar.html'
}








