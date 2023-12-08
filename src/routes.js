import React from 'react'
import PhotoGallery from './PhotoGallery'
import UploadForm from './UploadForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/ver" element={<PhotoGallery />} />
            <Route path="/enviar" element={<UploadForm />} />

        </Routes>
    </BrowserRouter>
  )
}
