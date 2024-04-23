# belly-button-challenge

## Overview
For this assignment, I was tasked with building an interactive dashboard to explore the "Belly Button Biodiversity dataset" which catologs the microbes that colonize human navels.
The dataset reveals that a minute amount of microbial species, also refered to as "operational toxonomic units," or OTUs, were present in more than 70% of people, while the rest were rare.

Dataset: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

## Building the Dashbaord
This assignment was to test my skills using the D3 library in JavaScript. I started by reading in the json file (line 2), and populating the dropdown menu with the ID numbers of the test subjects by creating a function to initialize the dashboard by fetching the JSON data (lines 15 to 17), then parsing through the JSON file to populate the dropdown menu with the sample ID's (Lines 4 to 10). Then I displayed the initial charts and metadata (lines 26 to 30)

Next I had to create a function that updated the charts based on which sample ID was selected in the dropdown menu. So I created a function called "updateCharts" (line 37) and this function monitored the selected sample ID, and updated the charts based on what it was reading (lines 38 to 74)

Finally, I created another function called "displayMetadata" to display the metadata for the selected sample in the dropdown menu. This function first selected the panel in the html file, and populated it with the values in the JSON file that correlated to the Sample ID selected in the dropdown (lines 76 to 89). Then the dashboard was initialized using the previously defined function "init" (line 91).

## Analysis
The variety of OTUs across the different subject ID's isn't that significant with certain OTUs noticably occuring in multiple subjects. Such as 1795, consistantly being within the top 5 of most subjects, as well as 944, and 922 having multiple appearences across the subjects. An important thing to note, is that this analysis shows that a small number of subjects record less OTUs than others. This can be a variety of different factors such an error in the dataset wheras data was not accuratly recorded, or those were the only OTUs found in the subject.

## Others to Credit for this Project
For this challenge, I recieved assistance from others. I utilized a tutor session with a gentlemen named Paddington who helped me populate the dropdown menu.
We also used sources such as stackoverflow and w3 schools to help refresh my knowledge on the D3 libaray and point me in the right direction.

Also, for the barchart, demographic info, and bubble chart I worked with a classmate and we helped each other in creating these visuals.
