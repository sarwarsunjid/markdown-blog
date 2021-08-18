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
        //createdAt : Date.now(),
        createdAt : new Date(),
        description : 'Test description'
    },
    {
        title : 'Test Articles 2',
        //createdAt : Date.now(),
        createdAt : new Date(),
        description : 'Test description 2'
    }
]
    res.render('articles/index', { articles: articles })
})

app.listen(5000)