//Selecting nth child from the nodes array-like object
//d3.selectAll('.names:nth-child(2)').text('abc');

//inserting using nth-child
d3.select("#chart")
  .insert("div", ":nth-child(4)")
  .attr("class", "names")
  .html("<strong>Jesse Pinkman</stong>");

//removing
//d3.select('#chart').select('.names:nth-child(5)').remove(); //Samriddhi Gogia is removed

//adding attributes
//.attr replcaes the class whereas classed adds a class to the paragraph
//d3.selectAll('.names').attr('class', 'big');
//d3.selectAll('.names').classed('highlight big', true);
//d3.selectAll('.names:nth-child(4)')
//.style('padding', '10px') // cant pass objects

//const colors = ["#A7D2CB", "#F2D388", "#C98474", "#874C62"];

//d3.selectAll(".names")
//.data(colors)
//.style("background", function (d) {
// return d;
//});
const myStyles = [
  { width: 200, name: "Barot Bellingham", color: "#A57706" },
  { width: 230, name: "Hassum Harrod", color: "#BD3613" },
  { width: 220, name: "Jennifer Jerome", color: "#D11C24" },
  { width: 290, name: "Richard Tweed", color: "#C61C6F" },
  { width: 236, name: "Lorenzo Garcia", color: "#595AB7" },
  { width: 230, name: "Xhou Ta", color: "#2176C7" },
];

d3.selectAll(".names").remove();
d3.select("#chart")
  .selectAll("div")
  .data(myStyles)
  .enter()
  .append("div")
  .attr("class", "item")
  .text((d) => d.name)
  .style("background", (d) => d.color)
  .style("width", (d) => d.width + "px")
  .style("color", "white");
