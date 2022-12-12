let RazaoSocial = document.querySelector("#RazaoSocial")
let NomeFantasia = document.querySelector("#NomeFantasia")
let CNPJ = document.querySelector("#CNPJ")
let Fundacao = document.querySelector("#Fundacao")
let Endereco = document.querySelector("#Endereco")
let Cidade = document.querySelector("#Cidade")
let Estado = document.querySelector("#Estado")
let CEP = document.querySelector("#CEP")
let Pais = document.querySelector("#Pais")
let Telefone = document.querySelector("#Telefone")
let Email = document.querySelector("#Email")
let senha = document.querySelector("#senha")
let confirmesenha = document.querySelector("#confirmesenha")
//let labelRazaoSocial = document.querySelector("#labelRazaoSocial")
//let validRazaoSocial = false

//let labelNomeFantasia = document.querySelector("#labelNomeFantasia")
//let validNomeFantasia = false

let labelsenha = document.querySelector("#labelsenha")
let validsenha = false
let labelconfirmesenha = document.querySelector("#labelconfirmesenha")
let validconfirmesenha = false
let msgError =document.querySelector("#msgError")
let msgSuccess =document.querySelector("#msgSuccess")

//RazaoSocial.addEventListener('keyup', ()=>{
    //if(RazaoSocial.value.length<=2){
        //labelRazaoSocial.setAttribute('style','color:red')
        //labelRazaoSocial.innerHTML='Razao Social *Insira no mínimo 3 caracteres'
        //RazaoSocial.setAttribute('style','border-color:red')
        //validRazaoSocial = false   
    //} else {
        //labelRazaoSocial.setAttribute('style','color:green')
        //labelRazaoSocial.innerHTML='Razão Social'
        //RazaoSocial.setAttribute('style','border-color:green')
        //validRazaoSocial = true
    //}
//})
//RazaoSocial.addEventListener('keyup', ()=>{
    //if(RazaoSocial.value.length==0){
        //labelRazaoSocial.setAttribute('style','color:#272262')
        //labelRazaoSocial.innerHTML='Razão Social' 
        //RazaoSocial.setAttribute('style','border-color:#1e231d')
        //validRazaoSocial = false  
    //}
//})
//NomeFantasia.addEventListener('keyup', ()=>{
    //if(NomeFantasia.value.length<=4){
        //labelNomeFantasia.setAttribute('style','color:red')
        //labelNomeFantasia.innerHTML='Nome Fantasia *Insira no mínimo 5 caracteres'
        //NomeFantasia.setAttribute('style','border-color:red')
        //validNomeFantasia = false
        
        
    //} else {
       // labelNomeFantasia.setAttribute('style','color:green')
        //labelNomeFantasia.innerHTML='Nome Fantasia'
        //NomeFantasia.setAttribute('style','border-color:green')
        //validNomeFantasia = true
       
        
    //}
//})
//NomeFantasia.addEventListener('keyup', ()=>{
    //if(NomeFantasia.value.length==0){
        //labelNomeFantasia.setAttribute('style','color:#272262')
        //labelNomeFantasia.innerHTML='Nome Fantasia' 
        //NomeFantasia.setAttribute('style','border-color:#1e231d')
        //validNomeFantasia = false  
    //}
//})
senha.addEventListener('keyup', ()=>{
    if(senha.value.length<=5){
        labelsenha.setAttribute('style','color:red')
        labelsenha.innerHTML='Senha *Insira no mínimo 6  caracteres'
        senha.setAttribute('style','border-color:red')
        validsenha = false
    } else {
        labelsenha.setAttribute('style','color:green')
        labelsenha.innerHTML='Senha'
        senha.setAttribute('style','border-color:green')
        validsenha = true
    }
})
senha.addEventListener('keyup', ()=>{
    if(senha.value.length==0){
        //labelsenha.setAttribute('style','color:#272262')
        //labelsenha.innerHTML='Senha' 
        //senha.setAttribute('style','border-color:#1e231d')
        validsenha = false
    }
})
confirmesenha.addEventListener('keyup', ()=>{
    if(senha.value!=confirmesenha.value){
        labelconfirmesenha.setAttribute('style','color:red')
        labelconfirmesenha.innerHTML='Confirmar Senha *As senhas não conferem'
        confirmesenha.setAttribute('style','border-color:red')
        validconfirmesenha = false 
    } else {
        labelconfirmesenha.setAttribute('style','color:green')
        labelconfirmesenha.innerHTML='Senha'
        confirmesenha.setAttribute('style','border-color:green')
        validconfirmesenha = true
    }
})
confirmesenha.addEventListener('keyup', ()=>{
    if(confirmesenha.value.length==0){
        labelconfirmesenha.setAttribute('style','color:#272262')
        labelconfirmesenha.innerHTML='Confirmar Senha' 
        confirmesenha.setAttribute('style','border-color:#1e231d')
        validconfirmesenha = false   
    }
})

async function cadastrar(){
   
 
   // fetch('https://localhost:7272/WeatherForecast')
    //.then((response) => response.json())
    //.then((data) => console.log(data));
   if(validconfirmesenha==false){
    
    return
   }
    
    let razaoSocial = document.getElementById('RazaoSocial').value || $('RazaoSocial').val();
    let nomefantasia = document.getElementById('NomeFantasia').value || $('NomeFantasia').val();
    let cnpj = document.getElementById('CNPJ').value || $('CNPJ').val();
    let fundacao = document.getElementById('Fundacao').value || $('Fundacao').val();
    let endereco = document.getElementById('Endereco').value || $('Endereco').val();
    let cidade = document.getElementById('Cidade').value || $('Cidade').val();
    let estado = document.getElementById('Estado').value || $('Estado').val();
    let cep = document.getElementById('CEP').value || $('CEP').val();
    let pais = document.getElementById('Pais').value || $('Pais').val();
    let telefone = document.getElementById('Telefone').value || $('Telefone').val();
    let email = document.getElementById('Email').value || $('Email').val();
    let senha = document.getElementById('senha').value || $('senha').val();
 

    http.post(`api/Cadastro`, {
        razaoSocial,
        nomefantasia,
        cnpj,
        fundacao,
        endereco,
        cidade,
        estado,
        cep,
        pais,
        telefone,
        email,
        senha
    })
    .then(resultado => {
        console.log(resultado.data)
    })
    .catch(err => {
        console.log(err)
    })
    .catch((error) => console.log( error.response.request._response ) )
    
     if(cnpj !="1" && senha !="1"){
    
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
            listaUser.push(
                {
                   cnpjcad: cnpj.value,
                   senhacad: senha.value,
                   razaosocialcad: razaoSocial.value

                }
                
            )
            localStorage.setItem('listaUser',JSON.stringify(listaUser))

        msgSuccess.setAttribute('style','display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário, favor aguardar...</strong>'
        msgError.setAttribute('style','display:none')
        msgError.innerHTML = ''
        setTimeout(()=>{
            window.location.href='Login.html'
        }, 3000)
        
    } else{
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style','display:none')
    }
    
}

let btn = document.querySelector('#versenha')
btn.addEventListener('click',()=>{
let inputSenha =document.querySelector('#senha')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
} else{
    inputSenha.setAttribute('type', 'password')
}
})



let btnconfirm = document.querySelector('#verconfirmesenha')
btnconfirm.addEventListener('click',()=>{
let inputSenha =document.querySelector('#confirmesenha')
if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
} else{
    inputSenha.setAttribute('type', 'password')
}
})
 




