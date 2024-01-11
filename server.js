
const express = require('express') //imports epxress library and assigns it to term: express//
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use("/", express.static(__dirname + '/'))

app.post('/save-task', function(req, res) {
        const taskObj = req.body
        // connect database
        // saves new task in database
        console.log('saved task: ', taskObj.task)
        res.send({savedTask: taskObj.task})

})

app.listen(3000, function () {
    console.log("app listening on port 3000")//tells the app to listen on port 3000

})

app.get('/get-tasks', function(req, res){
    const tasks = [
        "Write code",
        "Go to gym",
        "Ride bike"
    ]
    res.send({tasks: tasks})



})
