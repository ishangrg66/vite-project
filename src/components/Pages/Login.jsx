import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="className container-fluid">
        <div className="className row">
            <div className="col-11 col-md-8 col-lg-6 mx-auto">
            <form className='p-5 my-5 shadow-lg rounded-3'>
                <img className="mb-4" src="/logo-color.png" alt="" width="125" height="100"/>
                    <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                     <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                     <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                     <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                     </label>
                 </div>
                 <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                 <div className="className d-flex justify-content-between">
                    <span>Dont have an account?<Link to='/register'> Register</Link></span>
                    <Link to='/forgetpassword'>Forget Password</Link>
                 </div>
                         <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
             </form>
            </div>
        </div>
    </div>
  )
}

export default Login