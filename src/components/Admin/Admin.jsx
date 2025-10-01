import react from "react"
import "./Admin.css"
export default function Admin(){
  return (
    <div className="admin">
    <h1>Enter the details of drivers</h1>
    <form>

    <div className="container">
     <label htmlFor="firstName">First Name</label>
     <input
     type="text"
      placeholder="Satashi"
      id="firstName"
      name="firstName"
      required
      />
      </div>

      <div className="container">
      <label htmlFor="lastName">Last Name</label>
      <input
      type="text"
      placeholder="Nakamoto"
      id="lastName"
      name="lastName"
      />
      </div>

      <div className="container">
      <label htmlFor="email">Email</label>
      <input
      type="email"
      placeholder="abc@gmail.com"
      id="email"
      name="email"
      required
      />
      </div>
       
       <div className="container">
      <label htmlFor="password">Password</label>
      <input
       type="password"
       placeholder="********"
       id="password"
       name="password"
       required
      />
      </div>

      <div className="container">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
        type="password"
        placeholder="********"
        id="confirmPassword"
        name="confirmPassword"
        required
        />

      </div>

    <button type="submit">Submit</button>
    </form>
    </div>
  )
}