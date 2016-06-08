//Beginning of Campfire-Coffee
var pikePlaceMarket = {
  maxCustPerHour: 35,
  minCustPerHour: 14,
  hoursOfOperation: 15,
  cupsPerCust: 1.2,
  lbsPerCust: 0.34,
  sumOfCupsPerDay: 0,
  sumOfLbsPerDay: 0,
  coffeeYield: 16,
  custEachHour: [],
  cupsEachHour: [],
  lbsEachHour: [],
  beansEachHour: [],


  fillEachHourArr: function() {
    var sumOfCups = 0.0;
    var sumOfLbs = 0.0;
    for (var i = 0; i < this.hoursOfOperation; i++) {
      custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custEachHour.push(custPerHour);
      this.cupsEachHour.push(Math.round((custPerHour * this.cupsPerCust) * 10) / 10);
      this.lbsEachHour.push(Math.round((custPerHour * this.lbsPerCust) * 10) / 10);
      sumOfCups += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;
      sumOfLbs += Math.round((custPerHour * this.cupsPerCust) * 10) / 10;

    }
    this.sumOfCupsPerDay = Math.ceil(sumOfCups);
    this.sumOfLbsPerDay = Math.ceil(sumOfLbs);
  },

  fillBeansEachHourArr: function() {
    var sumOfTotalLbs = 0;
    for (value in lbsEachHour) {
    }
  }
};

pikePlaceMarket.fillEachHourArr();
console.log(pikePlaceMarket.custEachHour);
console.log(pikePlaceMarket.cupsEachHour);
console.log(pikePlaceMarket.lbsEachHour);
