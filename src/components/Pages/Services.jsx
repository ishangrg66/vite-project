import React from 'react'

const Services = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-md-center underline text-blue-900 m-10">Services</h1>
    <div className="grid md:grid-cols-3 sm:grid-cols-2 px-5 sm:px-0 md:px-10">
        <div className="sm:col-span-2 md:col-span-1 bg-orange-700">1</div>
        <div className="md:col-span-1 bg-purple-500">2</div>
        <div className="md:col-span-1 bg-pink-800">3</div>
    </div>
    </>
  )
}

export default Services 