function graph(){


    // clean up
    document.getElementById('target').innerHTML = '';

    // ------------- GRAPHING -------------

<div id="china-map"></div>

<script src="https://d3js.org/d3.v3.min.js"></script>
<script>
  
var width  = 1024;
var height = 768;

var svg = d3.select("#china-map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

var projection = d3.geo.mercator()
    .center([107, 31])
    .scale(700)
    .translate([width/2, height/2]);

var path = d3.geo.path()
    .projection(projection);

//var color = d3.scale.category10();

d3.json("https://gist.githubusercontent.com/zhulinpinyu/8e18d57b3b18fb74e776/raw/efbb74cfea53decb1fe7d6bf279fd351c28c4810/china_simplify.json", function(error, root) {
  if (error) return console.error(error);

  //添加提示
  var tooltip = d3.select("body")
  .append("div")
  .attr("class","tooltip")
  .style("opacity", 0);

  //绘制地图
  svg.selectAll("path")
    .data(root.features)
    .enter()
    .append("path")
    .attr("stroke","#000")
    .attr("stroke-width",0)
    .attr("fill", function(d,i){
      return "gray";
    })
    .attr("d", path )
    .on("mouseover",function(d,i){
      d3.select(this).attr("fill","#E9A825");
      tooltip.transition()
        .duration(200)
        .style("opacity", .9);

      tooltip.html(d.properties.name)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    })
    .on("mouseout",function(d,i){
      d3.select(this).attr("fill","gray");
      tooltip.transition()
             .duration(500)
             .style("opacity", 0);
    });

  //添加文字
  // svg.selectAll("text")
  //   .data(root.features)
  //   .enter()
  //   .append("text")
  //   .text(function(d){return d.properties.name})
  //   .attr({
  //     transform: function(d){return "translate("+path.centroid(d)+")";},
  //     "text-anchor": "middle",
  //     "font-size": "10px"
  //   });
});
</script>


}
