# Disclaimers
Debido a la naturaleza de la prueba tecnica la infomacion de conexion a la BD quedara publica cabe aclarar que esto no se realizaria en Produccion si no que se dejaria como variable de entorno y quedaria en el .env que estaria agregado al gitignore
Igualmente el cluster relacionado a esta prueba sera eliminado una vez terminado este proceso.

## Peticiones
Debido a que no habia ningun tipo de indicacion sobre como debian ser las peticiones dejo ejemplos la forma en las que se deben realizar las peticiones para que sean funcionales

## Admin
### GET
```
localhost:7124/suscribers
```

### POST
```
localhost:7124/suscribers

Body type JSON:

{
	"name" : "Ramiro",
	"email": "Ramiro@gmail.com"
}

```

### PUT
```
localhost:7124/suscribers

Body type JSON:

{
	"email": "RosaLinda@gmail.com",
	"updateInfo" : {"email":"Rosario@gmail.com"}
}

```

### DELETE
```
localhost:7124/suscribers

Body type JSON:

{
	"email":"Rosario@gmail.com"
}
```

## User
## Post

```
localhost:7124/newsuscriber

Body type JSON:

{
	"name" : "Ramiro",
	"email": "Ramiro@gmail.com"
}

```

