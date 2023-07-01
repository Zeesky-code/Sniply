import { Form } from "react-router-dom";
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


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

    const handleLogin = async (e) => {
        console.log(email + " " + password)
        e.preventDefault();
        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();
            console.log(data)
            if (response.status === 200) {
                const token = data.data.token;
                localStorage.setItem('token', token);
                window.location = '/dashboard'
            } else {
                console.log(data.message)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <Form>

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input" value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input" value={password} type="password" />
                <button type="submit" onClick={handleLogin}>Login</button>
            </Form>

        </div>

    )
}