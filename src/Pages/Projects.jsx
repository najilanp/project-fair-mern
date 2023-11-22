import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row ,Col} from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../services/allApis'


function Projects() {
   const[searchKey,setSearchKey]=useState("")
  const[allProjects,setAllProjects] = useState([])
  const getAllProjects =async(token)=>{
    const reqHeader={
    "Content-Type":"application/json","Authorization":`Bearer ${token}`
    }
    const result = await allProjectsAPI(searchKey,reqHeader)
    console.log(result);
    if(result.status===200){
      setAllProjects(result.data)
    }else{
      alert(result.response.data)
    }
  }

useEffect(()=>{
if(sessionStorage.getItem("token")){
  const token = sessionStorage.getItem("token")
  console.log(token);
  getAllProjects(token)
}else{
  alert("please login")
}
},[searchKey])

  return (
    <>
    {/* navbar */}
    <Header/>
    {/* all projects */}
    <div className='text-center' style={{marginTop:'100px'}}>
      <h1 className='mt-5'>All Projects</h1>
      {/* search */}
      <div className='d-flex  mb-5 justify-content-center w-100'>
        <div className='d-flex align-items-center border rounded w-50'>
          <input className='form-control' placeholder='search by technologies'onChange={e=>setSearchKey(e.target.value)} />
         <div style={{marginLeft:'-50px'}}> <i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
      </div>
      <div className='container-fluid'>
          <Row>
           { allProjects?.length>0? allProjects?.map(project=>(
            <Col sm={12}md={6}lg={4}>
            <ProjectCard project={project}/>
            </Col>
           )) : null
           }
          </Row>
      </div>
    </div>
    </>
  )
}

export default Projects