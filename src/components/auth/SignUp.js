import React,{useState} from 'react';
const SigneUp = () => {
  // firstName,lastName,email,password
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    // data capture
    const newData = {firstName,lastName,email,password};
    console.log(newData);
    //reset form field
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className="container">
      <form className="white" onSubmit={onSubmitHandler}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" 
                  value={firstName} 
                  onChange={e=>setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" 
                  value={lastName} 
                  onChange={e=>setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" 
                  value={email} 
                  onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" 
                  value={password} 
                  onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SigneUp;