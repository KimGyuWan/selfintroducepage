import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer className="mx-3 d-lg-flex justify-content-between align-items-center">
      <div className="order-lg-1 mt-5 mt-lg-0">
        <a href="https://github.com/KimGyuWan" target="_blank" className='mr-2'><i className="bi bi-github"></i></a>
        <a href="#none"><i className="bi bi-instagram"></i></a>
      </div>
      <h2 className="order-lg-0 mt-5 mt-lg-0">@KIMGYUWAN.</h2>
    </footer>
  )
}

export default Footer
