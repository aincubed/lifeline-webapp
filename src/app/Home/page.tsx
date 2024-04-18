import React from 'react'
import './header.css'

export default function home() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">lifeline</h1>
          <p className="greeting">Hello, admin</p>
          <p className="date">Today is Thursday, 04/11/24</p>
        </div>
      </div>
    </div>

  )
}


