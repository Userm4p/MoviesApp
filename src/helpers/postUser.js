import { getToken } from "./getToken";

    
 export const postUser = async (user, password) => {

    const token = await getToken();
    const userdata = {   
        username: user,
        password : password,
        request_token : token
    }
    const url = 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=b2e3a4cf7956b76b745797e1921c1ab5'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata) 
      });
      
    const res = await response.json();
      return res;

} 
    