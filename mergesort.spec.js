describe('Split Array function', function() {  
    it('is able to split an array into two halves', function() {
        expect( split([1,2,3,4,5,6]) ).toEqual( [[1,2,3],[4,5,6]] );
    });

    it('is able to split an array into two halves', function() {
        expect( split([7,1,2,3,4,5,6]) ).toEqual( [[7,1,2,3],[4,5,6]] );
    });
  });

  describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
        expect( merge([2,4,6],[1,3,5]) ).toEqual( [1,2,3,4,5,6]);
    });

    it('is able to merge two sorted arrays into one sorted array', function() {
        expect( merge([3,4,6,7],[1,2,5]) ).toEqual( [1,2,3,4,5,6,7]);
    });
  });

  describe('MergeSort function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
        expect( mergeSort([7,4,2,3,6,5,1]) ).toEqual( [1,2,3,4,5,6,7]);
    });

    it('is able to merge two sorted arrays into one sorted array', function() {
        expect( mergeSort([7,4,2,3,6,5,1,7,0,-5]) ).toEqual( [-5,0,1,2,3,4,5,6,7,7]);
    });
  });