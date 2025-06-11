const ctx = document.getElementById('graficoTitulos').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1950s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    datasets: [{
      label: 'Títulos Ganados',
      data: [5, 6, 7, 10, 4, 12, 6],
      backgroundColor: '#d50000',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: { color: '#333' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#444' },
        grid: { color: '#eee' }
      },
      x: {
        ticks: { color: '#444' },
        grid: { color: '#eee' }
      }
    }
  }
});
