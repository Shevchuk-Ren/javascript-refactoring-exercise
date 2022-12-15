
function processTransactions(transActions) {
    if(!validateTransactions(transActions)) {
      throw new Error("Undefined collection of transactions")
    }
    
    let txCount = {}
    
    transActions.forEach((transaction) => txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1)
    const sortArr = sortByAmountThenName(txCount);
    
    return sortArr.reduce((acc, [ key, value ]) => {
      return [...acc, `${key} ${value}`]
    }, []);
  }
  
  function sortByAmountThenName(txCount) {
    let sortedKeys = Object.keys(txCount).sort().reduce((result, key) => {
      result[key] = txCount[key];
  
      return result;
    }, {});
    
    return Object.entries(sortedKeys).sort((prev, next) => next[1] - prev[1]);
    }

 function validateTransactions(transactions) {
      return transactions !== undefined;
    }
    
module.exports = processTransactions;

// var txr = [];

// function processTransactions(transActions) {

//    txr = [];

//     if(!validateTransactions(transActions)) {
//         throw new Error("Undefined collection of transactions")
//     }

//     let txCount = {}

//     const numberOfTransactions = transActions.length;

//     for(var i = 0; i < numberOfTransactions; i++) {
//         const transaction = transActions[i];
//         txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
//     }

//     txCount = sortByAmountThenName(txCount);
    
//     // Place them back in array for returning
//     Object.keys(txCount).forEach((key, index) => {
//         txr[index] = `${key} ${txCount[key]}`;
//         {}
//     });
//     return txr;
// }

// function sortByAmountThenName(txCount) {
//     let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
//         return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
//     );

//     let sortedResults = {};
//     for(let objectKey of sortedKeys) {
//         sortedResults[objectKey] = txCount[objectKey];
//     }

//     return sortedResults;
// }


// function validateTransactions(transactions) {
//     if(transactions === undefined) {
//         return false;
//     } 

//     return true;
// }