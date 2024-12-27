import { useContext, useEffect, useState } from 'react';
import './App.css';
import BackWardCounter from './components/BackWardCounter';
import ForwardCounter from './components/ForwardCounter';
import UserContext from './store/user-context';
import UserProvider from './store/user-provider';

function App() {
	const userContext = useContext(UserContext);

	// const [state, setState] = useState({ valid: false })

	// function handlePasswordChange(e) {
	// 	if (e.target.value.includes(`@`)) setState({ valid: true })
	// 	if (!e.target.value.includes(`@`)) setState({ valid: false })
	// }

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		console.log(`timer`)
	// 	}, 200)
	// 	return () => {
	// 		console.log(`cleanupfunc`)
	// 		clearTimeout(timer)
	// 	}
	// }, [state])
	return (
		<>
			<BackWardCounter />
			<ForwardCounter />
		</>
	);
}

export default App;
