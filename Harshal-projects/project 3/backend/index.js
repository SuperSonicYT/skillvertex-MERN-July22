const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const EmployeeRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/EmployeeManagement', { useNewUrlParser: true });

var EmployeeSchema = mongoose.Schema({
    EmployeeID: {
        type: String
    },
    EmployeeName: {
        type: String
    },
    EmployeeDesignation: {
        type: String
    },
    EmployeeAge: {
        type: Number
    },
    EmployeeAvailability: {
        type: Boolean
    }
});
var Employee = mongoose.model("Employee",EmployeeSchema);

app.use('/employee', EmployeeRoutes);

EmployeeRoutes.get('/',function(req, res) {
    Employee.find(function(err, Employees) {
        if (err) {
            console.log(err);
        } else {
            res.json(Employees);
        }
    });
});


EmployeeRoutes.post('/add',function(req, res) {
    let EmployeeInfo = req.body;
    
    var NewEmployee = new Employee({
        EmployeeID: EmployeeInfo.id,
        EmployeeName:EmployeeInfo.name,
        EmployeeDesignation: EmployeeInfo.desg,
        EmployeeAge: EmployeeInfo.age,
        EmployeeAvailability: EmployeeInfo.availability
    })
    console.log(EmployeeInfo);
    NewEmployee.save(function(err,Employee) {
        if(err) {
            res.status(400).send('adding new Employee failed');
        }
        else {
            res.status(200).json({Employee: 'Employee added successfully'});
        }
    });
});

app.listen(PORT, function() {
    console.log("Server is running on http://localhost:" + PORT);
});
/*
EmployeeRoutes.route('/:search').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

*/