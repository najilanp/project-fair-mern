import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5'>
        <div className='d-flex justify-content-between'>
          <h2>My Profile</h2>
          <button className='btn btn-outline-primary'><i className='fa-solid fa-check'></i></button>
        </div>
        <div className='row justify-content-center mt-3'>
            {/* picture */}
            <label htmlFor="profile" className='text-center' >
                <input id='profile' type="file"  style={{display:'none'}}/>
                <img width={'200px'} height={'200px'} className='rounded-circle' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais" alt="profile-pic" />
            </label>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Username' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Github ' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='LinkedIn' />
              </div>
        </div>
    </div>
  )
}

export default Profile