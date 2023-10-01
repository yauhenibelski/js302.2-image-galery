export const getImgs = async (value) => {
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`);
  return res.json();
};
