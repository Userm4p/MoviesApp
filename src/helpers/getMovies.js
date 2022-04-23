export  const  getMovies = async (param) => {

    const url = param
    const resp = await fetch(url);
    const {results} = await resp.json();
    const movies = results.map(movie => {
      return {
        id: movie.id,
        title: movie.original_title,
        thumbnail : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        language : movie.original_language,
        overview : movie.overview,
      }
    })
    return movies;
    
  }