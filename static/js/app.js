async function buildPlot() {
    var queryUrl = `/static/data/samples.json`;
    var data = await d3.json(queryUrl);
    var ajsdf = data.samples[0].otu_id; //first one only; make loop 10 x (for loop over samples)
    var sampleValues  = data.samples.sample_values;
	var otuIds = data.samples.otu_id;  
    var otuLabels = data.samples.otu_labels;
    //var yticks = otuIds.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    //var xticks = sampleValues.slice(0, 10).reverse();
    console.log(data)
    var trace1 = [{
        type: "bar",
		mode: "bar",
		text: otuLabels,
		x: xticks,
		y: yticks,
		line: {
		    color: "#17BECF"
		}
    }];
    var layout = {
        title: `bar graph`,
    
        showlegend: false
      };
    Plotly.newPlot("bar", trace1, layout);

};    
buildPlot()

// Add bar chart with drop down menu
// <div id="bar"></div>

