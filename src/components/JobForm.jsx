import React from "react";
import { Button } from "./Button";

export const Job = ({ title, job }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{job.title}</label>
        <input type="text" />
        <Button />
      </form>
    </div>
  );
};
