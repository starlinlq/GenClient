import "../styles/profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { profile as profileApi } from "../api/client";

function DisplayProfile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState();
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await profileApi.get(userId);

        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      getProfile();
    }
  }, [userId]);

  return (
    <div className="container profile">
      {profile && (
        <>
          {" "}
          <button className="btn btn-primary mb-3 ">Update profile</button>
          <div className="row">
            <div className="col border">
              <label htmlFor="firstName" className="fs-6 fw-light">
                First name
              </label>
              <p className="fs-5 p">{profile.firstName}</p>
            </div>
            <div className="col border ">
              <label htmlFor="lastName" className=" fs-6 fw-light">
                Last name
              </label>
              <p className="fs-5 p">{profile.lastName}</p>
            </div>
          </div>
          <div className="row">
            <div className="col border">
              <label htmlFor="email " className="fs-6 fw-light">
                Email
              </label>
              <p className="p fs-5">{profile.email}</p>
            </div>
          </div>
          <div className="row">
            <div className="col border">
              <label htmlFor="DateofBirth" className="fs-6 fw-light">
                Date of birth
              </label>
              <p className="p fs-5">
                {new Date(profile.dateOfBirth).toString().slice(0, 15)}
              </p>
            </div>
            <div className="col border">
              <label htmlFor="State" className="fs-6 fw-light">
                State
              </label>
              <p className="fs-5 p">{profile.state}</p>
            </div>
          </div>
          <div className="row">
            <div className="col border">
              <label htmlFor="Address" className="fs-6 fw-light">
                Address
              </label>
              <p className="fs-5 p">{profile.address}</p>
            </div>
          </div>
          <div className="row">
            <div className="col border">
              <label htmlFor="HomeNumber" className="fs-6 fw-lightr">
                Home number
              </label>
              <p className="p fs-5">{profile.phoneNumber}</p>
            </div>
            <div className="col border">
              <label htmlFor="EmergencyNumber" className="fs-6 fw-lightr">
                Emergency number
              </label>
              <p className="p fs-5">{profile.emergencyNumber}</p>
            </div>
          </div>
          <div className="row">
            <div className="col border">
              <label htmlFor="Gender" className="fs-6 fw-light">
                Gender
              </label>
              <p className="p fs-5">{profile.gender}</p>
            </div>
          </div>
          <div className="row">
            <div className="col border">
              <label htmlFor="Department" className="fs-5 fw-light">
                Department
              </label>
              <p className="fs-5 p">{profile.department}</p>
            </div>
            <div className="col border">
              <label htmlFor="Salary" className="fs-5 fw-light">
                Salary
              </label>
              <p className="fs-5 p">{profile.salary}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DisplayProfile;
