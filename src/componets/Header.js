import React from 'react'

function Header({title, sub }) {
  return (
    <h1 className="title">
    {title}
    <span>{sub}</span>
  </h1>
  )
}

export default Header