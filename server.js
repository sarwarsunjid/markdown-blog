const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) =>{
    //res.send('Hello World')
    //res.render('index', { articles:articles })
    const articles = [{
        title : 'Test Articles',
        description : 'Test description',
        createdAt : Date.now(),
    }]
    res.render('index', { articles: articles })
})

app.listen(5000)