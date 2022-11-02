import React, { useState, useEffect } from 'react';
import './index.css';
export default function Index() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState([]);
	//dijalankan 1 kali
	useEffect(() => {
		fetch('https://api.quotable.io/quotes?page=1')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(data);
	//dijalankan terus setiap ada perubahan count
	useEffect(() => {
		if (count > 0) {
			alert(`component will update & count ${count}`);
		}
	}, [count]);
	//dijalankan terus menerus
	useEffect(() => {
		console.log('spam console kuy');
	});
	const countUp = () => {
		setCount(count + 1);
	};
	const countDown = () => {
		setCount(count - 1);
	};
	return (
		<div className="Main">
			<p className="Text"> Learn useEffect</p>
			<p>KELOMPOK13</p>
			<ul>
				{data &&
					data.results?.map((value) => (
						<li key={value.id}>
							<h4>{value.author}</h4>
							<div>
								- <span>{value.content}</span>
							</div>
						</li>
					))}
			</ul>
			<p className="Text">{count}</p>
			<div className="ViewButton">
				<div className="ViewButton2">
					<button className="Button" onClick={countUp}>
						Up
					</button>
				</div>
				<div className="ViewButton1">
					<button className="Button" onClick={countDown}>
						Down
					</button>
				</div>
			</div>
		</div>
	);
}
