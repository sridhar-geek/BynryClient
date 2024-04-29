// ProfileCard.js
import PropTypes from 'prop-types'

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img
        src={profile.image} // Replace with actual image URL
        alt={profile.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600">{profile.profession}</p>
        <p className="mt-2 text-gray-700">{profile.description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Summary
        </button>
      </div>
    </div>
  );
};


ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileCard;
