/** this is how we start d3js with javascript **/
function start ()
{
    d3.select("body")
        .append("p")
        .text("Load text with d3.js! today");

    console.log(d3);
}
/**
 * Created by KC on 4/8/2016.
 */
function svgExample()
{
    var c = d3.select(".svgExample")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

    var circle = c.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("radius", 10)
        .attr("fill", "blue");
}
