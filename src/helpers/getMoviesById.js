export  const  getMoviesById = async (id) => {

    const url1 = `https://api.themoviedb.org/3/movie/${id}?api_key=b2e3a4cf7956b76b745797e1921c1ab5&language=en-US`
    const resp = await fetch(url1);
    const {
        adult,
        backdrop_path,
        genres,
        homepage,
        original_title,
        overview,
        production_companies,
        production_countries,
        release_date,
        tagline,
        vote_average
    } = await resp.json();
    
    const moviedata = {
        adult,
        backdrop_path,
        genres,
        homepage,
        original_title,
        overview,
        production_companies,
        production_countries,
        release_date,
        tagline,
        vote_average
    }

    const url2 = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b2e3a4cf7956b76b745797e1921c1ab5&language=en-US&page=1`
    const resp2 = await fetch(url2);
    const body = await resp2.json();
    const {results} = body;
    const reviews = results.map(review => {
        return{
            autor : review.author,
            autor_img : review.author_details.avatar_path,
            content : review.content,
            created_at : review.created_at
        }
    })

    return {moviedata, reviews};
    
  }