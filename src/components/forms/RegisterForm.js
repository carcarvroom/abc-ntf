import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import './Register.css'

const Register = () => {
  const { register, handleSubmit, errors, getValues } = useForm()
  const [isSuccessfullySubmitted, setIsSuccessfulySubmitted] = useState(false)
  const [name, setName] = useState('')

  const onSubmit = () => {
    setIsSuccessfulySubmitted(true)
    setName(getValues('name'))
    alert(`${getValues('name')} has signed up! Welcome to the Rick and Morty Fandom!`)
    localStorage.setItem('email', getValues('email'))
    window.location.reload(true)
  }

  return (
    <Form 
      style={{paddingLeft: "10%", paddingRight: "10%"}}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Field required>
        <label>Name</label>
        <input 
          error={errors.name ? {content: 'Name is required', pointing: 'below'} : null}
          placeholder='Enter name'
          name='name'
          ref={register({required: true})}
        />
      </Form.Field>
      {errors.name && <p>Name is required</p>}

      <Form.Field required>
        <label>Email</label>
        <input 
          type='email' 
          placeholder='Enter email' 
          name='email'
          ref={register({required: true})}
        />
      </Form.Field>
      {errors.email && <p>Valid email address is required</p>}

      <Form.Field required>
        <label>Password</label>
        <input 
          type='password'
          placeholder='Enter password'
          name='password'
          ref={register({required: true, minLength: 8})}
        />
      </Form.Field>
      {errors.password && <p>Password must be 8 charactors or more</p>}
      
      <Button type='submit'>Submit</Button>
      {isSuccessfullySubmitted ?
        <div className="success"> {`${name} has signed up! Welome to the Rick and Morty Fandom!`}</div>
        :
        null
      }
    </Form>
  )
}

export default Register