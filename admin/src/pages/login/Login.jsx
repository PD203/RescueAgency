import "./login.scss"

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <span>SIGN IN</span>
        <form>
          <input placeholder="username" />
          <input placeholder="password" />
          <button>LOGIN</button>
          <li>DO NOT YOU REMEMBER THE PASSWORD?</li>
          <li>CREATE A NEW ACCOUNT</li>
        </form>
      </div>
    </div>
  );
};
export default Login