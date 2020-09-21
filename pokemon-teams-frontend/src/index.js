document.addEventListener('DOMContentLoaded', event => {
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`

    {/* <div class="card" data-id="1"><p>Prince</p>
    <button data-trainer-id="1">Add Pokemon</button>
    <ul>
        <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
        <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
        <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
        <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
    </ul>
    </div> */}

    // When a user loads the page, they should see all trainers, with their current team of Pokemon.
    const trainersJson = () => {
        fetch(TRAINERS_URL)
        .then(trainers => trainers.json())
        .then(returnObj => addTrainers(returnObj))
    }
    trainersJson()

    //get <main> </main> with variable 
    
    // iterate trainers JSOn object and make li element for each json object element 
    const addTrainers = (returnObj) => {
        const mainTag = document.querySelector("main")
        const createDiv = document.createElement("div")
        const trainersList = document.createElement('ul')
        mainTag.appendChild(createDiv).appendChild(trainersList)

        
        for (trainer of returnObj) { 
            const trainerLi = document.createElement("li") //creates list item
            trainerLi.innerHTML = `
                <strong>${trainer.name}</strong>
                `
            console.log(pokemonArray(trainer))
            trainersList.appendChild(trainerLi) // appends list item to unordered list container; should be done at the end w/ trainerLi filled with whatever it needs
        }
        const pokemonArray = (trainerObj) => {
            pok
            for (i = 0; i < trainerObj.pokemons.length; ++i) {
                const trainerPokemon = trainerObj.pokemons[i]["nickname"] //& print nickname
                pokemonArray.unshift(trainerPokemon)
            }
        }
                            // for (trainer of returnObj){
                                // const trainerPokemonCounter = (trainer) => {
                                    //     let pokemonArray = []
                                    //     for (i = 0; i < trainer.pokemons.length; ++i) {
                                        //         const trainerPokemon = trainer.pokemons[i]["nickname"] //& print nickname
                                        //         pokemonArray.unshift(trainerPokemon)
                                        //     }
                                        //     return pokemonArray
                                        // }
                                        // const trainerLi = document.createElement("li")
                                    // trainersList.appendChild(trainerLi)
                                    // // trainerLi.innerText =  `hello ${pokemonArray}`
                                // }
    
    }
    


})
