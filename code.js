const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    let stateVariable = Math.round(Math.random());
    this.state += stateVariable
    return this.state
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

  //create HTML elements necessary for the displaying 
  let gameContainer = document.createElement('div')
  gameContainer.setAttribute('id', 'gameBox')

  let resultDiv = document.createElement('div')
  resultDiv.setAttribute('id', 'resultsTextBox')


  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (let flipTimes = 0 ; flipTimes < 20; flipTimes++){

    // set the result of each coin flipped to the results array
    coin.flip()
    results.push(coin.toString())

    // displaying each result to the page as a string 
    let resultContent = document.createElement('span')
    resultContent.innerText = coin.toString()
    resultDiv.append(resultContent)
    gameContainer.append(resultDiv)
    document.body.append(gameContainer)

    // reset the state property before another flip's turn
    coin.state = 0
  }
  return results
}
display20Flips()

function display20Images() {
  const results = [];
  let gameContainer = document.querySelector('div')

  let resultDiv = document.createElement('div')
  resultDiv.setAttribute('id', 'imagesBox')

  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  for (let flipTimes = 0; flipTimes < 20; flipTimes++) {

    // set the result of each coin flipped to the results array
    coin.flip()
    results.push(coin.toString())
    let image = coin.toHTML()

    // displaying each result to the page as a string 
    resultDiv.append(image)
    gameContainer.append(resultDiv)

    // reset the state property before another flip's turn
    coin.state = 0
  }
  return results
}
display20Images()