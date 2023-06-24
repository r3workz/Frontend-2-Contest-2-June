const apiLink = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const tableBody = document.getElementById('table-body');
// const fetchButton = document.getElementById('fetch-button');
const search = document.getElementById('search');
const sortbyMC = document.getElementById('sortMCap');
const sortbyPer = document.getElementById('sortPer');

let fetchedData = [];


fetch(apiLink)
	.then(response => response.json())
	.then(data => {
		fetchedData = data.map(item => ({
			logo: item.image,
			name: item.name,
			id: item.symbol,
			currentPrice: item.current_price,
			marketCap: item.market_cap,
			percentageChange24h: item.market_cap_change_percentage_24h
		}));
		renderTable(fetchedData);
	})
	.catch(error => {
		console.error('Error:', error);
	});

async function fetchData() {
	try {
		const response = await fetch(apiLink);
		const data = await response.json();

		fetchedData = data.map(item => ({
			logo: item.image,
			name: item.name,
			id: item.symbol,
			currentPrice: item.current_price,
			marketCap: item.market_cap,
			percentageChange24h: item.market_cap_change_percentage_24h
		}));
		renderTable(fetchedData);
	} catch (error) {
		console.error('Error:', error);
	}
}

// Search functionality
search.addEventListener('input', () => {
	const searchValue = search.value.toLowerCase();
	const filteredData = fetchedData.filter(coin => coin.name.toLowerCase().includes(searchValue));
	renderTable(filteredData);
});

// Sort by Market Cap
sortbyMC.addEventListener('click', () => {
	const sortedData = [...fetchedData].sort((a, b) => a.marketCap - b.marketCap);
	renderTable(sortedData);
});

// Sort by Percentage Change
sortbyPer.addEventListener('click', () => {
	const sortedData = [...fetchedData].sort((a, b) => a.percentageChange24h - b.percentageChange24h);
	renderTable(sortedData);
});

// Render the table
function renderTable(data) {
	tableBody.innerHTML = '';

	data.forEach(item => {
		const row = document.createElement('tr');
		const logoCell = document.createElement('td');
		const logoImg = document.createElement('img');
		logoImg.src = item.logo;
		logoImg.alt = item.name;
		logoCell.appendChild(logoImg);
		row.appendChild(logoCell);


		const nameCell = document.createElement('td');
		nameCell.textContent = item.name;
		row.appendChild(nameCell);


		const idCell = document.createElement('td');
		idCell.textContent = item.id.toUpperCase();
		row.appendChild(idCell);


		const cPriceCell = document.createElement('td');
		cPriceCell.textContent = '$'+item.currentPrice;
		row.appendChild(cPriceCell);


		const perCell = document.createElement('td');
		perCell.textContent = item.percentageChange24h.toFixed(2) + '%';

		if (item.percentageChange24h < 0) {
			perCell.style.color = 'red';
		} else {
			perCell.style.color = 'green';
		}
		row.appendChild(perCell);


		const mCapCell = document.createElement('td');
		mCapCell.textContent ='Mkt Cap: $' + item.marketCap;
		row.appendChild(mCapCell);

		tableBody.appendChild(row);
	});
}