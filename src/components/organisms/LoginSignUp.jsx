import { Link } from "react-router-dom";
import Input from "../atoms/Input";

const SignIn = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-screen-sm w-full mx-auto space-y-4 p-3 md:p-6 bg-white">
        <h2 className="text-3xl font-semibold">SignIn</h2>
        <form className="flex flex-col gap-y-3">
          <Input type="email" placeholder="Your email" />
          <Input type="password" placeholder="Your password" />
          <button className="btn-red flex justify-center">
            <span>Login</span>
          </button>
        </form>
        <p>
          Don{"`"}t have an account?{" "}
          <Link to="/register" className="text-[#ef4444]">
            SignUp here
          </Link>
        </p>
      </div>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-screen-sm w-full mx-auto space-y-4 p-3 md:p-6 bg-white">
        <h2 className="text-3xl font-semibold">SignUp</h2>
        <form className="flex flex-col gap-y-3">
          <Input type="text" placeholder="Your name" />
          <Input type="email" placeholder="Your email" />
          <Input type="password" placeholder="Your password" />
          <button className="btn-red flex justify-center">
            <span>Register</span>
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-[#ef4444]">
            SignIn here
          </Link>
        </p>
        <div className="flex items-center gap-x-2">
          <Input type="checkbox" />
          <p>I accept all terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export { SignIn, SignUp };
