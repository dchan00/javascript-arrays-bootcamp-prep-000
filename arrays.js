var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(arrayN, elementE) {
    return [elementE,...arrayN]
}

function destructivelyAddElementToBeginningOfArray(arrayN, elementE) {
  return arrayN.unshift(elementE)
}

function addElementToEndOfArray(arrayN, elementE) {
  return [arrayN,...elementE]
}

function destructivelyAddElementToEndOfArray(arrayN, elementE){
  return arrayN.push(elementE)
}

function accessElementInArray(arrayN, indexI) {
  return arrayN[indexI]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayN) {
  return arrayN.shift()
}

function removeElementFromBeginningOfArray(arrayN) {
  return arrayN.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arrayN) {
  return arrayN.pop
}

function removeElementFromEndOfArray(arrayN) {
  return arrayN.slice(0, arrayN.length-1)
}
