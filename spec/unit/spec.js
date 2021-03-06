describe 'Pip input errors'
  it 'should return the input list if length lte 2'
    input = []
    result = pip(input)
    result.should.eql []

    input = [[1, 2]]
    result = pip(input)
    result.should.eql [[1, 2]]

    input = [[1, 2], [3, 4]]
    result = pip(input)
    result.should.eql [[1, 2], [3, 4]]
  end

  it 'should return error if input is not an Array'
    input = function(){}
    function(){ pip(input) }.should.throw_error "Argument is not an Array"

    input = 1
    function(){ pip(input) }.should.throw_error "Argument is not an Array"

    input = "come together"
    function(){ pip(input) }.should.throw_error "Argument is not an Array"
  end
end


describe 'Pip consistency'
  it 'should return consistent points'
    input = [[1, 2], [2, 3], [3, 4]];
    pip(input, 2).should.eql [[1, 2], [3, 4]]
  end

  it 'should return the input if n gte length of input'
    input = [[1, 2], [4, 34], [5, 6], [7, 9], [1, 2]]
    pip(input, 10).should.eql input
  end

  it 'should find the [3, 30] as a pip'
    input = [[1, 2], [2, 10], [3, 30], [4, 10]];
    pip(input, 3).should.include [3, 30]
  end

  it 'should return the original, because n = input.length'
    input = [[1, 2], [2, 10], [3, 30], [4, 10]];
    pip(input, 4).should.eql input
  end
end


describe 'Euclidean Distance'
  it 'should return 0 for 2 coincident points'
    input = [[1, 1], [1, 1]]
    result = euclideanDistance.apply(this, input)
    result.should.be 0 /*comparison between floats is very tricky*/
  end

  it 'should return its vertical distance for 2 points in the same x'
    input = [[0, 2], [0, 5]]
    result = euclideanDistance.apply(this, input)
    result.should.be 3
  end
end

