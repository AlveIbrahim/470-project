import React from 'react';
import List from '../../Components/list/List';
import './Profile.scss';
function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button><a href="/ProfileUpdatePage">Update Profile</a></button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Laundry</h1>
            <button>Create New Post</button>
          </div>
          <List />
          {/* <div className="title">
            <h1>Saved List</h1>
          </div>
          <List /> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <div className="title">
            <h1>Grosaries</h1>
            <button>Create New Post</button>
          </div>
          <List /> 
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;










// const Profile = () => {
//   return (
//     <div className='pri'>Profile</div>
//   )
// }

// export default Profile