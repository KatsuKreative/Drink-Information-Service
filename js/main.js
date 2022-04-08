//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink () {

    let inputDrink = document.querySelector('input').value.toLowerCase()


//allows url generation and for it to be dynamic and less breakable
    let url = new URL('/api/json/v1/1/search.php', 'https://www.thecocktaildb.com') 
    
    url.searchParams.append('s', inputDrink)

    console.log(url.toString())

    fetch (url.toString())
        
        .then(res => res.json())

        .then(data => {

            //picks a random drink from the list
            const randomDrink = data.drinks[Math.floor(Math.random()* data.drinks.length)]
            console.log(randomDrink)

            document.querySelector('h2').innerText = randomDrink.strDrink;
            document.querySelector('img').src = randomDrink.strDrinkThumb;
            document.querySelector('.instructionText').innerText = randomDrink.strInstructions;
        
            //🍍🥥🎶
            if (randomDrink.strDrink === 'Pina Colada'){
                let pinaColadaAudio = document.querySelector('.pinaColadaAudio');
                pinaColadaAudio.play()
                // pinaColadaAudio.volume = 0;
                // pinaColadaAudio.play();

                setTimeout(() => {
                    pinaColadaAudio.setAttribute('controls', true)
                    // pinaColadaAudio.classList.add('show')
                }, 5000)
            } 
        //     else if (inputDrink.includes('gin')) {

        //         let pinaColadaAudio = document.querySelector('audio');
        //         pinaColadaAudio.play()

        //         setTimeout(() => {
        //             pinaColadaAudio.setAttribute('controls', true)
        //         }, 5000)
        //     }
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
    }

    