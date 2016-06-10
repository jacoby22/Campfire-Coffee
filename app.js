//Beginning of Campfire-Coffee
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
  this.coffeeYield = 16;
  this.custEachHour = [];
  this.cupsEachHour = [];
  this.lbsEachHour = [];
  this.cupBeansEachHour = [];
  this.totalBeansEachHour = [];
  this.empPerHour = [];
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
  for (value in this.custEachHour) {
    this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
  }
};

var pikePlaceMarket = new Store('Pike Place Market', 35, 14, 1.2, 0.34);
var capitolHill = new Store('Capitol Hill', 28, 12, 3.2, 0.03);
var seattlePublicLibrary = new Store('Seattle Public Library', 9, 45, 2.6, 0.02);
var southLakeUnion = new Store('South Lake Union', 5, 18, 1.3, 0.04);
var seaTacAirport = new Store('Sea-Tac Airport', 28, 44, 1.1, 0.41);



// var capitolHill = {
//   storeName: 'Capitol Hill',
//   maxCustPerHour: 28,
//   minCustPerHour: 12,
//   hoursOfOperation: 15,
//   cupsPerCust: 3.2,
//   lbsPerCust: 0.03,
//   sumOfCustPerDay: 0,
//   sumOfCupsPerDay: 0,
//   sumOfLbsPerDay: 0,
//   totalLbsPerDay: 0,
//   coffeeYield: 16,
//   custEachHour: [],
//   cupsEachHour: [],
//   lbsEachHour: [],
//   cupBeansEachHour: [],
//   totalBeansEachHour: [],
//   empPerHour: [],
//
//
//   fillEachHourArr: function() {
//     var sumOfCust = 0.0;
//     var sumOfCups = 0.0;
//     var sumOfLbs = 0.0;
//     for (var i = 0; i < this.hoursOfOperation; i++) {
//       custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.custEachHour.push(custPerHour);
//       this.cupsEachHour.push(Math.round((custPerHour * this.cupsPerCust) * 10) / 10);
//       this.lbsEachHour.push(Math.round((custPerHour * this.lbsPerCust) * 10) / 10);
//       this.cupBeansEachHour.push(Math.round((this.cupsEachHour[i] / this.coffeeYield) * 10) / 10);
//       sumOfCups += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;
//       sumOfLbs += Math.round((custPerHour * this.lbsPerCust) * 10) / 10;
//       sumOfCust += custPerHour;
//
//     }
//     this.sumOfCupsPerDay = Math.ceil(sumOfCups);
//     this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
//     this.sumOfCustPerDay = Math.ceil(sumOfCust);
//   },
//
//   fillBeansEachHourArr: function() {
//     var sumOfTotalLbs = 0;
//     for (value in this.custEachHour) {
//       this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
//       sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
//     }
//     this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
//   },
//
//   calcEmpReqPerHour: function() {
//     for (value in this.custEachHour) {
//       this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
//     }
//   }
// };
//
// var seattlePublicLibrary = {
//   storeName: 'Seattle Public Library',
//   maxCustPerHour: 45,
//   minCustPerHour: 9,
//   hoursOfOperation: 15,
//   cupsPerCust: 2.6,
//   lbsPerCust: 0.02,
//   sumOfCustPerDay: 0,
//   sumOfCupsPerDay: 0,
//   sumOfLbsPerDay: 0,
//   totalLbsPerDay: 0,
//   coffeeYield: 16,
//   custEachHour: [],
//   cupsEachHour: [],
//   lbsEachHour: [],
//   cupBeansEachHour: [],
//   totalBeansEachHour: [],
//   empPerHour: [],
//
//
//   fillEachHourArr: function() {
//     var sumOfCust = 0.0;
//     var sumOfCups = 0.0;
//     var sumOfLbs = 0.0;
//     for (var i = 0; i < this.hoursOfOperation; i++) {
//       custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.custEachHour.push(custPerHour);
//       this.cupsEachHour.push(Math.round((custPerHour * this.cupsPerCust) * 10) / 10);
//       this.lbsEachHour.push(Math.round((custPerHour * this.lbsPerCust) * 10) / 10);
//       this.cupBeansEachHour.push(Math.round((this.cupsEachHour[i] / this.coffeeYield) * 10) / 10);
//       sumOfCups += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;
//       sumOfLbs += Math.round((custPerHour * this.lbsPerCust) * 10) / 10;
//       sumOfCust += custPerHour;
//
//     }
//     this.sumOfCupsPerDay = Math.ceil(sumOfCups);
//     this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
//     this.sumOfCustPerDay = Math.ceil(sumOfCust);
//   },
//
//   fillBeansEachHourArr: function() {
//     var sumOfTotalLbs = 0;
//     for (value in this.custEachHour) {
//       this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
//       sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
//     }
//     this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
//   },
//
//   calcEmpReqPerHour: function() {
//     for (value in this.custEachHour) {
//       this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
//     }
//   }
// };
//
// var southLakeUnion = {
//   storeName: 'South Lake Union',
//   maxCustPerHour: 18,
//   minCustPerHour: 5,
//   hoursOfOperation: 15,
//   cupsPerCust: 1.3,
//   lbsPerCust: 0.04,
//   sumOfCustPerDay: 0,
//   sumOfCupsPerDay: 0,
//   sumOfLbsPerDay: 0,
//   totalLbsPerDay: 0,
//   coffeeYield: 16,
//   custEachHour: [],
//   cupsEachHour: [],
//   lbsEachHour: [],
//   cupBeansEachHour: [],
//   totalBeansEachHour: [],
//   empPerHour: [],
//
//
//   fillEachHourArr: function() {
//     var sumOfCust = 0.0;
//     var sumOfCups = 0.0;
//     var sumOfLbs = 0.0;
//     for (var i = 0; i < this.hoursOfOperation; i++) {
//       custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.custEachHour.push(custPerHour);
//       this.cupsEachHour.push(Math.round((custPerHour * this.cupsPerCust) * 10) / 10);
//       this.lbsEachHour.push(Math.round((custPerHour * this.lbsPerCust) * 10) / 10);
//       this.cupBeansEachHour.push(Math.round((this.cupsEachHour[i] / this.coffeeYield) * 10) / 10);
//       sumOfCups += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;
//       sumOfLbs += Math.round((custPerHour * this.lbsPerCust) * 10) / 10;
//       sumOfCust += custPerHour;
//
//     }
//     this.sumOfCupsPerDay = Math.ceil(sumOfCups);
//     this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
//     this.sumOfCustPerDay = Math.ceil(sumOfCust);
//   },
//
//   fillBeansEachHourArr: function() {
//     var sumOfTotalLbs = 0;
//     for (value in this.custEachHour) {
//       this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
//       sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
//     }
//     this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
//   },
//
//   calcEmpReqPerHour: function() {
//     for (value in this.custEachHour) {
//       this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
//     }
//   }
// };
//
// var seaTacAirport = {
//   storeName: 'Sea-Tac Airport',
//   maxCustPerHour: 44,
//   minCustPerHour: 28,
//   hoursOfOperation: 15,
//   cupsPerCust: 1.1,
//   lbsPerCust: 0.41,
//   sumOfCustPerDay: 0,
//   sumOfCupsPerDay: 0,
//   sumOfLbsPerDay: 0,
//   totalLbsPerDay: 0,
//   coffeeYield: 16,
//   custEachHour: [],
//   cupsEachHour: [],
//   lbsEachHour: [],
//   cupBeansEachHour: [],
//   totalBeansEachHour: [],
//   empPerHour: [],
//
//
//   fillEachHourArr: function() {
//     var sumOfCust = 0.0;
//     var sumOfCups = 0.0;
//     var sumOfLbs = 0.0;
//     for (var i = 0; i < this.hoursOfOperation; i++) {
//       custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//       this.custEachHour.push(custPerHour);
//       this.cupsEachHour.push(Math.round((custPerHour * this.cupsPerCust) * 10) / 10);
//       this.lbsEachHour.push(Math.round((custPerHour * this.lbsPerCust) * 10) / 10);
//       this.cupBeansEachHour.push(Math.round((this.cupsEachHour[i] / this.coffeeYield) * 10) / 10);
//       sumOfCups += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;
//       sumOfLbs += Math.round((custPerHour * this.lbsPerCust) * 10) / 10;
//       sumOfCust += custPerHour;
//
//     }
//     this.sumOfCupsPerDay = Math.ceil(sumOfCups);
//     this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
//     this.sumOfCustPerDay = Math.ceil(sumOfCust);
//   },
//
//   fillBeansEachHourArr: function() {
//     var sumOfTotalLbs = 0;
//     for (value in this.custEachHour) {
//       this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
//       sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
//     }
//     this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
//   },
//
//   calcEmpReqPerHour: function() {
//     for (value in this.custEachHour) {
//       this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
//     }
//   }
// // };
//
// callObjectFunctions = function(objectName) {
//   objectName.fillEachHourArr();
//   objectName.fillBeansEachHourArr();
//   objectName.calcEmpReqPerHour();
// };
//
// callObjectFunctions(pikePlaceMarket);
// callObjectFunctions(capitolHill);
// callObjectFunctions(seattlePublicLibrary);
// callObjectFunctions(southLakeUnion);
// callObjectFunctions(seaTacAirport);
//
// var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
//
// drawObject = function(objectName) {
//   var adult = document.getElementById('body');
//   var child = document.createElement('h1');
//   var child2 = document.createElement('ul');
//   child.textContent = objectName.storeName;
//   adult.appendChild(child);
//   for (value in time) {
//     var child3 = document.createElement('li');
//     child3.textContent = time[value] + ': ' + objectName.totalBeansEachHour[value] + ' lbs [' + objectName.custEachHour[value] + ' customers, ' + objectName.cupsEachHour[value] + '(' + objectName.cupBeansEachHour[value] + ' lbs), ' + objectName.lbsEachHour[value] + ' lbs to-go]';
//     adult.appendChild(child3);
//   }
//   var child4 = document.createElement('li');
//   child4.textContent = 'Total customers at ' + objectName.storeName + ': ' + objectName.sumOfCustPerDay;
//   adult.appendChild(child4);
//   var child5 = document.createElement('li');
//   child5.textContent = 'Total cups sold at ' + objectName.storeName + ': ' + objectName.sumOfCupsPerDay;
//   adult.appendChild(child5);
//   var child6 = document.createElement('li');
//
//   child6.textContent = 'Total to-go pound packages sold at ' + objectName.storeName + ': ' + objectName.sumOfLbsPerDay;
//   adult.appendChild(child6);
//   var child7 = document.createElement('li');
//
//   child7.textContent = 'Total pounds of beans needed at ' + objectName.storeName + ': ' + objectName.totalLbsPerDay;
//   adult.appendChild(child7);
//   adult.appendChild(child2);
// };
//
// drawObject(pikePlaceMarket);
// drawObject(capitolHill);
// drawObject(seattlePublicLibrary);
// drawObject(southLakeUnion);
// drawObject(seaTacAirport);
