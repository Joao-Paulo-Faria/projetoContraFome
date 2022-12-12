 if(!localStorage.getItem('usuario')){
     alert('Você precia está logado para acessar essa página!')
     location.href='Login.html'
}
let userlogado = ""
function lerBD(){
    
    if (localStorage.getItem("usuarioLogado") === null) {
        console.log('teste')
        userlogado = JSON.parse(localStorage.getItem('usuario'))
    }
    else{
        userlogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    }
    let logado = document.querySelector('#logado')
    logado.innerHTML =`Olá ${userlogado.razaoSocial}`
    desenhar()
}



// lista = resposta.split(".");
//  lista.forEach(element => {
//      let Ong = (userlogado.cadastroCampanhas);
//      for (let i = 0; i < Ong.length; i++) {
//          let Ong2 = (userlogado.cadastroCampanhas[i]);
        
//          let ong22 = (userlogado.idCampanha[i]);
//         resposta = resposta + Ong2.descricaoDaCampanha + "." + '\n'
        
//          resposta = resposta + Ong2.descricaoDaCampanha + document.createElement(`button onclick= teste(${ong22})`) + "\n"
//      }
    
//      resp.innerText = resposta
   
   
// });


// const KYE_BD = '@usuariosestudo'


// var listaRegistros = {
//     ultimoIdGerado:0,
//     usuarios:[
//         {id:1,nome:'Cassio',fone:'81 9000-0000'},
//         {id:2,nome:'Cassio',fone:'81 9000-0000'},
//         {id:3,nome:'Cassio',fone:'81 9000-0000'}
//     ]

// }
//function gravarBD(){
    //localStorage.setItem(KYE_BD,JSON.stringify(listaRegistros))
//


function desenhar(){
   
    const tbody = document.getElementById('listaRegistrosBody')
    
    if(tbody){
        tbody.innerHTML = userlogado.cadastroCampanhas.map(usuario =>{

            return `<tr>
                    <td>${usuario.descricaoDaCampanha}</td>
                    <td>
                            <button  onclick="gerenci()">Editar</button>
                            <button class='vermelho'>Deletar</button>
                    </td>
                </tr>`

        } ).join('')
    }
} 
function gerenci(){
 
    location.href='EditarCampanha.html'
}


// function insert(nome,fone){
//     const id = listaRegistros.ultimoIdGerado + 1;
//     listaRegistros.usuarios.push({
//         id,nome,fone
//     })
//     gravarBD()
//     desenhar()
//     visualizar('lista')

// }

    
function sair(){
    localStorage.removeItem('usuario')
    localStorage.removeItem('usuarioLogado')
    
    location.href='Login.html'
}
window.addEventListener('load', () => {
  
    lerBD()
    //document.getElementById('CadastroRegistro').addEventListener('submit', submeter)
})

// function visualizar(pagina){
//     document.body.setAttribute('page',pagina)
//     if(pagina ==='cadastro'){
//         document.getElementById('nome').focus()
//     }
    
// }

// function submeter(e){
//     e.preventDefault()
//     const data ={
//         id: document.getElementById('id').value,
//         nome: document.getElementById('nome').value,
//         fone: document.getElementById('fone').value,
//     }
//     if(data.id){
//         edit(...data)
//     }else{
//         insert(data.nome, data.fone)
//     }

// }




// async function teste(id){
//   const response = http.get(`api/CadastroCampanhas${id}`)
// }

