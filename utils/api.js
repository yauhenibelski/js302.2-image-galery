const q = 'https://api.unsplash.com/search/photos?query=cr&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
fetch(q, {method: "GET"})
  .then((r) => r.json())
  .then((r) => console.log(r))
