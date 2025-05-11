
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, googleSignIn, updateInfo } = use(AuthContext);

    const navigate = useNavigate();

    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        setPasswordError("");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (passRegEx.test(password) === false) {
            setPasswordError("Password must be at least 6 characters long and include at least one uppercase and one lowercase letter");
            return;
        }

        createUser(email, password)
            .then(() => {
                updateInfo(name, photo);
                navigate("/");
                toast.success("Successfully Registered and Logged In!", {
                    autoClose: 1500,
                });
            })
            .catch((error) => {
                toast.error(error.code, {
                    autoClose: 1500,
                });
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate("/");
                toast.success("Successfully Logged In!", {
                    autoClose: 1500,
                });
            })
            .catch((error) => {
                toast.error(error.code, {
                    autoClose: 1500,
                });
            });
    }

    return (
        <div className="flex justify-center items-center">
            <title>SuperSUB || Register</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-lg md:text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        <label className="label">Photo URl </label>
                        <input
                            name="photo"
                            type="text"
                            className="input"
                            placeholder="Photo URl"
                            defaultValue={"https://i.ibb.co.com/Z1LpFRpk/user.png"}
                            required
                        />

                        <label className="label">Password</label>
                        <div className='input'>
                            <input
                                name="password"
                                type={(showPassword) ? "text" : "password"}
                                placeholder="Password"
                                required
                            />
                            <button type='button' className='text-xs md:text-base' onClick={() => setShowPassword(!showPassword)}>
                                {(!showPassword) ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>

                        {passwordError && <p className="text-red-500 text-xs text-center mt-2">{passwordError}</p>}
                        {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>

                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className="font-semibold text-center pt-5">
                            Allready Have An Account ?{" "}
                            <Link className="text-secondary" to="/auth/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;