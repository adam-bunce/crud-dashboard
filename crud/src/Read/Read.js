import React from 'react'

const Read = (props) => {
    return (
    <>
        <h2 className='accordion-header' id='readHeading'>
            <button className='border accordion-button text-primary fw-bold bg-light' type='button' data-bs-toggle='collapse' data-bs-target='#readCollapse'> READ </button>
        </h2>
        <div className='accordion-collapse collapse' id='readCollapse'>
            <div className='accordion-body border border-muted shadow-sm'>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className='lead'> Read data from the database into the table. </div> 
                </div>
                <div className='col-12 col-md-6 mt-4 mt-md-0'>
                  <button className='btn btn-primary w-100' onClick={() => props.readData()}> READ </button>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Read

