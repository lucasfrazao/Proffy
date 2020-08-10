// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)


//Executar uma 
function cloneField() {
     //Duplicar os  campos. que campo?
     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false

    //pegar os campo. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })    

    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
   
