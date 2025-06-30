import "./signIn.scss";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../../services/auth.service";

const SignIn = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="SignInContainer">
      <div className="SignIn-Page">
        <div className="SignIn-Info">
          Sign In to ChatAI
          <p>Welcome Back! Please SignIn to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="credentials">
          <div>
            <p>Email address</p>
            <input
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <p>Password</p>
            <input
            type='password'
            name = 'password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            />
          </div>
          <button type = 'Submit'>Sign In</button>
        </div>
        </form>
      </div>
      <div className="SignUpLink">
        <p>Dont have an account?</p>
        <span>
          <Link to="/signup" className="linkforSignUp">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
