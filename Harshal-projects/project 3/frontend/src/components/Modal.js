import React from "react";
import './Modal.css';

class Modal extends React.Component {

    componentDidMount() {
        axios.post('http://localhost:4000/employee/add')
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
        if(!this.props.show) {
            return null;
        }
        return(
        <div>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pt-3 pb-2">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row ">
                                    <div className="form-group col-md-6">
                                        <label html="" className="mb-1">Name</label>
                                        <input type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Gender</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Age</label>
                                        <input type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Designation</label>
                                        <input type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Department</label>
                                        <input type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Joining Date</label>
                                        <input type="date" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.closeModal()}>Cancel</button>
                            <button type="button" className="btn btn-success btn-sm" onClick={this.saveModal()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;