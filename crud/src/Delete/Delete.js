import React from 'react'
import { useRef } from 'react';

const Delete = (props) => {

  const deleteTarget = useRef(null);

  return (
    <>
      <h2 className='accordion-header'>
        <button className='border accordion-button text-danger fw-bold bg-light' type='button' data-bs-toggle='collapse' data-bs-target='#deleteCollapse'> DELETE </button>
      </h2>

      <div className='accordion-collapse collapse' id='deleteCollapse'>
        <div className='accordion-body border border-muted shadow-sm'>
          <div className='container'>
            <div className='col-12 col-md-10'>
              <p className='lead w-100'> Delete row from table.</p>
            </div>

            <div className='row mt-3'>
              <div className='col-6 col-md-3'>
                <input ref={deleteTarget} className='text-muted form-control' type='text' placeholder='Delete id'/>
              </div>
              <div className='col-6 col-md-3'>
                <button className='btn btn-danger w-100' onClick={ () => {props.deleteData(deleteTarget.current.value);
                                                                          deleteTarget.current.value =''
                                                                          }}> DELETE </button>
              </div>
            </div>
          </div>
        </div> 
      </div>      
    </>
  )
}

export default Delete
