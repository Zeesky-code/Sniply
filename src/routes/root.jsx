import '../App.css';
export default function Root() {
    return(
        <>
            <div>
                <h1>Welcome to Sniply!</h1>
                <p className="read-the-docs">
                Your quick and easy URL Shortener
                </p>
            </div>
            <div className="card">
                <button>Sign Up</button>
                <button>Login</button>
            </div>
        </>
        
    )
}