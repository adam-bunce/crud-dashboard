import React, { Component } from 'react'
import Create from './Create/Create';
import Read from './Read/Read';
import Update from './Update/Update';
import Delete from './Delete/Delete';
import Table from './Table/Table';
import axios from 'axios'

// import bootstrap
import "bootstrap/js/dist/button"
import "bootstrap/js/dist/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = null

    this.readData = this.readData.bind(this)
    this.createRow= this.createRow.bind(this)
    this.updateRow= this.updateRow.bind(this)
    this.deleteData= this.deleteData.bind(this)
    this.validateString= this.validateString.bind(this)
  }

  today = new Date();
  time = (this.today.getMonth()+1)+'-'+this.today.getDate() + '-' +this.today.getFullYear()

  validateString(value) {
    const re = /^\d+$/g
    return re.test(value)
  }


  async readData() {
    axios.get(`http://localhost:8080/api/all`)
      .then( (response) => {
        this.setState(response.data)
      }, (error) => console.log(error))
  }

  async createRow(data) {
    if (!['True', 'False'].includes(data.bool)){
      // user had selected "select boolean" and pressed create
    }
    else {
    axios.post(`http://localhost:8080/api`, data)  
      .then( (response) => {
        console.log(response)
      }, (error) => console.log(error))
    }
  }

  async updateRow(rowID, data) {
    if (!['True', 'False'].includes(data.bool)) {
      // user selected "select boolean" and pressed update
    }
    else if (!this.validateString(rowID)) {
      // user inputted 'update id' as wrong format
    }
    else {
      axios.put(`http://localhost:8080/api/${rowID}`, data)
        .then( (response) => {
          console.log(response)
        }, (error) => console.log(error))
    }
  }

  async deleteData(rowID) {
    if (!this.validateString(rowID)) {
      // user inputted 'update id' as wrong format
    }
    else {
      axios.delete(`http://localhost:8080/api/${rowID}`)
        .then( (response) => {
          console.log(response)
        }, (error) => console.log(error))
    }
 }

  render() {
    return (
      <>
        <h1 className='display-1 text-center'>CRUD Dashboard</h1> 

        <div className='container'>
          <div className='accordion'>
            <Create rowId='id' time={this.time} createRow = {this.createRow}/>
            <Read readData={this.readData}/>
            <Update time={this.time} updateRow={this.updateRow} />
            <Delete deleteData={this.deleteData} />
          </div>
        </div>

        <div className='container my-5'> 
          <h3 className='display-3 text-center'>Database</h3>
          <Table tableData={this.state} />
        </div>
      </>
    )
  }
}
