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
    return Math.floor(Matj.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
}

function generateSalesData(location) {
    const salesData = [];
    for (let hour = 6; hour <= 19; hour++) {
        const customers = getRandomCustomers (location.minCustomers, location.maxCustomers);
        const cookiesPurchased = Math.round(customers * location.avgCookiesPerSale);
        salesData.push('${hour}am: ${cookiesPurchased} coookies');
    }
    location.salesData = salesData;
}

locations.forEach(generateSalesData);

function displaySalesData  () {
    const salesList = document.getElementById('sales-list');
    salesList.innerHTML = '';
}