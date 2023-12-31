import { useState } from 'react';


export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setUsername('');
        setEmail('');
        setPassword('');
        setMessage('User created successfully');
        window.location = '/login'
      } else {
        setMessage(resJson.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <h1>Signup Page</h1>
      <div className="message">{message ? <p>{message}</p> : null}</div>
      <div>
        <label className="label">Username</label>
        <input
          onChange={handleUsername}
          className="input"
          value={username}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <button type="submit" onClick={handleSignup}>
          Sign Up
        </button>
      </div>

    </form>
  );
}
