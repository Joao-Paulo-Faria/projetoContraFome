localStorage.removeItem('usuario')
let btnlog = document.querySelector('.fa-eye')
btnlog.addEventListener('click',()=>{
let inputSenha =document.querySelector('#senhalog')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
} else{
    inputSenha.setAttribute('type', 'password')
}
})


async function entrar(){
    msgCarregando.setAttribute('style','display:block')
    msgCarregando.innerHTML = '<strong>Verificando Acesso</strong>'
    let cnpj = document.getElementById('cnpj').value
    let senha = document.getElementById('senhalog').value
 

    //{ statusCode: 200, data: ... }
    const response = await http.post(`api/cadastro/entrar`, populateFormData({
        cnpj, 
        senha
    }))
    const resultado = response.data
 
    console.log({resultado})


    if(!resultado?.codigo){
       
        location.href = '/Login.html'
        return alert("Cnpj e/ou senha inválido(s)")
    }
    
        
    
    localStorage.setItem('usuario', JSON.stringify(resultado))

    

    location.href = '/Gerenciar.html'  
}

