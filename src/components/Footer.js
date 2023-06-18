import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <p style={{position: "absolute",
    textAlign: "center",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
    color: "#ccc"}}>
      Copyright @ {currentYear}
    </p>
  )
}

export default Footer
