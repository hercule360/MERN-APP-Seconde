import React from 'react'
import { Form } from 'react-bootstrap'

const Filter  = ({inputSearch, setInputSearch}) => {
  return (
    <div>
      <Form>
        <Form.Control value={inputSearch} onChange={(e)=> setInputSearch(e.target.value)}  placeholder='search movies ...'></Form.Control>
      </Form>
       </div>
  )
}

export default Filter 