import React from 'react'
import Navbar from '../components/common/Navbar'
import UpdateForm from '../components/update/UpdateForm'
import { useParams } from 'react-router-dom'

export default function UpdatePage() {
  const params = useParams();
  return (
    <div>
        <Navbar />
        <UpdateForm id={params.id} />
    </div>
  )
}
