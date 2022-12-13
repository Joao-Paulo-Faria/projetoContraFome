
async function cadastrar(){
 
    let nomeDaOng = document.getElementById('NomeDaOng').value || $('NomeDaOng').val();
    let nomeDaCampanha = document.getElementById('NomeDaCampanha').value || $('NomeDaCampanha').val();
    let descricaoDaCampanha = document.getElementById('descricaoDaCampanha').value || $('descricaoDaCampanha').val();
    let telefone = document.getElementById('Telefone').value || $('Telefone').val();
    let email = document.getElementById('Email').value || $('Email').val();
    let endereco = document.getElementById('Endereco').value || $('Endereco').val();
    let cidade = document.getElementById('cidade').value || $('cidade').val();
    let estado = document.getElementById('Estado').value || $('Estado').val();
    let pais = document.getElementById('Pais').value || $('Pais').val();
    let pix = document.getElementById('Pix').value || $('Pix').val();
    let cartaoDeCredito = document.getElementById('CartaoDeCredito').value || $('CartaoDeCredito').val();
    let receberFisico = document.getElementById('ReceberFisico').value || $('ReceberFisico').val();
    let userlogado = JSON.parse(localStorage.getItem('usuario'));
    let cadastroCodigo = userlogado.codigo;

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
   
        if(nomeDaOng ==" " || nomeDaCampanha ==" "){
            msgError.setAttribute('style','display:block')
            msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
            msgSuccess.innerHTML = ''
            msgSuccess.setAttribute('style','display:none')
            
        }else{
            
            msgSuccess.setAttribute('style','display:block')
            msgSuccess.innerHTML = '<strong>Cadastrando usuário, favor aguardar...</strong>'
            msgError.setAttribute('style','display:none')
            msgError.innerHTML = ''
            setTimeout(()=>{
                buscaCampanhasLogado()
               // window.location.href='Gerenciar.html'
            }, 3000)
            
        }
        
}

async function buscaCampanhasLogado(){
    let userlogado = JSON.parse(localStorage.getItem('usuario'))
    const response = await http.get(`api/Cadastro/${userlogado.codigo}`)
        localStorage.setItem('usuarioLogado', JSON.stringify(response.data))
        window.location.href='Gerenciar.html'
}

function sair(){
    location.href='Gerenciar.html'
}








