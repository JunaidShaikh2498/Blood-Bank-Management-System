import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark" >
      <div className="container-fluid bg-" style={{justifyContent:'space-between'}}>
        <a className="navbar-brand" href="/">
          For The Boys
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/setname">
                Customer Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/insertEmp">
                Employees Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/getEmpData">
                Database Data
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-primary" type="button">
              Login
            </button>
            <button className="btn btn-outline-danger" type="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>

  )
}
