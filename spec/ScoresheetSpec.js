describe('Scoresheet', function(){

  beforeEach(function() {
    scoresheet = new Scoresheet();
  });

  it('is empty by default',function(){
    expect(scoresheet.totalFrames).toEqual([]);
  });

  it('can take a frame', function(){
    scoresheet.addFrame({});
    expect(scoresheet.totalFrames).toEqual([{}]);
  });

  it('can calculate a total', function(){
    scoresheet.addFrame({total : function() {return 3} });
    scoresheet.addFrame({total : function() {return 3} });
    expect(scoresheet.totalScore()).toEqual(6);
  });
});