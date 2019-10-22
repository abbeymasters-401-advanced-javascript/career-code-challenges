function revenue(transactions) {
  let newObj = {};

  transactions.forEach(transaction => {
    const timestamp = new Date(transaction.timestamp).toDateString();
    const price = Number(transaction.price);

    if(!newObj[timestamp]) newObj[timestamp] = price;
    else newObj[timestamp] += price;
  });
  return newObj;
}

module.exports = revenue;