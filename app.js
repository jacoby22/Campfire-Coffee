//Beginning of Campfire-Coffee
var pikePlaceMarket = {
  maxCustPerHour: 35,
  minCustPerHour: 14,

  getCustPerHour: function() {
    custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
    return custPerHour;
  },
};

pikePlaceMarket.getCustPerHour();
