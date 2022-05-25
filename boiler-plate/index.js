const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jarvis-bin:6718520z@boilerplate.qihyr.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('Hello World! jarvis')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})