import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">fakebook</h3>
          <span className="loginDesc">
          Fakebook helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email address or phone number" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgotten Password?</span>
            <hr className="line" />
            <button className="loginRegisterButton">
              Create New Account
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}