import React, { useState } from 'react';
import userData from '@/json/api.json';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    padding: '20px',
    borderRadius: '8px',
    boxSizing: 'border-box', // Include padding in the element's total width and height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // This will center the content vertically and horizontally
  },  
  header: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
    padding: '10px 0', // Padding to ensure the text is vertically centered
    backgroundColor: 'Black', // Dark background for header
    borderRadius: '4px', // Rounded corners for the header
  },
  totalUsers: {
    fontSize: '16px',
    margin: '0 0 10px',
    textAlign: 'center',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block', // Center the button by making it a block element
    margin: '20px auto', // Auto margins for horizontal centering
  },
  table: {
    width: '80%',
    borderCollapse: 'collapse',
    marginTop: '18px',
  },
  thead: {
    backgroundColor: '#007BFF',
  },
  th: {
    padding: '10px',
    border: '1px solid #444',
  },
  tbody: {
    backgroundColor: '#444', // Dark background for table body
  },
  td: {
    padding: '10px',
    border: '1px solid #444',
  },
  actionButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const bodyStyle = {
  backgroundColor: 'black', // Set the background color of the entire screen to black
};
const activeStatusStyle = {
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  backgroundColor: 'green',
  display: 'inline-block',
  marginLeft: '5px'
};
const profilePicStyle = {
  width: '50px',  // Adjust size as needed
  height: '50px', // Adjust size as needed
  borderRadius: '50%', // Circular profile pictures
  marginRight: '10px',
};

const Dashboard = () => {
  const [users, setUsers] = useState(userData.botsArray.map(user => ({ ...user, disabled: false })));
  const [showUsers, setShowUsers] = useState(null);

  const toggleUserDisplay = (userId) => {
    setShowUsers(userId === showUsers ? null : userId);
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, disabled: !user.disabled } : user
    ));
  };

  return (
    <div style={bodyStyle}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2>User Information</h2>
        </div>
        <div style={styles.table}>
          {users.map((user) => (
            <div key={user.id} style={styles.td}>
              <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={user.profilePic} alt={`${user.name}`} style={profilePicStyle} />
                <button
                  onClick={() => toggleUserDisplay(user.id)}
                  style={styles.actionButton}
                >
                  {user.name}
                </button>
                </div>
                <span style={{ color: 'white' }}>
                  {user.Status}
                  {user.Status === 'Active' && <div style={activeStatusStyle}></div>}
                  </span>
              
                
              </div>
              {showUsers === user.id && (
                <div>
                  <p>ID: {user.id}</p>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Age: {user.age}</p>
                  <p>Account Status: {user.Status}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;