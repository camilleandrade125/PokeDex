const api = "https://pokeapi.co/api/v2/pokemon/"


function aoclicar(){



    const pesquisaInput = document.getElementById("pesquisa-poke")
    const pokeImagem = document.getElementById("imagem-poke")
    const pokeNome = document.getElementById("nome-poke")

    let valorAtualInput = pesquisaInput.value
    let pesquisaAtualPoke = api+valorAtualInput
    fetch(pesquisaAtualPoke).then(function(resultado){
        return resultado.json()

    }).then(function(pokemon){
        
    
        
        pokeNome.textContent = `Nome: ${pokemon.name}`;
        pokeImagem.setAttribute("src", pokemon.sprites.front_default)


    }).catch(function(erro){

        alert(`Pokemon não existente ${valorAtualInput}`)
    })

}


