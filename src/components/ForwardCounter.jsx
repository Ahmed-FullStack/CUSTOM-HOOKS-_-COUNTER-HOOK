import useCounter from '../hooks/use-counter';
import Card from './UI/Card';

export default function ForwardCounter(props) {
	const counter = useCounter();

	return <Card>{counter}</Card>;
}
