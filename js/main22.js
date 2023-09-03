function getStoun(stounName) {
  const stones = {
    Изумруд: { price: 1300, quantity: 4 },
    Бриллиант: { price: 2700, quantity: 3 },
    Сапфир: { price: 400, quantity: 7 },
    Щебень: { price: 200, quantity: 2 },
  };

  return new Promise((resolve) =>
    setTimeout(() => resolve(stones[stounName]), 500)
  );
}

//если нужно делать последовательные запросы :

async function getStounsSeq() {
  const emerald = await getStoun("Изумруд");
  const sappfir = await getStoun("Сапфир");

  console.log(emerald, sappfir);
}

getStounsSeq();

//если нужно делать паралельные запросы (последовательность не важна) запросы :

async function getStounsAll() {
  const emerald = getStoun("Изумруд");
  const sappfir = getStoun("Сапфир");

  const stones = await Promise.all([emerald, sappfir]);

  console.log(stones);
  return stones;
}

getStounsAll();
