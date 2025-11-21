import React from 'react'

type props = {
  title?: string
  onChange?: VoidFunction
}

const Input = ({ title, onChange }: props) => {
  return (
    <div style={{}}>
      <input onChange={onChange} />
      <p> {title}</p>
      <p> ankhema-react</p>
    </div>
  )
}
export default Input
