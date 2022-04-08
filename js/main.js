//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink () {

    let inputDrink = document.querySelector('input').value.toLowerCase()

    let url = new URL('/api/json/v1/1/search.php', 'https://www.thecocktaildb.com') 
    
    url.searchParams.append('s', inputDrink)

    console.log(url.toString())

    fetch (url.toString())
        
        .then(res => res.json())

        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink;
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('.instructionText').innerText = data.drinks[0].strInstructions;
        
            if (inputDrink === 'pina colada'){
                let pinaColadaAudio = document.querySelector('audio');
                pinaColadaAudio.play()
                // pinaColadaAudio.volume = 0;
                // pinaColadaAudio.play();

                setTimeout(() => {
                    pinaColadaAudio.setAttribute('controls', true)
                    // pinaColadaAudio.classList.add('show')
                }, 5000)
            }
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
    }

    