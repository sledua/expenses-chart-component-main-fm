// Get all the p tags inside the vidget-body__chart-item block
const chartItems = document.querySelectorAll('.vidget-body__chart-item p');

// Create an array to store the collected text
const textArray = [];

// Loop through each p tag and collect the text
chartItems.forEach((pTag) => {
    textArray.push(pTag.textContent);
});

// Add an id with the values collected in the array to each item-diagramma block
const itemDiagrammaBlocks = document.querySelectorAll('.item-diagramma');
itemDiagrammaBlocks.forEach((block, index) => {
    block.id = textArray[index];
});
