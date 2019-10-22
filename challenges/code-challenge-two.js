
function revenue(transactions) {
  let newObj = {};

  transactions.map(transaction => {
    const timestamp = new Date(transaction.timestamp).toDateString();
    console.log(transaction.price);
    newObj[timestamp] = newObj[transaction.price];
  });
  console.log(newObj);
  return newObj;
}


const newTransaction = [
  {
    price: 1,
    timestamp: 1563459038296,
  },
  {
    price: 4,
    timestamp: 1562217298048,
  },
  {
    price: 2,
    timestamp: 1562715645569,
  },
  {
    price: 8,
    timestamp: 1563792873690,
  },
  {
    price: 6,
    timestamp: 1562264972598,
  }
];

revenue(newTransaction);

module.exports = revenue;