

d3.json("samples.json").then((importedData) => {
    console.log(importedData);
    const data = importedData;
    

    let sample=  data.map(row => row.samples);
    console.log(sample);


    let sampleValues = sample[0].map(row => row.sample_values);
    console.log(sampleValues);

    // let sampleValues6 = data.map(row => row.samples.sample_values);
    // console.log(sampleValues6);

    // function unpack (rows, index) {
    //         return rows.map(function(row){
    //             return row[index];
    //         });
    //     }
    // let sample_values4 = unpack(data.samples, 2)
});

    // function unpack (rows, index) {
    //     return rows.map(function(row){
    //         return row[index];
    //     });
    // }

    // let sample_values = unpack(data.names);
    // console.log(sample_values);
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






 


