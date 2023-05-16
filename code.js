const coin = {
  state: 0,
  result: [], // to save the result of display20Flips function
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    let stateVariable = Math.round(Math.random());
    this.state += stateVariable
  },
  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    if (this.state === 1) {
      return 'Heads'
    } else if (this.state === 0){
      return 'Tails'
    }
  },
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    if (this.toString() === 'Heads'){
      image.src = '/images/heads.png'
    }else{
      image.src = '/images/tails.png'

    }
    return image;
  },
};

function display20Flips() {
  const results = [];

  // to clean the body
  document.body.innerHTML = ''

  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (let flipTimes = 0 ; flipTimes < 20; flipTimes++){

    // set the result of each coin flipped to the results array
    coin.flip()
    results.push(coin.toString())

    // reset the state property before another flip's turn
    coin.state = 0
  }
  coin.result = results
  return results
}

// display the result of dosphay20Flips function
let gameContainer = document.createElement('div')
gameContainer.setAttribute('id', 'gameBox')

let resultDiv = document.createElement('div')
resultDiv.setAttribute('id', 'resultsTextBox')

resultDiv.innerText = JSON.stringify(display20Flips())

gameContainer.append(resultDiv)
document.body.append(gameContainer)

function display20Images() {
  const results = [];

  // to match the result of display20Flips function
  let flipsResult = coin.result

  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  for (let flipTimes = 0; flipTimes < flipsResult.length; flipTimes++) {

    if(flipsResult[flipTimes] === 'Heads'){
      coin.state = 1;
      coin.toString()
      results.push(coin.toHTML())
    
    } else if (flipsResult[flipTimes] === 'Tails'){
      coin.state = 0;
      coin.toString()
      results.push(coin.toHTML())
     
    }
    
  }
  return results
}

// showing up the result of display20Images matching with display20Flips

let imagesDiv = document.createElement('div')
imagesDiv.setAttribute('id', 'imagesBox')

display20Images().forEach(image => {
  imagesDiv.append(image)
})

gameContainer.append(imagesDiv)