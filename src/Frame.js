function Frame() {
  this.bowlCount = 0
  this.standingPins = 10
  this.startingPins = 10
};

Frame.prototype.registerGo = function(pinsDown) {
  this.bowlCount += 1;
  this.standingPins -= pinsDown;
 };

 Frame.prototype.remainingPins = function() {
   return this.standingPins;
 };


Frame.prototype.isOver = function() {
  return (this.bowlCount === 2 || this.standingPins=== 0);
};

Frame.prototype.total = function() {
  return (this.startingPins - this.standingPins); 
};









