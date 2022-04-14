


var game = { 
    score : ['partie0','partie1','partie2','partie3'],
    price: undefined,
    attempts: 0,
} 

function getRandomArbitrary(min, max) {
     return Math.round(Math.random() * (max - min) + min);
    } 


play()

function play() {
 
    game.price = getRandomArbitrary(10, 20);

    console.log(game.price); 

    var enteredPrice = Number(prompt('Quel est le juste prix entre 10 et 20 ?'));
 
     while (enteredPrice !== game.price) {

        if (enteredPrice > game.price) {

            enteredPrice = Number(prompt("C'est -!"))

        } else { 

            enteredPrice = Number(prompt("C'est +!"))
        }
       for(var i=1; i < game.score.length; i++) 

       return game.attempts++
    }

return game.price, enteredPrice;
    
}

game.score.push(game.attempts++)

alert('congratulation! seulement ' + game.attempts +' tentatives, voulez vous ')

rejouer()

function rejouer() {
    let rejouer = confirm("Voulez-vous rejouer ?");
    if (rejouer) {
        play()
    } else {
        alert('c\'est terminé pour aujourd\'hui!')
    }
}



console.log(game.score[1] + ' pour un total de ' + game.attempts + ' aissais')


