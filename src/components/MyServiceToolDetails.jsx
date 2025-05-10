import React from 'react';

const MyServiceToolDetails = ({ toolCredential }) => {
    const { tool_name, username, password, license_key, license_type, expiry_date } = toolCredential;
    return (
        <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box md:w-xs border p-4">
                <legend className="fieldset-legend md:text-base">{tool_name}</legend>

                <label className="label">Username</label>
                <input type="text" className="input" value={username} readOnly/>

                <label className="label">Password</label>
                <input type="text" className="input" value={password} readOnly/>

                <label className="label">License Key</label>
                <input type="text" className="input" value={license_key} readOnly/>

                <label className="label">License Type</label>
                <input type="text" className="input" value={license_type} readOnly/>

                <label className="label">Expiry Date</label>
                <input type="text" className="input" value={expiry_date} readOnly/>
            </fieldset>
        </div>
    );
};

export default MyServiceToolDetails;