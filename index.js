// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points} pts`);
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points} pts`);
//   }

//   function getScore() {
//     return score;
//   }

//   return { increaseScore, decreaseScore, getScore };
// }

// const game = createGame();

// game.increaseScore(4);
// game.increaseScore(5);
// game.decreaseScore(2);

// console.log(`The final score is ${game.getScore()} pts`);

// function sayhello() {
//   window.alert('hello');
// }

// setTimeout(sayhello, 3000);

//anonymous function

// setTimeout(() => {
//   console.log('hello');
// }, 3000);

// clear Timeout - can cancel a timeout before it triggers
//assign timout to an id and call it inside clearTimeout(id)

// fun1(func2);

// function fun1(callback) {
//   setTimeout(() => {
//     console.log('Task 1');
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log('Task 2');
//   console.log('Task 3');
//   console.log('Task 4');
// }

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve('You walk the Dog');
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = false;
      if (kitchenCleaned) {
        resolve('You clean the Kitchen');
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 1500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve('You take out the trash');
      } else {
        reject("You didn't take out the trash");
      }
    }, 1500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log('You finished all the chores');
  })
  .catch((error) => console.error(error));
