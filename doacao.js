


async function buscar(id) {

    const response = await fetch(`http://joao92-001-site1.btempurl.com/api/CadastroCampanhas/${id}`, {

        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    const resData = await response.json();
    localStorage.setItem('buscar', JSON.stringify(resData))
    // Return response data 
    location.href = 'detalhe.html'
}
async function buscar2(id) {

    const response = await fetch(`http://joao92-001-site1.btempurl.com/api/CadastroCampanhas/${id}`, {

        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    const resData = await response.json();
    localStorage.setItem('buscar', JSON.stringify(resData))
    // Return response data 
    location.href = 'doacao2.html'
}

async function put() {

    const response = await fetch(`http://joao92-001-site1.btempurl.com/api/CadastroCampanhas/`, {

        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    const resData = await response.json();
    localStorage.setItem('usuario', JSON.stringify(resData))


}

async function final(){
    let userlogado
    if (localStorage.getItem("usuario")) {
        console.log('teste')

        userlogado = JSON.parse(localStorage.getItem('usuario'))
    
    }

    const tbody = document.getElementById('listaRegistrosBody')

    if (tbody) {
        tbody.innerHTML = userlogado.map(usuario => {


            return `<tr>
                    <td>${usuario.nomeDaOng}</td>
                    <td>${usuario.nomeDaCampanha}</td>
                    <td>
                            <button class='verde'  onclick="detalhe(${usuario.idCampanha})">Detalhes</button>
                            <button class='vermelho' onclick="doar(${usuario.idCampanha})">Doar</button>
                    </td>
                </tr>`
        }).join('')
    }

}

window.addEventListener('load', async () => {
    msgCarregando.setAttribute('style','display:block')
    msgCarregando.innerHTML = '<strong>Carregando Campanhas</strong>'
     await put()
     await final()
     msgCarregando.setAttribute('style','display:none')
     msgCarregando.innerHTML = '<strong>Carregando Campanhas</strong>'

    
})
async function detalhe(id) {
    await buscar(id)

}
async function doar(id) {
    await buscar2(id)

}

