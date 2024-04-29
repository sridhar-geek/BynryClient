import React from "react";
import { FaRegStar } from "react-icons/fa";

const Profile = ({ profile }) => {
  console.log(profile)
  return (
    <div className="flex flex-col md:flex-row md:gap-12 justify-center items-center min-h-screen py-8 px-4">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={profile.image}
          alt={profile.name}
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-xl mb-2">{profile.profession}</p>

        <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        <p className="text-base mb-4">{profile.workExperience}</p>

        <h2 className="text-xl font-bold mb-2">Ratings</h2>
        <div className="flex items-center mb-4">
          {/* {Array(profile.rating)
            .fill(0)
            .map((_, index) => (
              <FaRegStar key={index} className="h-5 w-5 text-yellow-400" />
            ))} */}
          <span className="ml-2 text-base">{profile.rating}/5</span>
        </div>

        <h2 className="text-xl font-bold mb-2">Bio</h2>
        <p className="text-base mb-4">{profile.bio}</p>

        <h2 className="text-xl font-bold mb-2">Interests & Hobbies</h2>
        <p className="text-base mb-4">{profile.interests}</p>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mr-4">
            Locate on Map
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
