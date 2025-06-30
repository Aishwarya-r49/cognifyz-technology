const API_KEY = 'YOUR_API_KEY'; // Sign up at https://developers.giphy.com
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('gif-container');
const input = document.getElementById('searchTerm');

searchBtn.addEventListener('click', () => {
  const query = input.value.trim();
  if (!query) {
    alert('Please enter a search term!');
    return;
  }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=10&rating=g`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then(data => {
      container.innerHTML = ''; // Clear previous results
      if (!data.data.length) {
        container.textContent = 'No GIFs found.';
        return;
      }

      data.data.forEach(gif => {
        const imgUrl = gif.images.fixed_width.url;
        const title = gif.title || 'Untitled';

        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = title;

        // Optional: clicking opens full-sized GIF
        img.style.cursor = 'pointer';
        img.title = 'Click to view full size';
        img.addEventListener('click', () => {
          window.open(gif.images.original.url, '_blank');
        });

        container.appendChild(img);
      });
    })
    .catch(err => {
      console.error('Giphy fetch failed:', err);
      container.textContent = 'Sorry, something went wrong.';
    });
});
