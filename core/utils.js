import express from 'express'

const utils = {}

function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next()
}

utils.setPlugins = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json({ extended: true }))
    app.use(express.static('./public'))
    app.set('view engine', 'ejs')
    app.set('views', './views')
    app.use(ignoreFavicon)
}

export default utils