import React, { createContext, useContext, useState } from 'react';

// Create a context with initial value null
const UserContext = createContext(null);

// Custom hook to access the user context
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component to wrap the parts of the app that need access to user state
const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const updateUser = (newUserData) => {
    // You might want to perform some validation or additional logic here
    setUser(newUserData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
