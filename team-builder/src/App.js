import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';

function App() {
  const [formData, setFormData] = useState([
    {
      name: "Kyle",
      email: "Cole",
      role: "Awesomeness"
    }
  ]);

  const [teamMember,setTeamMember] = useState({
    name:"",
    email:"",
    role:""
  });
const submit = () => {
  setFormData(formData.concat(teamMember));
  console.log(teamMember, "is the team member");
  console.log(formData, "is the form Data");
  setTeamMember({name:"",email:"",role:""})
};
  return (
    <div className="App">
      <header className="App-header">Howdy Partners
        <Form
          setTeamMember={setTeamMember}
          setFormData={setFormData}
          formData={formData}
          teamMember={teamMember}
          submit={submit}
        />
      </header>
      <TeamList formData={formData} />
    </div>
  );
}

export default App;
