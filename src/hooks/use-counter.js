import { useEffect, useState } from 'react';

export default function useCounter(forward = true) {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (forward) {
				setCounter(prevs => prevs + 1);
			} else {
				setCounter(prevs => prevs - 1);
			}
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return counter;
}
