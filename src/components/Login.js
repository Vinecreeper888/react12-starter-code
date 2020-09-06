import React from 'react';

const Login = ({setUser}) => {
  const [username, setUsername] = React.useState('Vinecreeper888')

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(username);
  }

  return(
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
        onChange={event => setUsername(event.target.value)}
        type="text"
        placeholder="Input username"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
