# getMovies

Este helper esta encargado de hacer la peticion de las peliculas a la API, recibe un parametro que debe ser valido en la api y retorne una lista de peliculas para que pueda trabajar

si la peticion es exitosa este retornara un arreglo con informacion de cada pelicula

# getMoviesById

Este helper recibe un id para hacer la peticion y retorna un arreglo con detalles de la pelicula que coincida con ese id

# getToken

Este helper se encarga de generar un nuevo token para poder hacer login

# postFavMovie

Este helper recibe el Sesion_id para poder validar el usuario, recibe el id de la pelicula para seleccionarla en la API y recibe un valor Boolean que dependiendo de si es verdadero o falso, añadira o eliminara la pelicula a favoritos

# postSesionId

Este helper recibe un token validado con el usuario y retornara el Sesion_id para hacer la autenticacion mas adelante en todas las pantallas de la aplicacion

# PostUser

Este helper recibe el token y los datos del usuario y retornara el mismo token en caso de ser exitoso, de lo contrario retornara un mensaje de error que podra ser visualizado en el componenete del login


