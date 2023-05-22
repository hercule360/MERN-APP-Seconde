import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddMovie(add) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//init

  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')
  const [rate, setRate]= useState(0)
  const [posterUrl, setPosterUrl]= useState('')

  //update

  const handleTitle =(e) =>{
    setTitle(e.target.value);
  }
  const handleDescription=(e) =>{
    setDescription(e.target.value);

  }
  const handleRate = (e) => {
    setRate(e.target.value );
  }
  const handlePosterUrl =(e) => {
    setPosterUrl(e.target.value);
  }
  const handleAdd = ()=>{
    const newmovie={title,description,rate,posterUrl}
    add(newmovie)
    handleClose()
  }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add new movie      
 </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>add movie </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Label>movie title</Form.Label>
            <Form.Control onChange={(e)=>handleTitle(e)} placeholder='movie title'></Form.Control>
            <Form.Label>movie description</Form.Label>
            <Form.Control onChange={(e)=>handleDescription(e)} placeholder='movie description'></Form.Control>
            <Form.Label>movie rate</Form.Label>
            <Form.Control onChange={(e) => handleRate (e)} type='number'placeholder='movie rate'></Form.Control>
            <Form.Label>PosterUrl</Form.Label>
            <Form.Control onChange={(e)=> handlePosterUrl(e)} placeholder='movie picture '></Form.Control>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
