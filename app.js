//Beginning of Campfire-Coffee
var pikePlaceMarket = {
  maxCustPerHour: 35,
  minCustPerHour: 14,
  hoursOfOperation: 15,
  
  custEachHour: [],

  fillCustEachHour: function() {
    for (var i = 0; i < this.hoursOfOperation; i++) {
      custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custEachHour.push(custPerHour);
    }
  },
};

pikePlaceMarket.fillCustEachHour();
console.log(pikePlaceMarket.custEachHour);
