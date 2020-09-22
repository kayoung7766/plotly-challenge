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

    dropdownMenu.on("change", process);

    var targetId = dropdownMenu.property('value');
    let idx = d3.select("#selDataset").node().value;
    console.log(idx);

    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == idx);
        var result = resultArray[0];
        console.log(result);
        var sampleValues = result.sample_values;
        var otuIds = result.otu_ids;
        var otuLabels = result.otu_labels;
        console.log(sampleValues);
        console.log(otuIds);
        console.log(otuLabels);

         let trace1 = {
            x: otuIds,
            y: sampleValues,
            type: "bar",
            orientation: "h",
        };

        let traces = [trace1];

        let layout = {
            title: "Top 10 Microbial Species"
        };

        Plotly.newPlot("bar", traces, layout);


    //pulling data for plots


    

    // function buildCharts(idx) {
    //     d3.json("samples.json").then((data) => {
    //       var samples = data.samples;
    //       var resultArray = samples.filter(sampleObj => sampleObj.id == idx);
    //       var result = resultArray[0];
    //       console.log(result);
    //       var sampleValues = result.sample_values;
    //       var otuIds = result.otu_ids;
    //       var otuLabels = result.otu_labels;
    //       console.log(sampleValues);
    //       console.log(otuIds);
    //       console.log(otuLabels);

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
       });
       

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

