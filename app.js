//Beginning of Campfire-Coffee
var pikePlaceMarket = {
  storeName: 'Pike Place Market',
  maxCustPerHour: 35,
  minCustPerHour: 14,
  hoursOfOperation: 15,
  cupsPerCust: 1.2,
  lbsPerCust: 0.34,
  sumOfCupsPerDay: 0,
  sumOfLbsPerDay: 0,
  totalLbsPerDay: 0,
  coffeeYield: 16,
  custEachHour: [],
  cupsEachHour: [],
  lbsEachHour: [],
  cupBeansEachHour: [],
  totalBeansEachHour: [],
  empPerHour: [],


  fillEachHourArr: function() {
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

    }
    this.sumOfCupsPerDay = Math.ceil(sumOfCups);
    this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  },

  fillBeansEachHourArr: function() {
    var sumOfTotalLbs = 0;
    for (value in this.custEachHour) {
      this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
      sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
    }
    this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
  },

  calcEmpReqPerHour: function() {
    for (value in this.custEachHour) {
      this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
    }
  }
};

var capitolHill = {
  storeName: 'Capitol Hill',
  maxCustPerHour: 28,
  minCustPerHour: 12,
  hoursOfOperation: 15,
  cupsPerCust: 3.2,
  lbsPerCust: 0.03,
  sumOfCupsPerDay: 0,
  sumOfLbsPerDay: 0,
  totalLbsPerDay: 0,
  coffeeYield: 16,
  custEachHour: [],
  cupsEachHour: [],
  lbsEachHour: [],
  cupBeansEachHour: [],
  totalBeansEachHour: [],
  empPerHour: [],


  fillEachHourArr: function() {
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

    }
    this.sumOfCupsPerDay = Math.ceil(sumOfCups);
    this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  },

  fillBeansEachHourArr: function() {
    var sumOfTotalLbs = 0;
    for (value in this.custEachHour) {
      this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
      sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
    }
    this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
  },

  calcEmpReqPerHour: function() {
    for (value in this.custEachHour) {
      this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
    }
  }
};

var seattlePublicLibrary = {
  storeName: 'Seattle Public Library',
  maxCustPerHour: 45,
  minCustPerHour: 9,
  hoursOfOperation: 15,
  cupsPerCust: 2.6,
  lbsPerCust: 0.02,
  sumOfCupsPerDay: 0,
  sumOfLbsPerDay: 0,
  totalLbsPerDay: 0,
  coffeeYield: 16,
  custEachHour: [],
  cupsEachHour: [],
  lbsEachHour: [],
  cupBeansEachHour: [],
  totalBeansEachHour: [],
  empPerHour: [],


  fillEachHourArr: function() {
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

    }
    this.sumOfCupsPerDay = Math.ceil(sumOfCups);
    this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  },

  fillBeansEachHourArr: function() {
    var sumOfTotalLbs = 0;
    for (value in this.custEachHour) {
      this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
      sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
    }
    this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
  },

  calcEmpReqPerHour: function() {
    for (value in this.custEachHour) {
      this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
    }
  }
};

var southLakeUnion = {
  storeName: 'South Lake Union',
  maxCustPerHour: 18,
  minCustPerHour: 5,
  hoursOfOperation: 15,
  cupsPerCust: 1.3,
  lbsPerCust: 0.04,
  sumOfCupsPerDay: 0,
  sumOfLbsPerDay: 0,
  totalLbsPerDay: 0,
  coffeeYield: 16,
  custEachHour: [],
  cupsEachHour: [],
  lbsEachHour: [],
  cupBeansEachHour: [],
  totalBeansEachHour: [],
  empPerHour: [],


  fillEachHourArr: function() {
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

    }
    this.sumOfCupsPerDay = Math.ceil(sumOfCups);
    this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  },

  fillBeansEachHourArr: function() {
    var sumOfTotalLbs = 0;
    for (value in this.custEachHour) {
      this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
      sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
    }
    this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
  },

  calcEmpReqPerHour: function() {
    for (value in this.custEachHour) {
      this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
    }
  }
};

var seaTacAirport = {
  storeName: 'Sea-Tac Airport',
  maxCustPerHour: 44,
  minCustPerHour: 28,
  hoursOfOperation: 15,
  cupsPerCust: 1.1,
  lbsPerCust: 0.41,
  sumOfCupsPerDay: 0,
  sumOfLbsPerDay: 0,
  totalLbsPerDay: 0,
  coffeeYield: 16,
  custEachHour: [],
  cupsEachHour: [],
  lbsEachHour: [],
  cupBeansEachHour: [],
  totalBeansEachHour: [],
  empPerHour: [],


  fillEachHourArr: function() {
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

    }
    this.sumOfCupsPerDay = Math.ceil(sumOfCups);
    this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  },

  fillBeansEachHourArr: function() {
    var sumOfTotalLbs = 0;
    for (value in this.custEachHour) {
      this.totalBeansEachHour.push(Math.round(((this.cupBeansEachHour[value]) + (this.lbsEachHour[value])) * 10) / 10);
      sumOfTotalLbs += ((this.cupBeansEachHour[value]) + (this.lbsEachHour[value]));
    }
    this.totalLbsPerDay = Math.ceil(sumOfTotalLbs);
  },

  calcEmpReqPerHour: function() {
    for (value in this.custEachHour) {
      this.empPerHour.push(Math.ceil(this.custEachHour[value] / 30));
    }
  }
};

var callObjectFunctions = function(objectName) {
  objectName.fillEachHourArr();
  objectName.fillBeansEachHourArr();
  objectName.calcEmpReqPerHour();
};

callObjectFunctions(pikePlaceMarket);
callObjectFunctions(capitolHill);
callObjectFunctions(seattlePublicLibrary);
callObjectFunctions(southLakeUnion);
callObjectFunctions(seaTacAirport);

var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//var objects = [pikePlaceMarket, capitolHill, seattlePublicLibrary, southLakeUnion, seaTacAirport];

var drawObject = function(objectName) {
  var adult = document.getElementById('body');
  var child = document.createElement('h1');
  child.textContent = objectName.storeName;
  adult.appendChild(child);
  for (value in time) {
    var adult2 = document.getElementById('body');
    var child2 = document.createElement('p');
    child2.textContent = time[value] + ': ' + objectName.totalBeansEachHour[value] + ' lbs [' + objectName.custEachHour[value] + ' customers, ' + objectName.cupsEachHour[value] + '(' + objectName.cupBeansEachHour[value] + ' lbs), ' + objectName.lbsEachHour[value] + ' lbs to-go]';
    adult2.appendChild(child2);
  }
};
drawObject(pikePlaceMarket);
drawObject(capitolHill);
drawObject(seattlePublicLibrary);
drawObject(southLakeUnion);
drawObject(seaTacAirport);
