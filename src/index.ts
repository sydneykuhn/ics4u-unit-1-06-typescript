/**
 * The program is the classic
 * mean, median calculator
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-14
 */

import { readFileSync } from 'fs'

/**
 *
 *
 * @param {Array<number>} arrayOfIntegers array of input from set files.
 * @returns {number} mean the mean of the numbers.
 */
function calculateMean(arrayOfIntegers: number[]): number {
  // Set variables
  let mean = 0
  let sum = 0
  const arrayLength = arrayOfIntegers.length - 1

  // Process
  for (let counter = 0; counter < arrayLength; counter++) {
    sum += arrayOfIntegers[counter]
  }

  mean = sum / arrayLength

  // Return value
  return mean
}

/**
 *
 *
 * @param {Array<number>} arrayOfIntegers of input from set files
 * @returns {number} the mean of the numbers
 */
function calculateMedian(arrayOfIntegers: number[]): number {
  // Set variables
  let median = 0
  const arrayLength = arrayOfIntegers.length

  const sortedArray = arrayOfIntegers.sort(function (a, b) {
    return a - b
  })

  if (arrayLength % 2 === 0) {
    median =
      (sortedArray[arrayLength / 2] + sortedArray[arrayLength / 2 - 1]) / 2
  } else {
    median = sortedArray[(arrayLength - 1) / 2]
  }

  return median
}

// Input (creates array)
const arrayOfIntegers = []

// Input (pass in text file)
const filepath = 'set1.txt'
const file = readFileSync(filepath, 'utf8')
const newArray = file.split(/\r?\n/)

// Process (add integers to array)
for (let total = 0; total < newArray.length; total++) {
  arrayOfIntegers.push(Number(newArray[total]))
}

// Process (pop blank element)
newArray.pop()

const mean = calculateMean(arrayOfIntegers)
const median = calculateMedian(arrayOfIntegers)

console.log('Calculate mean and median.\n')
console.log(`The mean is, ${String(mean)}`)
console.log(`The median is, ${String(median)}`)

console.log('\nDone.')
