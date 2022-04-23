

export  const  getToken = async () => {

    const url = 'https://api.themoviedb.org/3/authentication/token/new?api_key=b2e3a4cf7956b76b745797e1921c1ab5'
    const resp = await fetch(url);
    const {request_token} = await resp.json();
    return request_token;
    
  }