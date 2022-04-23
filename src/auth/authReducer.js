
import { types } from "../types/types"

// creacion del reducer utilizado para definir si el usuario esta autenticado
// a traves de los types login y logout

export const authReducer = (state = {}, action) => {
    switch (action.type){
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return{
                logged:false
            }
            default:
                return state;
    }
}   