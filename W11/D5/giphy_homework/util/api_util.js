

export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: 'Get',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=OjoKoY4ghDu8QE9nd6HxL671J93ODF9T&limit=2`
  })
);


