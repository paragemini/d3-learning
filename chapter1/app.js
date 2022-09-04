//Selecting nth child from the nodes array-like object
//d3.selectAll('.names:nth-child(2)').text('abc');

//inserting using nth-child
d3.select('#chart').insert('div', ':nth-child(4)').attr('class', 'names').html('<strong>Jesse Pinkman</stong>');

//removing
//d3.select('#chart').select('.names:nth-child(5)').remove(); //Samriddhi Gogia is removed

//adding attributes
//.attr replcaes the class whereas classed adds a class to the paragraph
//d3.selectAll('.names').attr('class', 'big');
//d3.selectAll('.names').classed('highlight big', true);
d3.selectAll('.names:nth-child(4)')
.style('padding', '10px') // cant pass objects
