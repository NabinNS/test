import "./login.css";

const Login = () => {
  return (
    <>
      <div div className="login">
        <div className="login-main">
          <h1>Login</h1>
          <form>
            <div className="login-txtfield">
              <input type="text" placeholder="username" required />
            </div>
            <div className="login-txtfield">
              <input type="password" placeholder="password" required />
            </div>
            <p className="login-forget">Forgot Password?</p>
            <button className="login-submitbtn">Login</button>
            <div className="login-signup-link">
              Not a member? <a href="Signup.js">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
