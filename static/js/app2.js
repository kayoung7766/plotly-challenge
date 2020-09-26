function process() {
    var dropdownMenu = d3.select("#selDataset");
    var targetId = dropdownMenu.property("value");

    console.log("id", targetId);
};

function Metadata(sample){
    d3.json("samples.json").then((data)=> {

        var metadata = data.metadata;

        var firstValueList = metadata.filter(sampleObj => sampleObj.id == sample);

        var metaResult = firstValueList[0];

        var demoCard = d3.select('#sample-metadata');
        demoCard.html("");

        Object.entries(metaResult).forEach(([key, value]) => {
            demoCard.append('h5').text(`${key}:${value}`)

        });

    })




    }



function buildCharts(idx) { 
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == idx);
        var result = resultArray[0];
        console.log(result);
        var sampleValues = result.sample_values;
        var filteredValues = sampleValues.slice(0, 10);
        filteredValues = filteredValues.reverse();
        var otuIds = result.otu_ids;
        var otuLabels = result.otu_labels;
        // //metadata variables
        var metadata = data.metadata;
        var metaArray = metadata.filter(sampleObj => sampleObj.id == idx);
        var metaResult = metaArray[0];
        var wfreq = metaResult.wfreq;
        console.log(sampleValues);
        console.log(filteredValues);
        console.log(otuIds);
        console.log(otuLabels);
        console.log(wfreq);





        //bar chart
        let trace1 = {
            x: filteredValues, 
            y: [`OTU ${otuIds[0]}`, `OTU ${otuIds[1]}`, `OTU ${otuIds[2]}`, `OTU ${otuIds[3]}`, `OTU ${otuIds[4]}`,
            `OTU ${otuIds[5]}`, `OTU ${otuIds[6]}`, `OTU ${otuIds[7]}`, `OTU ${otuIds[8]}`, `OTU ${otuIds[9]}`], //not ok
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
                color: otuIds,
                colorscale: "Earth",
            }

        }
        let bubble = [trace2];

        let layout2 = {
            title: "Frequency of Microbial Species",
            xaxis: {
                title: "OTU Id"
            },

        };

        Plotly.newPlot("bubble", bubble, layout2)


        console.log(wfreq);


        //gauge chart (Bonus) https://plotly.com/javascript/gauge-charts/
        var gauge = [
            {
                domain: { x: [0, 9], y: [0, 9] },
                value: wfreq,
                title: { text: "Frequency of Washing: Scrubs Per Week" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { 'range': [0, 9] },
                    'steps': [
                        { 'range': [0, 3], 'color': '#F6B8B8' },
                        { 'range': [3, 6], 'color': "#F5F6B8" },
                        { 'range': [6, 9], 'color': "#B8F6C4" },],
                }

            },
        ];

        var layout3 = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', gauge, layout3);
    });

}
    


function init(){
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

        // Using the first sample from the list to build the initial dashboard
        var firstSample = sampleId[0];
        buildCharts(firstSample);
        Metadata(firstSample);
    });
}

function optionChanged(newValue){
    buildCharts(newValue);
    Metadata(newValue);

}

init();

  




