describe('Scoresheet', function(){
  var scoresheet;
  var frameDouble;

  beforeEach(function() {
    scoresheet  = new Scoresheet();
    frameDouble = { total : function() { return 2} ,           isSpare : function() { return false } }
    spareDouble = { total : function() { return 10},isSpare : function(){return true} }
  });

  it('is empty by default',function(){
    expect(scoresheet.Frames).toEqual([]);
  });

  it('can take a frame', function(){
    scoresheet.addFrame({});
    expect(scoresheet.Frames).toEqual([{}]);
  });

  it('can calculate a total', function(){
    scoresheet.addFrame(frameDouble);
    scoresheet.addFrame(frameDouble);
    expect(scoresheet.totalScore()).toEqual(4);
  });

  it('can tot up a spare', function(){
    scoresheet.addFrame(spareDouble);
    scoresheet.addFrame(frameDouble);
    expect(scoresheet.totalScore()).toEqual(14);
  });

});