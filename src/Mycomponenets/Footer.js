import React from 'react'

const Footer = () => {
 let mystyles={
  position:"relative",
top: "100vh",
width:"100%"
 }


  return (
    <footer className="bg-dark text-light py-3" style={mystyles}>
      <p className="text-center">
      Copyright &copy; MyTodolist.com
      </p>
     
    </footer>
  )
}

export default Footer
 