# reminder

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Поднять json сервер
```
json-server --watch src/db/db.json
в api.js поменять baseUrl на 'http://localhost:3000/'
в auth() заменить post на get
```
