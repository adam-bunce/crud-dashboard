import React from 'react'

const Table = (props) => {
  console.log(props.tableData)
    return (
      <section>
            <div className='container mt-1'>
              <table className='table table-striped border shadow-sm'>
                  <thead>

                    <tr>
                      <th scope='col'>id</th>
                      <th scope='col'>creation date</th>
                      <th scope='col'>text</th>
                      <th scope='col'>bool</th>
                    </tr>
                  </thead>
                  <tbody>

                    { (!props.tableData || props.tableData.queryResult.length < 1) ?

                        <tr>
                          <th scope='row' colSpan={4} className='text-center'> Empty </th>
                        </tr>

                      :
                        props.tableData.queryResult.map( (element) => 
                          <tr>
                            <td> {element.id} </td>
                            <td> {element.creation_date} </td>
                            <td> {element.textResource} </td>
                            <td> {element.bool} </td>
                          </tr> 
                      ) 
                    }         
                  </tbody>
                </table>
            </div> 
          </section>
    )
  }

export default Table