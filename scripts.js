let botaocopiar = document.querySelector(".copiartexto")
let resultado = document.querySelector(".resultado")

function generateLink() {
    let number = document.form_main.number.value;
    if(number == ""){
        return
    }
    let botaocopiar = document.querySelector(".copiartexto")
    let resultadolink = document.getElementById("resultado")
    resultadolink.style.display = "flex"
   
    let message = document.form_main.message.value;
    let url = "https://wa.me/";
    let end_url = `${url}55${number}?text=${message}`;
    let urlformatada = end_url.replace(/ /g, "%20")
    document.getElementById('end_url').value = urlformatada;
    botaocopiar.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`
    resultado.style.display = "flex"
    
    
  }

  function copiarTexto() {
    let botaocopiar = document.querySelector(".copiartexto")
    let link = document.getElementById('end_url')
    navigator.clipboard.writeText(link.value);
   
    
    botaocopiar.innerHTML = "Copiado!"
    
}

console.log("att")
