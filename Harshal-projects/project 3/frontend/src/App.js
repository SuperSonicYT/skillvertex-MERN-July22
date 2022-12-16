import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from './components/Modal';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      availableEmployees:"",
      show:false
    };
  }

  showModal = e => {
    this.setState({show:true})
    console.log(this.state);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/employee/')
      .then(response => {
        this.setState({  employees: response.data });
        response.data.filter(employee => employee.EmployeeAvailability===true)
          .map(filteredEmployee => (
            this.setState({  availableEmployees: filteredEmployee })
          ))
      })
      .catch(function (error){
        console.log(error);
      })
  }

  
  render() {
    
    return(
      <div>
        <Navbar />
        <Modal show={this.state.show} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="question-dashboard">
                <div className="card mt-4 mb-3 mb-md-4">
                  <div className="card-body p-3">
                    <h5 className="text-secondary mb-2">Available: <span className="font-weight-bold ml-1 text-dark">{ this.state.availableEmployees.length }</span></h5>
                    <h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{ this.state.employees.length }</span></h5>
                    <button ></button>
                    <Button className="btn btn-primary mt-4" variant="primary" onClick={e => { this.showModal() }}><i className="fa fa-plus"></i>Add Employee</Button>
                  </div>
                </div>
                <div className="table-responsive mt-3 mt-md-4 mb-2">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Available</th>
                        <th>Age</th>
                        <th>View Details</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.employees.map(employee=>(
                      <tr key={employee.EmployeeID}>
                          <td>{employee.EmployeeName}</td>
                          <td>{employee.EmployeeDesignation}</td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" checked={ employee.EmployeeAvailability===true ? "checked" : "" } />
                              <label className="custom-control-label" htmlFor="ustomCheck1"></label>
                            </div>
                          </td>
                          <td>{employee.EmployeeAge}</td>
                          <td>
                            <button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                              <i className="fa fa-edit"></i>&nbsp; Edit
                            </button>
                            <button type="button" className="btn btn-outline-danger btn-sm">
                              <i className="fa fa-trash"></i>&nbsp; Delete
                            </button>
                          </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
