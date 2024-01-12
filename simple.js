fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const chartItems = document.querySelectorAll('.vidget-body__chart-item p');
        const textArray = [];
        chartItems.forEach((pTag) => {
            textArray.push(pTag.textContent);
        });
        const itemDiagrammaBlocks = document.querySelectorAll('.item-diagramma');
        itemDiagrammaBlocks.forEach((block, index) => {
            block.id = textArray[index];
            const height = data[index].amount;
            block.style.height = `${height * 3}px `;
            block.setAttribute('data-value', `$${height}`);
            console.log(block.id);
            if (block.id == 'wed') {
                block.style.backgroundColor = '#76b5bc';
            }
            
        });

    })
    .catch(error => {
        console.error('Error:', error);
    });
