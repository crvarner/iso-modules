import express from 'express'
// const express = require('express')

const app = express()
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
	res.send("<html><body><div id='root'></div><script src='/static/js/client.bundle.js'></script></html>")
})

app.listen(3000)
