import React from 'react';
import MyServiceToolDetails from './MyServiceToolDetails';

const MyServiceTool = ({ id, serviceTool }) => {
    const { service_name, credentials } = serviceTool;
    return (
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3"  defaultChecked={id === 0} />
            <div className="collapse-title font-semibold text-center">{service_name}</div>
            <div className='collapse-content'>
                <div className='flex flex-col md:flex-row gap-4 justify-center'>
                    {credentials.map((toolCredential, index) => <MyServiceToolDetails key={index} toolCredential={toolCredential}></MyServiceToolDetails>)}
                </div>
            </div>
        </div>
    );
};

export default MyServiceTool;
