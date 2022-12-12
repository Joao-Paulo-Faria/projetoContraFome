if (!localStorage.getItem('usuario')) {
  alert('Você precia está logado para acessar essa página!')
  location.href = 'Login.html'
}
let userlogado = ""
function lerBD() {

  if (localStorage.getItem("usuarioLogado") === null) {
    console.log('teste')
    userlogado = JSON.parse(localStorage.getItem('usuario'))
  }
  else {
    userlogado = JSON.parse(localStorage.getItem('usuarioLogado'))
  }
  let logado = document.querySelector('#logado')
  logado.innerHTML = `Olá ${userlogado.razaoSocial}`
  desenhar()

}

window.addEventListener('load', () => {

  lerBD()
  doacao()

  //document.getElementById('CadastroRegistro').addEventListener('submit', submeter)
})
function sair() {
  localStorage.removeItem('usuario')
  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('doacao')

  location.href = 'Login.html'
}

function desenhar() {

  const tbody = document.getElementById('listaRegistrosBody')

  if (tbody) {
    tbody.innerHTML = userlogado.cadastroCampanhas.map(usuario => {

      return `<tr>
                    <td>${usuario.nomeDaCampanha}</td>
                    <td>
                            <button class='verde'  onclick="gerenci(${usuario.idCampanha})">Editar</button>
                            <button class='vermelho' onclick="delet(${usuario.idCampanha},${usuario.cadastroCodigo})">Deletar</button>
                    </td>
                </tr>`

    }).join('')
  }
}
function gerenci(id) {
  put(id)


}


async function put(id) {

  const response = await fetch(`http://joao92-001-site1.btempurl.com/api/CadastroCampanhas/${id}`, {

    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });

  const resData = await response.json();

  console.log(resData.descricaoDaCampanha);
  localStorage.setItem('edit', JSON.stringify(resData))
  window.location.href = 'EditarCampanha.html'



  // Return response data 
  return resData;

}
// let teste = Object.values().toString()



function delet(id, id2) {
  delet2(id, id2)

}
async function delet2(id, id2) {
 

  const response = await fetch(`http://joao92-001-site1.btempurl.com/api/Doacao/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const response2 = await fetch(`http://joao92-001-site1.btempurl.com/api/Cadastro/${id2}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const resData = await response2.json();
  console.log(resData.descricaoDaCampanha);
  localStorage.setItem('usuarioLogado', JSON.stringify(resData))

  window.location.href = 'Gerenciar.html'

}



// Return response data 
// //return resData;
 async function doacao() {
  const response3 = await fetch(`http://joao92-001-site1.btempurl.com/api/Doacao/DoacaoPorCampanha/${userlogado.cadastroCampanhas[0].idCampanha}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
     }
   });
  const resData = await response3.json();
  console.log(resData)
 //alert(userlogado.cadastroCampanhas.idCampanha)
 localStorage.setItem('doacao', JSON.stringify(resData));
   desenhar2(resData)
 } 

function desenhar2(doacao2) {

  const tbody = document.getElementById('listaRegistrosBody2')

  if (tbody) {
    tbody.innerHTML = doacao2.map(doacao2 => {
     let tipo=""
     if (doacao2.tipoDoacao ===1) {
      tipo ="Pix"
     }else{
      tipo ="Cartão de Crédito"
     }

      return `<tr>
                  
                  <td>Você recebeu uma nova doação de R$ ${doacao2.valor} reais no ${tipo} para a campanha ${doacao2.nomeDaCampanha}</td>
                 
               
              </tr>`

    }).join('')
  }
}
// {/* <td>
// {/* <button class='verde'  onclick="gerenci(${usuario.idCampanha})">Editar</button>
// //<button class='vermelho' onclick="delet(${usuario.idCampanha},${usuario.cadastroCodigo})">Deletar</button>
// //</td> */} */}




