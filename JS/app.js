const locations = [
  {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerSale: 6.3,
    salesData: [],
  },
  {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerSale: 1.2,
    salesData: [],
  },
  {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerSale: 3.7,
    salesData: [],
  },
  {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerSale: 2.3,
    salesData: [],
  },
  {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerSale: 4.6,
    salesData: [],
  }
];

function getRandomCustomers (minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
}

function generateSalesData(location) {
  const salesData = [];
  let totalCookies = 0;
  for (let hour = 6; hour <= 20; hour++) {
    const customers = getRandomCustomers (location.minCustomers, location.maxCustomers);
    const cookiesPurchased = Math.round(customers * location.avgCookiesPerSale);
    salesData.push('${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? "am" : "pm"}: ${cookiesPurchased} cookies');
    totalCookies += cookiesPurchased;
  }
  location.salesData = salesData;
  location.totalCookies = totalCookies;
}

locations.forEach(generateSalesData);

function displaySalesData () {
  const salesList = document.getElementById('sales-list');
  salesList.innerHTML = '';

  locations.forEach((location) => {
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = location.name;
    salesList.appendChild(locationHeader);

    const locationList = document.createElement('ul');
    location.salesData.forEach((data) => {
      const listItem = document.createElement('li');
      listItem.textContent = data;
      locationList.appendChild(listItem);
    });

    const totalListItem = document.createElement('li');
    totalListItem.textContent = `Total: ${location.totalCookies} cookies`;
    locationList.appendChild(totalListItem);

    salesList.appendChild(locationList);
  });
}


