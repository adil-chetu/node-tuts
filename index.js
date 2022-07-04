const express = require('express')
const app = express()

app.set('view engine' , 'ejs')

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age<18){
        res.send('Your are under age')
    }else{
        next()
    }
    
}
app.use(reqFilter)


app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/profil', (req, res) =>{
    res.render('profile')
})

app.listen(4500)