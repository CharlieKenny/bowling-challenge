function Scoresheet() {
  this.totalFrames = [];
};

Scoresheet.prototype.addFrame = function(frame) {
  this.totalFrames.push(frame);
};

Scoresheet.prototype.totalScore = function() {
var runningTotal = 0;
for(var i = 0; i < this.totalFrames.length; i++) {
  runningTotal += this.totalFrames[i].total();
}
return runningTotal;
};

