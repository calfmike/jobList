import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const baseURL =
    "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";
  const [userInfo, setUserInfo] = useState({});
  const [jobList, setJobList] = useState([]);

  const getUserId = async () => {
    const userId = await axios.get(
      `${baseURL}/api/candidate/get-by-email?email=juan.calfa@hotmail.com`,
    );
    setUserInfo(userId.data);
  };

  const getJobList = async () => {
    const jobList = await axios.get(`${baseURL}/api/jobs/get-list`);
    setJobList(jobList.data);
  };

  useEffect(() => {
    getUserId();
    getJobList();
  }, []);

  return <></>;
}

export default App;
