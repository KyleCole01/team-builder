import React from 'react';

const TeamList = props => {
    return (
        <div >
            {props.formData.map((member) =>
                <div className='member' key={member.name}>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p>
                </div>
            )}
        </div>
    )}
export default TeamList;