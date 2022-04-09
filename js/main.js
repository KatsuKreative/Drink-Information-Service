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
        
            const audioFile = document.querySelector('audio')
            //🍍🥥🎶
            if (randomDrink.strDrink === 'Pina Colada'){
            
                audioFile.src = 'assets/Pina_Colada.mp3'
                
                audioFile.play()

                setTimeout(() => {
                    audioFile.setAttribute('controls', true)
                }, 5000)
            }
            else if (randomDrink.strDrink === 'Gin Swizzle') {

                audioFile.src = 'assets/Gin_And_Juice.mp3'
                
                audioFile.play()

                setTimeout(() => {
                    audioFile.setAttribute('controls', true)
                }, 5000)
            }
            else {
                audioFile.pause()
                audioFile.controls = false
            }


        })

        .catch(err => {
            console.log(`error ${err}`)
        });
    }

    