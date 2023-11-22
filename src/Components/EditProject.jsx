import React,{useContext, useState} from 'react'
import { Modal,Button } from 'react-bootstrap';
import { BASEURL } from '../services/baseUrl';
import { useEffect } from 'react';
import { editProjectsAPI } from '../services/allApis';
import { editProjectResponseContext } from '../Context/ContextShare';


function EditProject({displayProject}) {
  const {editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)
  const[project,setProject]=useState({
    id:displayProject._id, title:displayProject.title,languages:displayProject.languages,github:displayProject.github,website:displayProject.website,overview:displayProject.overview,projectImage:""
  })
 const[preview,setPreview]=useState("")
 const [show, setShow] = useState(false);
  
 useEffect(()=>{
if(project.projectImage){
  setPreview(URL.createObjectURL(project.projectImage))
}else{
  setPreview("")
}
 },[project.projectImage])

  const handleClose = () => {
    setShow(false);
    setPreview("")
    setProject({
      id:displayProject._id, title:displayProject.title,languages:displayProject.languages,github:displayProject.github,website:displayProject.website,overview:displayProject.overview,projectImage:""
    })
  }

  const handleShow = () => setShow(true);
   console.log(project);



const handleUpdate= async(e)=>{
  e.preventDefault()
  const{id,title,languages,github,website,overview,projectImage}=project
  if(!title || !languages || !github || !website || !overview){
    alert("please fill the form completely")
  }else{
    const token = sessionStorage.getItem("token")
    //api call
    const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    projectImage?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",displayProject.projectImage)
    if(projectImage){
    const reqHeader={
      "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
    }
    const result=await editProjectsAPI(id,reqBody,reqHeader)
    if(result.status===200){
      //modal closed.reser state
      handleClose()
      //share response with my project
      setEditProjectResponse(result.data)
    }else{
      console.log(result);
      alert(result.response.data)
    }
  }else{
    const reqHeader={
      "Content-Type":"application/json","Authorization":`Bearer ${token}`
    }
    const result=await editProjectsAPI(id,reqBody,reqHeader)
    if(result.status===200){
      //modal closed.reser state
      handleClose()
      //share response with my project
      setEditProjectResponse(result.data)
    }else{
      console.log(result);
      alert(result.response.data)
    }
  }
}
}


  return (
    <>
    <button onClick={handleShow} className='btn'><i class="fa-regular fa-pen-to-square fa-2x"></i></button>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                 <div className='col-lg-6'>
                    <label className='text-center' htmlFor="projectpic">
                       <input id='projectpic'  type="file"  style={{display:'none'}} onChange={e=>setProject({...project,projectImage:e.target.files[0]})}/>
                        <img width={'100%'} height={'200px'}  src={preview?preview:`${BASEURL}/uploads/${displayProject.projectImage}`} alt="profile-pic" />
                    </label>
                 </div>
                 <div className='col-lg-6'>
                       <input type="text" className='form-control' placeholder='Project Name' value={project.title?project.title:displayProject.title} onChange={e=>setProject({...project,title:e.target.value})}  />
                       <input type="text" className='form-control' placeholder='Language Used' value={project.languages?project.languages:displayProject.languages} onChange={e=>setProject({...project,languages:e.target.value})} />
                       <input type="text" className='form-control' placeholder='Github Link'value={project.github?project.github:displayProject.github} onChange={e=>setProject({...project,github:e.target.value})} />
                       <input type="text" className='form-control' placeholder='Website Link' value={project.website?project.website:displayProject.website} onChange={e=>setProject({...project,website:e.target.value})} />
                 </div>
            </div>
            <input type="text" className='form-control' placeholder='Project Overview' value={project.overview?project.overview:displayProject.overview} onChange={e=>setProject({...project,overview:e.target.value})} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject