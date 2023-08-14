import path = require("path")
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "sql6.freemysqlhosting.net",
    port: 3306,
    username: "sql6639285",
    password: "25HpgHSPZG",
    database: "sql6639285",
    synchronize: true,
    logging: false,
    entities: [path.resolve(__dirname, 'entity', '*.{js,ts}')],
    migrations: [],
    subscribers: [],
})
