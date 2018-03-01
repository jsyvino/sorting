describe('Bubble Sort', function(){
    beforeEach(function(){
        spyOn(window, 'swaps').and.callThrough();
        spyOn(window, 'comps').and.callThrough();
    });


    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  

    it('handles a single item array', function(){
      expect( bubbleSort([8]) ).toEqual( [8] );
    });


    it('handles a multiple item array', function(){
      expect( bubbleSort([5, 3, 8, 1, 9, 12]) ).toEqual( [1, 3, 5, 8, 9, 12] );
    });


    it('handles negative numbers and duplicates array', function(){
      expect( bubbleSort([7, -2, 9, 12, -4, 12]) ).toEqual( [-4, -2, 7, 9, 12, 12] );
    });


    it('counts swaps and compares correctly using the spyon method', function(){
        bubbleSort([5, 3, 8]);
      expect(window.swaps.calls.count()).toEqual(1);
      expect(window.comps.calls.count()).toEqual(3);  //maybe this is 2 if optimized???
    });

});
