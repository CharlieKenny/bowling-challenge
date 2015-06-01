describe('Frame', function(){

  beforeEach(function() {
    frame = new Frame();
  });

  describe('player plays successful roll',function(){
    it('the points are collected',function(){
      frame.registerGo(3);
      expect(frame.remainingPins()).toEqual(7);
    });
  });

  describe('player plays second roll', function(){
    it('the points are collected', function(){
      frame.registerGo(3);
      frame.registerGo(4);
      expect(frame.remainingPins()).toEqual(3);
    });
  });

  describe('the game is over',function(){
    it('when two shots are played',function(){
      frame.registerGo(3);
      frame.registerGo(5);
      expect(frame.isOver()).toEqual(true);
    });
  });

  describe('the game is over',function(){
    it('when there are no pins left',function(){
      frame.registerGo(10);
      expect(frame.isOver()).toEqual(true);
    });
  });

  describe('the frame score',function(){
    it('can be totalled',function(){
      frame.registerGo(5);
      frame.registerGo(3);
      expect(frame.total()).toEqual(8);
    });
  });

  describe('can register', function(){
  it('a spare', function(){
    frame.registerGo(5);
    frame.registerGo(5);
    expect(frame.isSpare()).toEqual(true);
    });
  });
});


