import React from 'react'
import { useRef } from 'react';


const Update = (props) => {

  const updatedBoolSelected= useRef(null);
  const updatedTextResource= useRef(null);
  const updatedTargetId = useRef(null);
  
    return (
    <>
        <h2 className='accordion-header mt-' id='updateHeading'>
            <button className='border accordion-button text-warning fw-bold bg-light' type='button' data-bs-toggle='collapse' data-bs-target='#updateCollapse'> UPDATE </button>
        </h2>
        
        <div className='accordion-collapse collapse' id='updateCollapse'>
            <div className='accordion-body border border-muted shadow-sm'>
              <div className='row'>
                <div className='form-group'>
                    <p className='lead mb-4'> Update a row in the table.</p>

                  <div className='row'>
                    <div className='col-12'>
                      <input ref={updatedTextResource} className='text-muted form-control' type='text' placeholder="Updated Text" />
                    </div>
                  </div>

                  <div className='row my-4 align-items-center'>
                    <div className='col-6 col-md-3'>
                        <select ref={updatedBoolSelected} className='form-select'>
                          <option defaultValue> Select Boolean </option>
                          <option value="True"> True </option>
                          <option value="False"> False </option>
                        </select> 
                    </div>

                    <div className='col-6 col-md-3'>
                      <input ref={updatedTargetId} className='form-control' type='text' placeholder='update id'/>
                    </div>

                    <div className='col-6 col-md-3 mt-4 mt-md-0'>
                      <input id='time' className='text-muted form-control' type='text' placeholder={props.time} disabled/>
                    </div> 

                    <div className='col-6 col-md-3 mt-4 mt-md-0'>
                      <button className='btn btn-warning w-100 text-light' onClick={() => {props.updateRow(updatedTargetId.current.value ,
                      {textResource: updatedTextResource.current.value, bool: updatedBoolSelected.current.value
                                            });
                                            updatedTextResource.current.value = '';
                                            updatedBoolSelected.current.value='Select Boolean';
                                            updatedTargetId.current.value=''}}> UPDATE </button> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Update

