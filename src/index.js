if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
  
  document.getElementById('refresh').addEventListener('click', fetchNews);
  
  function fetchNews() {
    document.getElementById('news').innerHTML = `
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
    `;
  
    fetch('/api/news')
      .then(response => response.json())
      .then(data => {
        const newsDiv = document.getElementById('news');
        newsDiv.innerHTML = '';
        data.forEach(news => {
          const newsItem = document.createElement('div');
          newsItem.textContent = news.title;
          newsDiv.appendChild(newsItem);
        });
      })
      .catch(() => {
        document.getElementById('news').innerHTML = `
          <div class="error">Не удалось загрузить данные</div>
          <div>Проверьте подключение и обновите страницу</div>
        `;
      });
  }
  
  fetchNews();
  