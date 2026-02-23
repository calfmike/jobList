import { useState, useEffect } from "react";
import axios from "axios";
import { Job } from "./components/JobForm";



function App() {
  const baseURL =
    "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";
  const [userInfo, setUserInfo] = useState({});
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const mail = 'juan.calfa@hotmail.com'

  const getUserId = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const userInfo = await axios.get(
        `${baseURL}/api/candidate/get-by-email?email=${mail}`,
      );

      setUserInfo(userInfo.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }; //llama al usuario por mail

  const getJobList = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const jobList = await axios.get(`${baseURL}/api/jobs/get-list`);

      setJobList(jobList.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserId();
    getJobList();
  }, []); // llama a la lista de ofertas

  return (
    <div className="mainContainer"> 
      {isLoading ? ( //si esta cargando renderiza la info
        <h5>Esta cargando</h5>
      ) : isError ? (
        <h5>Hubo un error</h5> // idem si hay error
      ) : (
        <ul>
          {jobList.map((job) => { //recorre el array de la lista y renderiza un objeto HTML por cada uno. 
            return <Job key={job.id} job={job} userInfo={userInfo} baseURL={baseURL} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
