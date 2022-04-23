# AppRouter

Componente encargado de unir las rutas públicas y privadas de la aplicación.

Si se desea añadir una ruta publica se debe agregar el componente dentro del container PublicRoutes.

Si se desea añadir una ruta privada se debe agregar el componente dentro del container PrivateRoutes.

# DashboardRoutes 

Componente que se encarga de encarga de manejar las rutas privadas de la aplicación.

# PrivateRoutes

Componente encargado de validar si el usuario esta autenticado a través de la información global proporcionada por redux, de ser así se le permitirá acceder a las rutas privadas, de lo contrario será redireccionado a las rutas públicas.

# PublicRoutes

Componente encargado de verificar si el usuario esta autenticado, de no ser así podrá mantenerse en las rutas publicas pero al tratar de acceder a una ruta privada será redireccionado al componente Login para hacer la autenticación 
