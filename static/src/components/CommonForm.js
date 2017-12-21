import React from 'react'

export default class CommonForm extends React.Component {

    render() {
        return (
              <form className="form-horizontal" method="post">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="lastName" className="">Last Name</label>
                    <div className="col">
                      <input type="email" className="form-control" id="lastName" placeholder="Email" required></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName" className="">First Name</label>
                    <div className="col">
                      <input type="email" className="form-control" id="firstName" placeholder="Email" required></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="DOB" className="">Date of Birth/Projected</label>
                    <div className="col">
                      <input type="email" className="form-control" id="DOB" placeholder="Email" required></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sex" className="">Sex</label>
                    <div className="col">
                      <input type="email" className="form-control" id="sex" placeholder="Email" required></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                      <label htmlFor="address" className="">Street</label>
                      <div className="col">
                          <input type="email" className="form-control" id="address" placeholder="Email" required></input>
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="city" className="">City</label>
                      <div className="col">
                          <input type="email" className="form-control" id="city" placeholder="Email" required></input>
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="state" className="">State</label>
                      <div className="col">
                          <input type="email" className="form-control" id="state" placeholder="Email" required></input>
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email" className="">Zip</label>
                      <div className="col">
                          <input type="email" className="form-control" id="email" placeholder="Email" required></input>
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="inputPassword" className="">Password</label>
                      <div className="col-xs-10">
                          <input type="password" className="form-control" id="inputPassword" placeholder="Password" required></input>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-xs-offset-2 col-xs-10">
                          <button type="submit" className="btn btn-primary">Login</button>
                      </div>
                  </div>
                </div>
              </form>
        )
    }
}