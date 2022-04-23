    
 export const postFavMovies = async (param, id, fav) => {

    const url = param
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "media_type": "movie",
                "media_id": id,
                "favorite": fav 
        }) 
      });
    return response;
} 
    