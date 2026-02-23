import React, { useState } from "react";
import { Button } from "./Button";
import axios from "axios";
export const Job = ({ job, userInfo, baseURL }) => {
  const [repoUrl, setRepoUrl] = useState('')
 
 
 const handleSubmit = async (e) => {
  e.preventDefault();

  const body = {
    uuid: userInfo.uuid,
    jobId: job.id,
    candidateId: userInfo.candidateId,
    repoUrl: repoUrl
  };

   try {
    const response = await axios.post(
      `${baseURL}/api/candidate/apply-to-job`,
      body,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Success:", response.data);

  } catch (error) {
    console.error("Error:", error);
  }
};

  const handleChange = (e)=>{
    setRepoUrl(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <label>{job.title}</label>
        <input type="text" onChange={handleChange} />
        <Button />
      </form>
    </div>
  );
};

