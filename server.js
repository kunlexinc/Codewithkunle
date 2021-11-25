const express = require('express');
const path = require('path');

const app = express();
const port  = process.env.PORT || 5000

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('build'));
    app.get('*',(req,resp)=>{
        req.sendFile(path.resolve(_dirname, 'build', 'index.html'))
    })
}

// Start the app by listening on the default Heroku port
app.listen(port,(err)=>{
    if(err) return console.log(err)
});