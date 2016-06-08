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

pikePlaceMarket.fillEachHourArr();
pikePlaceMarket.fillBeansEachHourArr();
pikePlaceMarket.calcEmpReqPerHour();
console.log(pikePlaceMarket.custEachHour);
console.log(pikePlaceMarket.cupsEachHour);
console.log(pikePlaceMarket.lbsEachHour);
console.log(pikePlaceMarket.sumOfCupsPerDay);
console.log(pikePlaceMarket.sumOfLbsPerDay);
console.log(pikePlaceMarket.totalLbsPerDay);
console.log(pikePlaceMarket.cupBeansEachHour);
console.log(pikePlaceMarket.empPerHour);

var objects = [pikePlaceMarket, capitolHill, seattlePublicLibrary, southLakeUnion, seaTacAirport];
