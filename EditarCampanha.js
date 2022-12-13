function atualizar() {

  let NomeDaOng = document.querySelector("#NomeDaOng");
  let descricaoDaCampanha = document.querySelector("#descricaoDaCampanha");
  let NomeDaCampanha = document.querySelector("#NomeDaCampanha");
  let Telefone = document.querySelector("#Telefone");
  let Email = document.querySelector("#Email");
  let Endereco = document.querySelector("#Endereco");
  let cidade = document.querySelector("#cidade");
  let Estado = document.querySelector("#Estado")
  let Pais = document.querySelector("#Pais")
  let Pix = document.querySelector("#Pix")
  let CartaoDeCredito = document.querySelector("#CartaoDeCredito")
  let ReceberFisico = document.querySelector("#ReceberFisico")

  let userlogado = JSON.parse(localStorage.getItem('edit'));
  let nome = userlogado.nomeDaOng;
  let descricao = userlogado.descricaoDaCampanha;
  let campanha = userlogado.nomeDaCampanha;
  let telefone = userlogado.telefone;
  let email = userlogado.email
  let endereco = userlogado.email
  let cidade2 = userlogado.cidade
  let estado = userlogado.estado
  let pais = userlogado.pais
  let pix = userlogado.pix
  if (pix==false) {
    Pix.value = "Não"
  }else{
    Pix.value = "Sim"
  }
  let cartaoDeCredito = userlogado.cartaoDeCredito
  if (cartaoDeCredito==false) {
    CartaoDeCredito.value = "Não"
  }else{
    CartaoDeCredito.value = "Sim"
  }
  let receberFisico = userlogado.receberFisico
  if (receberFisico==false) {
    ReceberFisico.value = "Não"
  }else{
    ReceberFisico.value = "Sim"
  }
 
  NomeDaOng.value = nome
  descricaoDaCampanha.value = descricao
  NomeDaCampanha.value = campanha
  Telefone.value = telefone
  Email.value = email
  Endereco.value = endereco
  cidade.value = cidade2
  Estado.value = estado
  Pais.value = pais
}
window.addEventListener('load', () => {

  atualizar()
  //document.getElementById('CadastroRegistro').addEventListener('submit', submeter)
})

function sair() {
  localStorage.removeItem('edit')
  location.href = 'Gerenciar.html'
}


async function salvar() {
  let userlogado = JSON.parse(localStorage.getItem('usuario'));
  let campanha = JSON.parse(localStorage.getItem('edit'));
  let idCampanha= campanha.idCampanha;
  let pix = false;
  let cartaoDeCredito = false;
  let receberFisico = false;
  if (document.getElementById('Pix').value != null) {
     pix = document.getElementById('Pix').value === 'sim' || document.getElementById('Pix').value === 'Sim' ? true : false; 
  };
  if (document.getElementById('CartaoDeCredito').value != null) {
    cartaoDeCredito = document.getElementById('CartaoDeCredito').value === 'sim' || document.getElementById('CartaoDeCredito').value === 'Sim' ? true : false; 
  };
 
  if (document.getElementById('ReceberFisico').value != null) {
    receberFisico = document.getElementById('ReceberFisico').value === 'sim' || document.getElementById('ReceberFisico').value === 'Sim' ? true : false; 
  };
  const postData = {
    idCampanha: campanha.idCampanha,
    nomeDaOng: document.getElementById('NomeDaOng').value || $('NomeDaOng').val(),
    nomeDaCampanha: document.getElementById('NomeDaCampanha').value || $('NomeDaCampanha').val(),
    descricaoDaCampanha: document.getElementById('descricaoDaCampanha').value || $('descricaoDaCampanha').val(),
    telefone:  document.getElementById('Telefone').value || $('Telefone').val(),
    email: document.getElementById('Email').value || $('Email').val(),
    endereco: document.getElementById('Endereco').value || $('Endereco').val(),
    cidade: document.getElementById('cidade').value || $('cidade').val(),
    estado: document.getElementById('Estado').value || $('Estado').val(),
    pais:  document.getElementById('Pais').value || $('Pais').val(),
    pix: pix,
    cartaoDeCredito: cartaoDeCredito,
    receberFisico: receberFisico,
    cadastroCodigo: userlogado.codigo
  };
 
    // setTimeout(()=>{
    //   buscaCampanhasLogado()
    // }, 3000)

  
 
    
  //const response = await http.get(`api/Cadastro/${userlogado.codigo}`)
  //localStorage.setItem('usuarioLogado', JSON.stringify(response.data))
  //localStorage.removeItem('edit')
  //window.location.href='Gerenciar.html'
  
  try {
    const response = await fetch(`http://joao92-001-site1.btempurl.com/api/CadastroCampanhas/${idCampanha}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    
    if (!response.ok) {
      const message = 'Error with Status Code: ' + response.status;
      throw new Error(message);
    }
   
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.log('Error: ' + error); 
    
  }
 
  if(NomeDaOng ==" " || NomeDaCampanha ==" "){
    msgError.setAttribute('style','display:block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style','display:none')
      
  }else{
   
    msgSuccess.setAttribute('style','display:block')
    msgSuccess.innerHTML = '<strong>Editando usuário, favor aguardar...</strong>'
    msgError.setAttribute('style','display:none')
    msgError.innerHTML = ''
   
      setTimeout(()=>{
          buscaCampanhasLogado()
          //window.location.href='Gerenciar.html'
      }, 3000)  
}
}


async function buscaCampanhasLogado(){
let userlogado = JSON.parse(localStorage.getItem('usuario'));
const response = await http.get(`api/Cadastro/${userlogado.codigo}`)
localStorage.setItem('usuarioLogado', JSON.stringify(response.data))
localStorage.removeItem('edit')
window.location.href='Gerenciar.html'
}

  









