const api = "http://localhost:3001/pessoas/"


function aoclicar(){

    const pesquisaInput = document.getElementById("pesquisa-poke")
    const pokeImagem = document.getElementById("imagem-poke")

    let valorAtualInput = pesquisaInput.value
    let pesquisaAtualPoke = api+valorAtualInput
    fetch(pesquisaAtualPoke).then(function(resultado){
        return resultado.json()

    }).then(function(pessoa){
        
        pokeImagem.setAttribute("src", pessoa.imagem)


    }).catch(function(erro){

        alert(`Pokemon não existente ${valorAtualInput}`)
    })

}


