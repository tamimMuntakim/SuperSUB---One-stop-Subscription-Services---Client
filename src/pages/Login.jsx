import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
        const { logIn, setUser } = use(AuthContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                alert(error.code, error.message);
            })
    }
    return (
        <div className="flex justify-center mt-12 items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-lg md:text-2xl text-center">
                    Login your account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        {error && <p className="text-red-400 text-xs">{error}</p>}

                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                        <p className="font-semibold text-center pt-5">
                            Dont't Have An Account ?{" "}
                            <Link className="text-secondary" to="/auth/register">
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;