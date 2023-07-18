
const locations = [
  new SalmonCookies('Seattle', 23, 65, 6.3),
  new SalmonCookies('Tokyo', 3, 24, 1.2),
  new SalmonCookies('Dubai', 11, 38, 3.7),
  new SalmonCookies('Paris', 20, 38, 2.3),
  new SalmonCookies('Lima', 2, 16, 4.6),
];

function SalmonCookies (name, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.salesData = [];
  this.totalCookies = 0;
}

SalmonCookies.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

SalmonCookies.prototype.generateSalesData = function () {
  for (let hour = 6; hour <= 20; hour++) {
    const customers = this.getRandomCustomers();
    const cookiesPurchased = Math.round(customers * this.avgCookiesPerSale);
    this.salesData.push(cookiesPurchased);
    this.totalCookies += cookiesPurchased;
  }
};

SalmonCookies.prototype.render = function () {
  const salesList = document.getElementById('sales-list');
  const locationRow = document.createElement('tr');
  locationRow.innerHTML = `<td>${this.name}</td>`;

  for (let hour = 6; hour <= 20; hour++) {
    const cookies = this.salesData[hour - 6];
    locationRow.innerHTML += `<td>${cookies}</td>`;
  }

  locationRow.innerHTML += `<td>${this.totalCookies}</td>`;
  salesList.appendChild(locationRow);
};

function renderSalesData() {
  locations.forEach(location => {
    location.generateSalesData();
    location.render();
  });
}

function renderTableHeader() {
  const table = document.getElementById('sales-table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = '<th>Location</th>';

  for (let hour = 6; hour <= 20; hour++) {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const amPm = hour < 12 ? 'am' : 'pm';
    const timeLabel = `${formattedHour} ${amPm}`;
    headerRow.innerHTML += `<th>${timeLabel}</th>`;
  }

  headerRow.innerHTML += '<th>Daily Location Total</th>';
  table.querySelector('thead').appendChild(headerRow);
}

function renderTableFooter() {
  const table = document.getElementById('sales-table');
  const footerRow = document.createElement('tr');
  footerRow.innerHTML = '<th>Totals</th>';

  for (let hour = 6; hour <= 20; hour++) {
    let hourlyTotal = 0;
    locations.forEach(location => {
      hourlyTotal += location.salesData[hour - 6];
    });
    footerRow.innerHTML += `<td>${hourlyTotal}</td>`;
  }

  const grandTotal = locations.reduce((total, location) => total + location.totalCookies, 0);
  footerRow.innerHTML += `<td>${grandTotal}</td>`;
  table.querySelector('tfoot').appendChild(footerRow);
}

renderSalesData();
renderTableHeader();
renderTableFooter();




