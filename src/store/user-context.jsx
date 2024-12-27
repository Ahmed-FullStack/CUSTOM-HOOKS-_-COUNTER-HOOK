import React from 'react';

const UserContext = React.createContext({
	user: [],
	addUserHandler: () => {},
	deleteUserHandler: () => {},
});

export default UserContext;
