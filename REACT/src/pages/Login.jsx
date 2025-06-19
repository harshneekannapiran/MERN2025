import React from 'react';

const Login = () => {
  
  const display = () => {
    alert('Login button clicked!');
  };

  return (
    <div>
      <form>
        <h3>Name:</h3>
        <input type="text" name="name" placeholder="Name" />

        <h3>Password:</h3>
        <input type="password" name="pass" placeholder="Password" />
        
        <br /><br />

        <button type="button" onClick={display}>Login</button>
      </form>
    </div>
  );
};

export default Login;