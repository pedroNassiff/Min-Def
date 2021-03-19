const Sequelize = require('sequelize')
const { development } = require('./config/config.json')

//models
const UsersModel = require('./models/users')
const NoticiasModel = require('./models/noticias')
const BibliotecasModel = require('./models/bibliotecas')

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(development.database, development.username, development.password, {
    host: development.host,
    port: 3306,
    dialect: 'mysql'
});

const User = UsersModel(sequelize, Sequelize)
const Noticias = NoticiasModel(sequelize, Sequelize)
const Bibliotecas = BibliotecasModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabla users sync');
    })

module.exports = {
    User,
    Noticias,
    Bibliotecas
}

// npx sequelize-cli db:migrate --config "config/config.json" --env "development"
// npx sequelize-cli db:seed:all --config "config/config.json" --env "development"