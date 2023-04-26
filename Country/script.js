const table = document.getElementById('table');

fetch('https://restcountries.com/v3.1/region/europe')
.then(res => res.json())
.then(data => {
	var i = 0;
	let row;
    data.forEach(country => {
		if (i%2 === 0){
			row = document.createElement('tr');
			table.appendChild(row);
		}
		const cell = document.createElement('td');
		cell.innerText = country.capital[0];
		row.appendChild(cell);
		
		i++;
    })
});