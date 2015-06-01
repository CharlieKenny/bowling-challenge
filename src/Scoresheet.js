function Scoresheet() {
  this.Frames = [];
};

Scoresheet.prototype.addFrame = function(frame) {
  this.Frames.push(frame);
};

Scoresheet.prototype.totalScore = function() {
var runningTotal = 0;
for(var i = 0; i < this.Frames.length; i++) {
  if (this.Frames[i] && this.Frames[i].isSpare()) { runningTotal += this.Frames[i+1].total() }
  runningTotal += this.Frames[i].total();
}
return runningTotal;
};

