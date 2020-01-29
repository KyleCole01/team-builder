import React from 'react';

const Form = props => {
      const handleChange = event => {
        event.preventDefault();
        props.setTeamMember({
          ...props.teamMember,
          [event.target.name]: event.target.value
        });
        };
return (
  <div className="form">
    {/* <label htmlFor="name">Name: </label> */}
    <input
      id="name"
      name="name"
      type="text"
      placeholder="Enter your Name"
      value={props.teamMember.name}
      onChange={event => handleChange(event)}
    />
    <br />
    {/* <label htmlFor="email">Email: </label> */}
    <input
      id="email"
      name="email"
      type="text"
      placeholder="Enter your Email"
      value={props.teamMember.email}
      onChange={event => handleChange(event)}
    />
    <br />
    {/* <label htmlFor="role">Role: </label> */}
    <input
      id="role"
      name="role"
      type="text"
      placeholder="Enter your Role"
      value={props.teamMember.role}
      onChange={event => handleChange(event)}
    />
    <br />
    <input type="submit" onClick={props.submit} />
  </div>
);
}
export default Form;