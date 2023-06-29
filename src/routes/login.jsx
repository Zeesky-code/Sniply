import { Form } from "react-router-dom";
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change


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

    const handleSignup = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
    };
    return (
        <div>
            <h1>Signup Page</h1>
            <Form action="edit">

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input" value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input" value={password} type="password" />
                <button type="submit" onClick={handleSignup}>Sign Up</button>
            </Form>

        </div>

    )
}