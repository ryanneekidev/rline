function Login() {
    return (
        <>
            <div className='login-container'>
                <div className="brand-container">
                    <p className="branding">Weclome to RLine!</p>
                </div>
                <div className="login-card-container">
                    <div className="login-card">
                        <div className="login-card-credentials-container">
                            <label name="login-card-credentials-username-field" for="login-card-credentials-username-field" className="login-card-credentials-username-field-label">Username</label>
                            <input id="login-card-credentials-username-field" placeholder="Enter your username" type="text"></input>
                            <label name="login-card-credentials-password-field" for="login-card-credentials-password-field" className="login-card-credentials-password-field-label">Password</label>
                            <input id="login-card-credentials-password-field" placeholder="Enter your password" type="password"></input>
                        </div>
                        <div className="login-card-button-container">
                            <button className="login-card-button">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;