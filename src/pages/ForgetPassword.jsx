import React, { use, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const [error, setError] = useState("");
    const { sendResetPasswordEmail } = use(AuthContext);
    const { email } = useParams();
    const navigate = useNavigate();

    const handleForgetPassword = (e) => {
        setError("");
        e.preventDefault();
        const form = e.target;
        const mail = form.email.value;
        sendResetPasswordEmail(mail)
            .then(() => {
                toast.success("Password Reset Email Sent", {
                    autoClose: 1500,
                });
                navigate("/auth/login");
                window.open("https://mail.google.com/", "_blank", "noopener,noreferrer");
            })
            .catch((error) => {
                setError(error.code);
            });
    }

    return (
        <div className='flex justify-center mt-8 items-center'>
            <title>SuperSUB || Forget Password</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-lg md:text-2xl text-center">
                    Reset Your Password
                </h2>
                <form onSubmit={handleForgetPassword} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            defaultValue={(email == "none")? "":email}
                            required
                        />

                        {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}

                        <button type="submit" className="btn btn-neutral mt-4">
                            Reset
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;