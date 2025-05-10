import React, { use } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { format } from 'date-fns';
import { useNavigate } from 'react-router';

const MyProfile = () => {
    const { user, updateInfo, loading } = use(AuthContext);
    const { displayName, email, photoURL, metadata } = user;
    const lastLogIntime = format(new Date(metadata.lastSignInTime), "EEEE, MMMM MM, yyyy : hh-mm-ss a ")
    const navigate = useNavigate();
    const handleProfileDetailsChange = (e) => {
        e.preventDefault();
        const form = e.target;
        const newName = form.name.value;
        const newPhotoURL = form.photo.value;
        updateInfo(newName, newPhotoURL);
        // !loading && navigate("/my-profile");
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='p-2 border-2 rounded-full border-secondary mb-4 shadow-xl'>
                    <img src={photoURL} alt="" className='w-[50px] h-auto' />
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 w-full md:w-sm rounded-box border p-4">
                    <legend className="fieldset-legend text-center text-base md:text-xl bg-base-100 px-6 rounded-2xl border border-slate-200 shadow-xl text-primary">{displayName}</legend>

                    <label className="label">Email</label>
                    <input type="text" className="input" placeholder="Email" defaultValue={email} readOnly />

                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Email" defaultValue={photoURL} />

                    <label className="label">Last LogIn time</label>
                    <input type="text" className="input" placeholder="Last login time" defaultValue={lastLogIntime} readOnly />

                </fieldset>
            </div>
            <form onSubmit={handleProfileDetailsChange} className="card-body mt-4 border border-red-400 rounded-xl md:w-sm md:mx-auto">
                <h2 className='text-center text-red-400 md:text-lg md:font-semibold'>Want to change Name or PhotoURL ?</h2>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                        name="name"
                        type="text"
                        className="input"
                        placeholder="Name"
                        defaultValue={displayName}
                        required
                    />

                    <label className="label">Photo URL </label>
                    <input
                        name="photo"
                        type="text"
                        className="input"
                        placeholder="Photo URl"
                        defaultValue={photoURL}
                        required
                    />

                    <button type="submit" className="btn btn-neutral mt-4">
                        Save Changes
                    </button>

                </fieldset>
            </form>
        </div>
    );
};

export default MyProfile;