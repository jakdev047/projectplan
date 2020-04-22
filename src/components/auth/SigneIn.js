import React,{useState} from 'react';
const SigneIn = () => {
  // email,password
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    // data capture
    const newData = {email,password};
    console.log(newData);
    //reset form field
    setEmail('');
    setPassword('');
  }
  return (
    <div className="container">
      <form className="white" onSubmit={onSubmitHandler}>
        <h5 className="grey-text text-darken-3">
          Sign In
        </h5>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default SigneIn;