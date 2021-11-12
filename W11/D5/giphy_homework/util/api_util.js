

export const fetchSearchGiphys = searchTerm => {
  $.ajax({
    method: 'Get',
    url: 'http://api.giphy.com/v1/gifs/search?q=${OjoKoY4ghDu8QE9nd6HxL671J93ODF9T}&api_key=dc6zaTOxFJmzC&limit=2'
  });
};


