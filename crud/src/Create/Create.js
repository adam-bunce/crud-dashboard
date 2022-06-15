import React from 'react'
import { useRef } from 'react';

const Create = (props) => {

  const textResource = useRef(null);
  const boolSelected = useRef(null);
    
  return (
    <>
        {/* dropdown header/button */}
        <h2 className='accordion-header accordion-flush' id='createHeading'>
            <button className='border accordion-button text-success fw-bold bg-light' type='button' data-bs-toggle='collapse' data-bs-target='#createCollapse'> CREATE </button>
        </h2>

        {/* dropdown body content */}
        <div className='accordion-collapse collapse' id='createCollapse'>
            <div className='accordion-body border border-muted shadow-sm'>
                <div className='container form-group'>
                    <p className='lead mb-4'> Create new row in table. </p> 

                    {/* Text Resource input row */}
                    <div className='row'>
                        <div className='col-12'>
                            <input ref={textResource} className='text-muted form-control' type='text' placeholder='Text Resource'  /> 
                        </div>
                    </div>

                    {/* second row */}
                    <div className='row my-4 align-items-center'>
                        <div className='col-6 col-md-4'>
                            <select name='' ref={boolSelected} className='form-select'>
                                <option defaultValue>Select Boolean</option>
                                <option value='True'>True</option>
                                <option value='False'>False</option>
                            </select> 
                        </div>
                        <div className='col-6 col-md-2'>
                            <input className='form-control' id='disabledId' type='text' disabled placeholder={props.rowId} />
                        </div> 
                        <div className='col-6 col-md-3 mt-4 mt-md-0'> 
                            <input id='disabledTime' className='form-control' type='text' disabled placeholder={props.time} /> 
                        </div>
                        <div className='col-6 col-md-3 mt-4 mt-md-0'>

                            <button className='btn btn-success w-100 form-control'  type='submit' 
                                    onClick={() => {props.createRow({textResource: textResource.current.value, 
                                                                    bool: boolSelected.current.value});
                                                                textResource.current.value = '';
                                                                boolSelected.current.value = 'Select Boolean'
                                                    }}> 
                                CREATE 
                            </button>

                        </div>
                    </div>
                    {/*end of second row */}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Create