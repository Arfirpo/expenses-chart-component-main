import data from '../data.json' assert {type: 'json'};
console.log(data);
let chartsBarsContainer = document.querySelector('.charts__bars-container');

let values = [];

data.forEach(element =>{
    values.push(element.amount);
    chartsBarsContainer.innerHTML += `
    <li class="bars__grafics-chart">
        <div class="chart__bar--label">${element.amount}</div>
        <div class="chart__bar--day">${element.day}</div>
    </li>`
    
});

let maxValue = Math.max(...values);
let maxHeightBar = 150;
console.log(maxValue);

let bars = document.querySelectorAll('.bars__grafics-chart');
bars = [...bars];

bars.forEach(bar =>{
    let newValue = parseFloat(bar.childNodes[1].innerText);
    let actualHeight = (newValue * maxHeightBar) / maxValue;
    bar.style.height = `${actualHeight}px`;
    if(newValue == maxValue){
        bar.style.backgroundColor = 
        'hsl(186, 34%, 60%)';
    }
    bar.addEventListener('mouseover', event=>{
        if(event.target.className == 'bars__grafics-chart'){
            let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'block';
        }
    });
    bar.addEventListener('mouseout', event=>{
        if(event.target.className == 'bars__grafics-chart'){
            let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'none';
        }
    });
})