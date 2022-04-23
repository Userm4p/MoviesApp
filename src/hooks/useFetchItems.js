import { useEffect, useState } from "react"
import { getMovies } from "../helpers/getMovies";


export const useFetchItems = (param) => {

    const [state, setState] = useState({
        data: [],
        loading: true   
    });

    useEffect(( )=>{
        getMovies(param)
            .then(movies => 
            {
                
                    setState({
                        data: movies,
                        loading: false
                    });
                
                
            })
    }, []);

    return state

}
