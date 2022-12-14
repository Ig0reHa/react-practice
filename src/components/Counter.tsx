import React, {FC, useState} from 'react';

const Counter: FC = () => {
	const [count, setCount] = useState(0)
	
	function increment() {
		setCount(count + 1)
	}
	
	function decrement() {
		setCount(count - 1)
	}
	
	return (
		<div className="counter">
			<button onClick={decrement}>-</button>
			<h1>{count}</h1>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;