import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-5'>
        <div className='d-flex'>
            <h3>my projects</h3>
            <div className='ms-auto'>
                <AddProject/>
            </div>
        </div>
        <div className='mt-4'>
            {/* display user projects */}
            <div className='border d-flex align-items-center rounded p-2'> 
              <h4>project title</h4>
              <div className=' icons ms-auto'>
                <button className='btn'><i class="fa-regular fa-pen-to-square fa-2x"></i></button>
                <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
                <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
              </div>
            </div>
            <p className='text-danger fs-3'>No projects uploaded</p>

        </div>
      
    </div>
  )
}

export default MyProjects