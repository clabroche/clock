function Clock() {
  this.percentageSeconds = 0
  this.percentageMinutes = 0
  this.percentageHours = 0
  this.percentageHoursOn12 = 0
  this.percentageDays = 0
  this.percentageMonth = 0
  this.percentageUniverse = 0

  this.seconds = 0
  this.minutes = 0
  this.hours = 0
  this.days = 0
  this.month = 0
  this.year = 0
  this.universe = 0

  setInterval(() => {
    this.setDate()
  }, 1000)
  this.setDate()
}

Clock.prototype.setDate = function() {
  this.date = new Date()
  this.setSecondsInfosFromDate(this.date)
  this.setMinutesInfosFromDate(this.date)
  this.setHoursInfosFromDate(this.date)
  this.setDaysInfosFromDate(this.date)
  this.setMonthInfosFromDate(this.date)
  this.setYearFromDate(this.date)
  this.setUniverseInfosFromDate()
},

/**@param {Date} date */
Clock.prototype.setSecondsInfosFromDate = function(date) {
  this.seconds = date.getSeconds()
  this.percentageSeconds = this.seconds * 100 / 60
}

/**@param {Date} date */
Clock.prototype.setMinutesInfosFromDate = function(date) {
  this.minutes = date.getMinutes()
  this.percentageMinutes = this.minutes * 100 / 60
}

/**@param {Date} date */
Clock.prototype.setHoursInfosFromDate = function(date) {
  this.hours = date.getHours() + this.percentageMinutes / 100
  this.percentageHours = this.hours * 100 / 24
  this.percentageHoursOn12 = ((this.hours - 12) * 100 / 12)
}

/**@param {Date} date */
Clock.prototype.setDaysInfosFromDate = function(date) {
  this.day = date.getDate()
  this.percentageDays = this.day * 100 / 30
}

/**@param {Date} date */
Clock.prototype.setMonthInfosFromDate = function (date) {
  this.month = date.getMonth() + 1
  this.percentageMonth = this.month * 100 / 12
}

/**@param {Date} date */
Clock.prototype.setYearFromDate = function(date) {
  this.year = date.getFullYear()
}

Clock.prototype.setUniverseInfosFromDate = function() {
  // In 2020 we are at 100seconds to midnight apocalypse
  this.universe = 100
  this.percentageUniverse = (86400 - 100) * 100 / 86400
}

module.exports = new Clock()