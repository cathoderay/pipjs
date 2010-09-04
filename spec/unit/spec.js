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

