//Beginning of Campfire-Coffee
var storeNames = [];

function Store(storeName, maxCustPerHour, minCustPerHour, cupsPerCust, lbsPerCust) {
  this.storeName = storeName;
  this.maxCustPerHour = maxCustPerHour;
  this.minCustPerHour = minCustPerHour;
  this.cupsPerCust = cupsPerCust;
  this.lbsPerCust = lbsPerCust;
  this.hoursOfOperation = 15;
  this.sumOfCustPerDay = 0;
  this.sumOfCupsPerDay = 0;
  this.sumOfLbsPerDay = 0;
  this.totalLbsPerDay = 0;
  this.totalEmpPerDay = 0;
  this.coffeeYield = 16;
  this.custEachHour = [];
  this.cupsEachHour = [];
  this.lbsEachHour = [];
  this.cupBeansEachHour = [];
  this.totalBeansEachHour = [];
  this.empPerHour = [];
  storeNames.push(this);
}

Store.prototype.fillEachHourArr = function () {
  var sumOfCust = 0.0;
  var sumOfCups = 0.0;
  var sumOfLbs = 0.0;
  for (var i = 0; i < this.hoursOfOperation; i++) {
    custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
    this.custEachHour.push(custPerHour);
    this.cupsEachHour.push(Math.round((custPerHour * this.cupsPerCust) * 10) / 10);
    this.lbsEachHour.push(Math.round((custPerHour * this.lbsPerCust) * 10) / 10);
    this.cupBeansEachHour.push(Math.round((this.cupsEachHour[i] / this.coffeeYield) * 10) / 10);
    sumOfCups += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;
    sumOfLbs += Math.round((custPerHour * this.lbsPerCust) * 10) / 10;
    sumOfCust += custPerHour;
  }
  this.sumOfCupsPerDay = Math.ceil(sumOfCups);
  this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  this.sumOfCustPerDay = Math.ceil(sumOfCust);
};

Store.prototype.fillBeansEachHourArr = function () {
  var sumOfTotalLbs = 0;
  for (value in this.custEachHour) {
    this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
    sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
  }
  this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
};

Store.prototype.calcEmpReqPerHour = function () {
  var empSum = 0;
  for (value in this.custEachHour) {
    this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
    empSum += this.empPerHour[value];
  }
  this.totalEmpPerDay = empSum;
};

var pikePlaceMarket = new Store('Pike Place Market', 35, 14, 1.2, 0.34);
var capitolHill = new Store('Capitol Hill', 28, 12, 3.2, 0.03);
var seattlePublicLibrary = new Store('Seattle Public Library', 9, 45, 2.6, 0.02);
var southLakeUnion = new Store('South Lake Union', 5, 18, 1.3, 0.04);
var seaTacAirport = new Store('Sea-Tac Airport', 28, 44, 1.1, 0.41);

function runMethods(objectName) {
  objectName.fillEachHourArr();
  objectName.fillBeansEachHourArr();
  objectName.calcEmpReqPerHour();
}

runMethods(pikePlaceMarket);
runMethods(capitolHill);
runMethods(seattlePublicLibrary);
runMethods(southLakeUnion);
runMethods(seaTacAirport);

console.log(pikePlaceMarket.custEachHour);
console.log(capitolHill.custEachHour);
console.log(seattlePublicLibrary.custEachHour);
console.log(southLakeUnion.custEachHour);
console.log(seaTacAirport.custEachHour);

function Table(storeNames, tableTitle, usage) {
  this.storeNames = storeNames;
  this.tableTitle = tableTitle;
  this.usage = usage;
  this.time = ['Daily Location Total','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

}

Table.prototype.createTable = function() {
  var adult = document.getElementById('body');
  var title = document.createElement('h1');
  title.textContent = this.tableTitle;
  adult.appendChild(title);
  var table = document.createElement('table');
  table.id = 'table';
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  adult.appendChild(table);
};

Table.prototype.createHeader = function (tableID) {
  var table = document.getElementById(tableID);
  var row = document.createElement('tr');
  var headerValue = document.createElement('th');
  headerValue.textContent = 'one';
  headerValue.style.border = '1px solid black';
  row.appendChild(headerValue);
  for (var i = 0; i < this.time.length; i++) {
    headerValue = document.createElement('th');
    headerValue.textContent = this.time[i];
    headerValue.style.border = '1px solid black';
    headerValue.style.padding = '4px';
    row.appendChild(headerValue);
  }
  table.appendChild(row);
};

Table.prototype.createDataRow = function (tableID, object) {
  var table = document.getElementById(tableID);
  var row = document.createElement('tr');
  for (var i = 0; i < this.time.length + 1; i++) {
    dataValue = document.createElement('td');
    dataValue.style.border = '1px solid black';
    dataValue.style.padding = '4px';
    if (i === 0) {
      dataValue.textContent = object.storeName;
      row.appendChild(dataValue);
    }
    else if (i === 1) {
      if (this.usage === 'beans') {
        dataValue.textContent = object.sumOfLbsPerDay;
        row.appendChild(dataValue);
      }
      else {
        dataValue.textContent = object.totalEmpPerDay;
        row.appendChild(dataValue);
      }
    }
    else {
      if (this.usage === 'beans') {
        dataValue.textContent = object.totalBeansEachHour[i - 2];
        row.appendChild(dataValue);
      }
      else {
        dataValue.textContent = object.empPerHour[i - 2];
        row.appendChild(dataValue);
      }
    }
  }
  table.appendChild(row);
};

Table.prototype.createFooter = function (tableID, object) {
};

var beansTable = new Table(storeNames, 'Beans Needed By Location Each Day', 'beans');

beansTable.createTable();
beansTable.createHeader('table');

Table.prototype.parseData = function() {
  for (index in storeNames) {
    this.createDataRow('table', storeNames[index]);
  }
};
beansTable.parseData();
