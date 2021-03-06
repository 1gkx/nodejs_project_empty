import express from 'express'
import utils from './utils.js'

const app = express()
utils.setPlugins(app)

export {
    app
}