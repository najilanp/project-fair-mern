import React, { useEffect, useState } from 'react'
import { updateProfileAPI } from '../services/allApis'
import { BASEURL } from '../services/baseUrl'

function Profile() {
  const[useProfile,setUserProfile]=useState({
    _id:JSON.parse(localStorage.getItem("existingUser"))._id,    username:JSON.parse(localStorage.getItem("existingUser")).username,     email:JSON.parse(localStorage.getItem("existingUser")).email,    password:JSON.parse(localStorage.getItem("existingUser")).password, github:"",linkedin:"",profileImage:""

  })
  const[existingImage,setExistingImage]=useState("")

  const[preview,setPreview]=useState("")
  useEffect(()=>{
    if(useProfile.profileImage){
      setPreview(URL.createObjectURL(useProfile.profileImage))
    }else{
      setPreview("")
    }
  }
  ,[useProfile.profileImage])
// console.log(useProfile);

const handleUpdate=async(e)=>{
  e.preventDefault()
  const{_id,username,email,password,github,linkedin,profileImage}=useProfile
  if(!_id || !username || !email || !password || !github || !linkedin){
    alert("please fill the form completely")
  }else{
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("github",github)
    reqBody.append("linkedin",linkedin)
    reqBody.append("profileImage",profileImage)
    const token = sessionStorage.getItem("token")

    if(preview){
        const reqHeader={
          "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
        }
        const result=await updateProfileAPI(reqBody,reqHeader)
        if(result.status===200){
          alert("profile updated")
          setUserProfile({
            _id:result.data._id, username:result.data.username, email:result.data.email, password:result.data.password, github:result.data.github,linkedin:result.data.linkedin,profileImage:""

          })
          setExistingImage(result.data.image)
        }else{
         console.log(result);
         alert(result.response.data)
        }
      }else{
        const reqHeader={
          "Content-Type":"application/json","Authorization":`Bearer ${token}`
        }
        const result=await updateProfileAPI(reqBody,reqHeader)
        if(result.status===200){
          alert("profile updated")
          setUserProfile({
            _id:result.data._id, username:result.data.username, email:result.data.email, password:result.data.password, github:result.data.github,linkedin:result.data.linkedin,profileImage:""

          })
          setExistingImage(result.data.image)

        }else{
         console.log(result);
         alert(result.response.data)
        }
      }
    }
  }



  return (
    <div className='card shadow p-5'>
        <div className='d-flex justify-content-between'>
          <h2>My Profile</h2>
          <button onClick={handleUpdate} className='btn btn-outline-primary'><i className='fa-solid fa-check'></i></button>
        </div>
        <div className='row justify-content-center mt-3'>
            {/* picture */}
            <label htmlFor="profile" className='text-center' >
                <input id='profile' type="file"  style={{display:'none'}} onChange={e=>setUserProfile({...useProfile,profileImage:e.target.files[0]})}/>
                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:`${BASEURL}/uploads/${existingImage}`} alt="profile-pic" />
            </label>
              {/* <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Username' />
              </div> */}
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Github ' value={useProfile.github} onChange={e=>setUserProfile({...useProfile,github:e.target.value})} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='LinkedIn'  value={useProfile.linkedin} onChange={e=>setUserProfile({...useProfile,linkedin:e.target.value})} />
              </div>
        </div>
    </div>
  )
   }

export default Profile