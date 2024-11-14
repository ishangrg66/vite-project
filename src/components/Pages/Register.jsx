import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row p-5">
            <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
                <form className="border border-2 rounded rounded-4 shadow-lg p-5 ">
                  <div className="text-center">
                    <img className="mb-4" src="/logo-color.png" alt="" width="150" height="150"/>
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Register Here</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Username"/>
                        <label htmlFor="">UserName</label>
                    </div>
                    <div className="form-floating">
                        <input type="date" className="form-control" placeholder="DOB"/>
                        <label htmlFor="">Date of Birth</label>
                    </div>
                    <div className="form-floating">
                        <input type="Number" className="form-control" placeholder="Age"/>
                        <label htmlFor="">Age</label>
                    </div>
                <div className="form-floating">
                    <div className="form-control d-flex justify-content-evenly">
                        <div>
                            <input type="radio" value="m" name="gender" id="m"/>
                            <label htmlFor="m">Male</label>
                        </div>
                        <div>
                            <input type="radio" value="f" name="gender" id="f"/>
                            <label htmlFor="f">Female</label>
                        </div>
                        <div>
                            <input type="radio" value="o" name="gender" id="o"/>
                            <label htmlFor="o">Others</label>
                        </div>
                    </div>
                    <label htmlFor="">Gender</label>
                </div>
                <div className="form-floating">
                    <select name="" id="" className="form-control">
                        <option value="">Select your address</option>
                        <option value="">Chappal Karkhana</option>
                        <option value="">Damside</option>
                        <option value="">Lakeside</option>
                        <option value="">Byasi</option>
                        <option value="">Balkot</option>
                        <option value="">Basantapur</option>
                    </select>
                    <label htmlFor="">Address</label>
                </div>
                <div className="form-floating">
                    <textarea name="" id="" className="form-control" placeholder="" style={{resize: 'none', height: '150px'}}></textarea>
                    <label htmlFor="">Your Thoughts</label>
                </div>
                <div className="form-floating">
                    <input type="file" className="form-control"/>
                    <label htmlFor="">Choose a photo</label>
                  </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                      </div>
                    <div className="form-check text-start my-3">
                      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I have understood and accepted the terms and conditions
                      </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 justify-content-center" type="submit">Register</button>
                    <div className="d-flex justify-content-between">
                      <span>Already have an account? 
                        <Link to='/Login'>Sign In </Link></span>
                    </div>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2024</p>
                  </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register