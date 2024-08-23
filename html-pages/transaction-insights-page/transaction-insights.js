document.getElementById('transaction-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const month = document.getElementById('month').value;
    
    if (month) {
        try {
            const responses = await Promise.all([
                fetch(`/api/transactions/?month=${month}`),
                fetch(`/api/transactions/statistics?month=${month}`),
                fetch(`/api/transactions/barchart?month=${month}`),
                fetch(`/api/transactions/piechart?month=${month}`)
            ]);
            
            const [transactions, statistics, barChartData, pieChartData] = await Promise.all(responses.map(res => res.json()));

            // Process and display data
            document.getElementById('transaction-results').innerHTML = `
                <h3>Transaction List</h3>
                <pre>${JSON.stringify(transactions, null, 2)}</pre>
            `;

            // Render charts (use a charting library like Chart.js)
            // Example:
            // renderBarChart(barChartData);
            // renderPieChart(pieChartData);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
});
