////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------

// INPUT array of strings

    var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]
// INPUT array of strings
var simpOrSamp = function(arrString) {

    var resultsArray = []


  for (var i = 0; i < arrString.length; i = i + 1){
      	 var newName = ""
      if (arrString[i].length < 6) {
          newName = arrString[i] + " Sampson"


      } else {
           newName = arrString[i] + " Simpson"
      }

      resultsArray.push(newName)

  }
    return resultsArray
 }

var modifiedNamesList = simpOrSamp(simpList)
console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )



////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------
var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortiesOnly = function(arrOfStrings) {
				var arrayResults = []

    for (var i = 0; i < arrOfStrings.length; i = i +1){
					var listName = arrOfStrings[i];

    		if (listName.length <= 4) {
                		arrayResults.push(listName)
      			}

    }
        return arrayResults
}


var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
console.assert( shortList.indexOf('Fred') != -1 )
console.assert( shortList.indexOf('Wayne') === -1 )
