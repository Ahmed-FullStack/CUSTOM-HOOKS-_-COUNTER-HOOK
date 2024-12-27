import useCounter from '../hooks/use-counter';
import Card from './UI/Card';

export default function BackWardCounter(props) {
	const counter = useCounter(false);
	return (
		<>
			<button>Toggle Counter Increment</button>
			<Card>{counter}</Card>
		</>
	);
}
