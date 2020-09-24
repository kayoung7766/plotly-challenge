function process() {
    var dropdownMenu = d3.select("#selDataset");
    var targetId = dropdownMenu.property("value");
    console.log("id", targetId);
};



d3.json("samples.json").then((importedData) => {
    console.log(importedData);
    const data = importedData;

    var dropdownMenu = d3.select("#selDataset");

    let sampleId = data.names;
    console.log(sampleId);

    // loop for dropdown
    for (i = 0; i < sampleId.length; i++) {
        var option = dropdownMenu.append('option');
        option.attr('value', sampleId[i]);
        option.text(sampleId[i]);
    };

    dropdownMenu.on("change", buildCharts);

    var targetId = dropdownMenu.property('value');
    let idx = d3.select("#selDataset").node().value;
    console.log(idx);

    function buildCharts(idx) {}
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == idx);
        var result = resultArray[0];
        console.log(result);
        var sampleValues = result.sample_values;
        var filteredValues = sampleValues.slice(0,10);
        filteredValues = filteredValues.reverse();
        var otuIds = result.otu_ids;
        var otuLabels = result.otu_labels;
        //metadata variables
        var metadata = data.metadata;
        var metaArray = metadata.filter(sampleObj => sampleObj.id == idx);
        var metaResult = metaArray[0];
        var ethnicity = metaResult.ethnicity;
        var gender = metaResult.gender;
        var age = metaResult.age;
        var bbtype = metaResult.bbtype;
        var wfreq = metaResult.wfreq;
        var ethnicity = metaResult.ethnicity;
        console.log(sampleValues);
        console.log(filteredValues);
        console.log(otuIds);
        console.log(otuLabels);
        console.log(ethnicity);
        console.log(gender);
        console.log(age);
        console.log(bbtype);
        console.log(wfreq);

        //IF TIME WITH TUTORING FIGURE OUT WHY THIS DIDN'T WORK
        // var otuIdAxis = [];
        // for (i = 0; i < otuIds.length; i++) {
        //     var otuIdAxis = otuIdAxis.push(`OTU ${otuIds[i]}`);
        // };

        // console.log(otuIdAxis);

    
        

        //bar chart
        let trace1 = {
            x: filteredValues, //ok 
            y:  [`OTU ${otuIds[0]}`, `OTU ${otuIds[1]}`, `OTU ${otuIds[2]}`,`OTU ${otuIds[3]}`, `OTU ${otuIds[4]}`,
            `OTU ${otuIds[5]}`, `OTU ${otuIds[6]}`, `OTU ${otuIds[7]}`, `OTU ${otuIds[8]}`, `OTU ${otuIds[9]}`  ], //not ok
            text: otuLabels,
            type: "bar",
            orientation: "h",
        };

        let traces = [trace1];

        let layout = {
            title: "Top 10 Microbial Species"
        };

        Plotly.newPlot("bar", traces, layout);
    // bubble chart
    let trace2 = {
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
            size: sampleValues,
            color: otuIds
        }

    }
    let bubble = [trace2];

    let layout2 = {
        title: "Frequency of Microbial Species",
        xaxis: {title: "OTU Id"
        },
            
        };

    Plotly.newPlot("bubble", bubble, layout2)
   

    console.log(wfreq);


    //gauge chart (Bonus)
    var gauge = [
        {
            domain: { x: [0, 9], y: [0, 9] },
            value: wfreq,
            title: { text: "Frequency of Washing: Scrubs Per Week" },
            type: "indicator",
            mode: "gauge+number"
        }
    ];
    
    var layout3 = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', gauge, layout3);
});
// metadata
 
    // var panelBody = d3.select("#sample-metadata").append("tbody");
    //  panelbody.selectAll("tr")
    //  .append("tr")
    //  .html( d => {`<td>${ethnicity}</td>`})
    // var trow;
    // for (var i = 0; i < 12; i++) {
    //   trow = tbody.append("tr");
    //   trow.append("td").text(dates[i]);
    //   trow.append("td").text(openPrices[i]);
    //   trow.append("td").text(highPrices[i]);
    //   trow.append("td").text(lowPrices[i]);
    //   trow.append("td").text(closingPrices[i]);
    //   trow.append("td").text(volume[i]);
    
  
    //gague chart



    });



    // function buildCharts(idx) {
    //      d3.json("samples.json").then((data) => {
    //        var samples = data.samples;
    //        var resultArray = samples.filter(sampleObj => sampleObj.id == idx);
    //        var result = resultArray[0];

    //        var otu_ids = result.otu_ids;
    //        var otu_labels = result.otu_labels;
    //        var sample_values = result.sample_values;  

    // Build bubble chart code here ...



    // let sample = data.map(row => row.samples);
    // console.log(sample);

    // let sampleValues = sample[0].map(row => row.sample_values);
    // console.log(sampleValues);

    // let otuIds = sample[0].map(row => row.otu_ids);
    // console.log(otuIds);

    // let otuLabels = sample[0].map(row => row.otu_labels);
    // console.log(otuLabels);

    // let id = d3.select("#selDataset").node().value;
    // console.log(id);

    // function buildPlot(id) {

    //     let sample = data.map(row => row.samples);
    //     console.log(sample);
    //     let sampleValues = sample[0].map(row => row.sample_values);
    //     console.log(sampleValues);

    //     let otuIds = sample[0].map(row => row.otu_ids);
    //     console.log(otuIds);

    //     let otuLabels = sample[0].map(row => row.otu_labels);
    //     console.log(otuLabels);



        //creating bar chart

    //     let trace1 = {
    //         x: otuIds,
    //         y: sampleValues,
    //         type: "bar",
    //         orientation: "h",
    //     };

    //     let traces = [trace1];

    //     let layout = {
    //         title: "Top 10 Microbial Species"
    //     };

    //     Plotly.newPlot("bar", traces, layout);
    // };












// });
    // let trace1 = {
    //     x : 
    //     type: "bar"
    // }

    // let traces = [trace1]
    // Plotly.newPlot("bar", traces)

    // d3.selectAll("#selDataset").on("change", updatePlotly);
    // // This function is called when a dropdown menu item is selected
    // function updatePlotly() {
    //     // Use D3 to select the dropdown menu
    //     var dropdownMenu = d3.select("#selDataset");
    //     console.log(dropdownMenu);
    //     // Assign the value of the dropdown menu option to a variable
    //     var dataset = dropdownMenu.property("value");
    //     console.log(dataset);
    // }

