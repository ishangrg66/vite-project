import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="className container-fluid" style={{backgroundColor:'#000', color:'#f0f'}}>
      <div className="className row">
        
        <div className="className col-md-3 text-center py-3">
        <Link to={'/'} className='fw-bold fs-4 text-uppercase text-white text-decoration-none'> My Store</Link>
       
        </div>
        <div className="className col-md-6 text-center py-3">
          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button>
      </form>
      </div>
      
        <div className="col-md-3 py-3 fs-3 d-flex justify-content-evenly">
      <Link to='/Login'><i class="bi bi-arrow-right-circle text-danger"></i></Link>
      <Link to='/Register'><i class="bi bi-person-add text-warning"></i></Link>
      <Link to='/Cart'><i class="bi bi-basket2-fill text-success"></i></Link>
      </div>
        </div>
      </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Header