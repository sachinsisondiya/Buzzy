import react from "react"
export default function Admin(){
  return (
    <>
    <h1>Enter the details of drivers</h1>
    <form>
     <label for="firstName">First Name</label>
     <input
     type="text"
      placeholder="Satashi"
      id="firstName"
      required
      />

      <label for="lastName">Last Name</label>
      <input
      type="text"
      placeholder="Nakamoto"
      id="lastName"
      required
      />

      <label for="email">Email</label>
      <input
      type="email"
      placeholder="abc@gmail.com"
      id="email"
      required
      />

      <label for="password">Password</label>
      <input
       type="password"
       placeholder="********"
       id="password"
       required
      />


    <button type="submit">Submit</button>
    </form>
    </>
  )
}