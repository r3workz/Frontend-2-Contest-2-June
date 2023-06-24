### Frontend 2 Contest 2 June - - 24/06/2023

# Project Overview
## Task
1. To fetch data from an api using .then and async await.
2. The link for the GET api is - https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
3. This will return an array of 10 objects, each containing a name,id,image,symbol, current_price,total_volume
4. Render all of them in the form of a table as given in the UI.
5. Handle the promise using both methods, .then and using async await.
6. Create a search button which allows the user to search and filter the data based on the input. 
7. Create a sort button which allows the user to sort the data based on market cap and percentage change.

## Relevant Links:
[Figma Link](https://www.figma.com/file/KakMh6wbYt0kgeUpp6HoPZ/Untitled?node-id=0%3A1&t=MOtLKh9GMDGIKHJw-1)

## Marking Scheme
1. Fetch data from an API using .then and async/await (15 marks) <br>Proper implementation of fetching data using .then
   Proper implementation of fetching data using async/await 
2. API endpoint and parameters (5 marks)<br>Correct use of the provided API endpoint
Proper inclusion of the required parameters in the API request 
3. Data structure and properties (10 marks)<br>Proper handling and parsing of the API response
Extraction and inclusion of the required properties (name, id, image, symbol, current_price, total_volume) from each object in the response array 
4. Rendering data in a table (20 marks)<br>Creation of a table structure using HTML
Proper inclusion of table headers
Iterating over the data array and dynamically populating the table rows and cells with the retrieved data 
5. Handling promises using .then and async/await (10 marks)<br>Proper implementation of handling promises using .then
Proper implementation of handling promises using async/await 
6. Search functionality (20 marks)<br>Proper implementation of the search functionality to filter the data based on user input
Dynamic rendering of the filtered data in the table 
7. Sort buttons for market cap and percentage change (15 marks)<br>Proper implementation of buttons to sort the data by market cap
Proper implementation of buttons to sort the data by percentage change 
8. Deployment (5 marks)