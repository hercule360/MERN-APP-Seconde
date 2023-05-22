import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '.././Data'

const Details = () => {
  const {id}= useParams()
  const [details,setDetails] = useState({})
  const navigate=useNavigate()

  useEffect(() => {
    const movieDetails = moviesData.find((el)=> el.id == id )
    setDetails(movieDetails)

  }, [id])
  
  return (
    <div>
      <Button className='btn1' variant='info' onClick={()=>navigate('/MovieList')}>Back</Button>
      {details.description}
      <iframe className='film' src={details.trailer} title="video trailer "></iframe>
      
    </div>
  )
}

export default Details