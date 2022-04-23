# useFetchItems

Este custom hook recibe dos parámetros params y get, siendo params un string y get una función, get deberá ser la función en la que se desea usar el hook y params los parámetros para que esta trabaje.

La funcionalidad de este hook es hacer una petición y si esta se hace correctamente retornar un objeto de la siguiente manera

    state = {
        loading:true/false (siendo true antes de que lleguen los datos y false cuando la petición sea exitosa)
        data:[],[????] (siendo un arreglo vacío su estado inicial y un arreglo con los datos si la petición es exitosa)
    }

se usa de la siguiente forma: 

const state = useFetchItem(params, get);
const {data, loading} = state;

# useForm

Este custom hook puede o no recibir un valor inicial y retornara un state y dos funciones de la siguiente manera

    const [Value, handleInputChange, reset] = useForm(
        {
            text:???
        }
    );

para usarlo se deben agregar las propiedades "onChange" y value al/los input del formulario y definirlos como

    onChange={handleInputChange}
    vale={text}

de esta forma el valor que se encuentre en el formulario será siempre Value.text y hará más fácil trabajar con el




