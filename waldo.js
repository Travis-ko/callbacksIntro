function findWaldo(arr, found) {
  arr.forEach(function(element){
    if (element === "Waldo") {

      found(arr.indexOf(element));   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);