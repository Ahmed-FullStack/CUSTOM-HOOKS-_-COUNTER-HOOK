import UserContext from './user-context';

export default function UserProvider(props) {
	const userContextManger = {
		user: [
			{ name: 'ahmed' },
			{ name: 'habibaapi' },
			{ name: 'papa' },
			{ name: 'mama' },
		],
		addUserHandler: () => {
			console.log(`lkajsdlkfjads`);
		},
		deleteUserHandler: () => {
			console.log(`lkajsdlkfjads`);
		},
	};
	return (
		<UserContext.Provider value={userContextManger}>
			{props.children}
		</UserContext.Provider>
	);
}
