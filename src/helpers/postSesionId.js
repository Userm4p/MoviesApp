    
 export const postSesionId = async (validToken) => {

    const url = 'https://api.themoviedb.org/3/authentication/session/new?api_key=b2e3a4cf7956b76b745797e1921c1ab5'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(validToken) 
      });
    const {session_id} = await response.json();
    return session_id;

} 
    