const container = document.querySelector('container');
const button = document.querySelector('button');
const input = document.querySelector('input');
const fetchData = document.querySelector('fetchData');
document.getElementById('fetchData').addEventListener('click', () => {
    fetch('http://localhost:55--/api/data')
        .then(response => response.json())
        .then(data => {
            // Update the DOM with data
            document.getElementById('dataDisplay').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
