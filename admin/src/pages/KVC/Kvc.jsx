import React, { useState } from 'react';
import './Kvc.scss'; 
import { Grid } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Kvc() {

  const [resources, setResources] = useState([
    // Sample existing resources
    {
      name: 'Resource 1',
      type: 'Knowledge',
      description: 'Description of Resource 1.',
    },
    {
      name: 'Resource 2',
      type: 'Volunteer',
      description: 'Description of Resource 2.',
    },
    {
      name: 'Resource 3',
      type: 'Coordination',
      description: 'Description of Resource 3.',
    },
  ]);

  // Initialize state for resources and form input values
  const [resourceName, setResourceName] = useState('');
  const [resourceType, setResourceType] = useState('Knowledge');
  const [resourceDescription, setResourceDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new resource object
    const newResource = {
      name: resourceName,
      type: resourceType,
      description: resourceDescription,
    };
    // Add the new resource to the resources array
    setResources([...resources, newResource]);
    // Clear form inputs
    setResourceName('');
    setResourceType('Knowledge');
    setResourceDescription('');
  };


  return (
    <>
    <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <div className="kvcContainer">
            <Navbar />
    <div className="container">
      <h1>KVC Resources</h1>
      <div className="resource-form">
        <h2>Add New Resource</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="resourceName">Resource Name:</label>
          <input
            type="text"
            id="resourceName"
            name="resourceName"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            required
          />

          <label htmlFor="resourceType">Resource Type:</label>
          <select
            id="resourceType"
            name="resourceType"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
          >
            <option value="Knowledge">Knowledge</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Coordination">Coordination</option>
          </select>

          <label htmlFor="resourceDescription">Resource Description:</label>
          <textarea
            id="resourceDescription"
            name="resourceDescription"
            value={resourceDescription}
            onChange={(e) => setResourceDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit">Add Resource</button>
        </form>
      </div>

      <div className="resource-list">
            <h2>Existing Resources</h2>
            <ul>
              {/* Display existing resources */}
              {resources.map((resource, index) => (
                <li key={index}>
                  {/* Display resource details */}
                  <span className="resource-name">{resource.name}</span>
                  <span className="resource-type">{resource.type}</span>
                  <p className="resource-description">{resource.description}</p>
                </li>
              ))}
        </ul>
      </div>
    </div>
   
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Kvc;
