function revenue(transactions) {
  let newObj = {};

  transactions.forEach(transaction => {
    let timestamp = new Date(transaction.timestamp).toUTCString().substring(0, 16);
    let day = timestamp.slice(0, 3);
    let month = timestamp.slice(8, 11);
    let date = timestamp.slice(5, 7);
    let year = timestamp.slice(12, 16);

    let fullDate = day.concat(` ${month} ${date} ${year}`);    
    const price = Number(transaction.price);
    
    if(!newObj[fullDate]) newObj[fullDate] = price;
    else newObj[fullDate] += price;
  });
  return newObj;
}

module.exports = revenue;