import React, { useState } from "react";
import { Button } from "./Button";
import axios from "axios";
export const Job = ({ job, userInfo, baseURL, setIsError, isError }) => {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      uuid: userInfo.uuid,
      applicationId: job.id,
      jobId:job.id,
      candidateId: userInfo.candidateId,
      repoUrl: repoUrl,
    };
    console.log(body);

    try {
      const response = await axios.post(
        `${baseURL}/api/candidate/apply-to-job`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Success:", response.data);
    } catch (error) {
      setIsError(true);
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setRepoUrl(e.target.value);
  };
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
