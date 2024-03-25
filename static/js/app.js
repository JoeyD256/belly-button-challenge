//Read in json file
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data){
    let datanames = data.names;
    let select = d3.select('#selDataset');
    for(var i = 0; i < datanames.length; i++) {
        var opt = datanames[i];
        select.append('option').text(datanames[i]).property('value',datanames[i])
}});

// Function to initialize the dashboard
function init() {
  // Use D3 to fetch the JSON data
  d3.json(url).then(function(data) {
      let samples = data.samples;
      let metadata = data.metadata;
      // Populate the dropdown menu with sample IDs
      let select = d3.select('#selDataset');
      samples.forEach(sample => {
          select.append('option')
              .text(sample.id)
              .property('value', sample.id);
      });
      // Display initial charts and metadata
      let initialSampleId = samples[0].id;
      updateCharts(initialSampleId);
      displayMetadata(initialSampleId);
  });
}
// Function to update charts and metadata based on selected sample ID
function optionChanged(sampleId) {
  updateCharts(sampleId);
  displayMetadata(sampleId);
}
// Function to update charts based on selected sample ID
function updateCharts(sampleId) {
  d3.json(url).then(function(data) {
      let samples = data.samples;
      let filteredSample = samples.filter(sample => sample.id == sampleId)[0];
      // Bar chart
      let barTrace = {
          x: filteredSample.sample_values.slice(0, 10).reverse(),
          y: filteredSample.otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
          text: filteredSample.otu_labels.slice(0, 10).reverse(),
          type: 'bar',
          orientation: 'h'
      };
      let barLayout = {
          title: 'Top 10 OTUs',
          xaxis: { title: 'Sample Values' },
          yaxis: { title: 'OTU IDs' }
      };
      Plotly.newPlot('bar', [barTrace], barLayout);
      // Bubble chart
      let bubbleTrace = {
          x: filteredSample.otu_ids,
          y: filteredSample.sample_values,
          text: filteredSample.otu_labels,
          mode: 'markers',
          marker: {
              size: filteredSample.sample_values,
              color: filteredSample.otu_ids,
              colorscale: 'Earth'
          }
      };
      let bubbleLayout = {
          title: 'OTU Bubble Chart',
          xaxis: { title: 'OTU IDs' },
          yaxis: { title: 'Sample Values' }
      };
      Plotly.newPlot('bubble', [bubbleTrace], bubbleLayout);
  });
}
// Function to display metadata for selected sample
function displayMetadata(sampleId) {
  d3.json(url).then(function(data) {
      let metadata = data.metadata;
      let filteredMetadata = metadata.filter(meta => meta.id == sampleId)[0];
      // Select the metadata panel
      let metadataPanel = d3.select('#sample-metadata');
      // Clear existing metadata
      metadataPanel.html('');
      // Display each key-value pair from metadata
      Object.entries(filteredMetadata).forEach(([key, value]) => {
          metadataPanel.append('p').text(`${key}: ${value}`);
      });
  });
}
// Initialize the dashboard
init();


// function bargraph(sample_id){
//     d3.json(url).then(function(data){
//         let samples = data.samples;
//         let filtered = samples.filter(Obj => Obj.id == sample_id);
//         let sample_result = filtered[0];
//         let otu_ids = sample_result.otu_ids;
//         let sample_values = sample_result.sample_values;
          
//           var trace2 = {
//             x: sample_values,
//             y: otu_ids,
//             type: 'bar'
//           };
          
//           var layout = {title: 'group'};
          
//           Plotly.newPlot('bar', trace2, layout);
//     })}

// bargraph();