import "./signUpPage.scss";
import { Link ,useNavigate} from "react-router-dom";
import { useState} from "react";
import authService from '../../services/auth.service';

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await authService.register(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="SignUpContainer">
      <div className="SignIn-Page">
        <div className="SignIn-Info">
          Sign Up for ChatAI
          <p>Create an account to begin!</p>
        </div>
        <form className="credentials" onSubmit={handleSubmit}>
          <div>
            <p>Name</p>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
            />
          </div>
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
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Choose a password"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="SignUpLink">
        <p>Already have an account?</p>
        <span>
          <Link to="/signin" className="linkforSignUp">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
