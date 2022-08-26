import "./login.css";

const SignUp = () => {
  return (
    <>
      <div div className="login">
        <div className="login-main">
          <h1>SignUp</h1>
          <form>
            <div className="login-txtfield">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="login-txtfield">
              <input type="text" placeholder="Email" required />
            </div>
            <div className="login-txtfield">
              <input type="password" placeholder="password" required />
            </div>
            <p className="signup-description">Select your profession:</p>
            <div className="signup-checkbox">
              <input
                type="radio"
                id="Student"
                name="profession"
                value="Student"
              />
              <label for="Student">Student</label>
              <input
                type="radio"
                id="Teacher"
                name="profession"
                value="Teacher"
              />
              <label for="Teacher">Teacher</label>
            </div>

            <button className="login-submitbtn">Sign Up</button>
            <div className="login-signup-link">
              Already a member? <a href="login.js">Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
