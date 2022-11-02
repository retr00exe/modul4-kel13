import React, { useState } from 'react';
import logo from '../logo.svg';
import './Counter.css';
import ThemedButton from '../learn-useContext';

export default function Counter() {
	const [text, setText] = useState('');
	const [showImage, setShowImage] = useState(true);
	const [count, setCount] = useState(0);
	const countUp = () => {
		setCount(count + 1);
	};
	const countDown = () => {
		setCount(count - 1);
	};
	const hideImage = () => {
		setShowImage(!showImage);
	};
	return (
		<div className="Main">
			<p className="Text">Counter with useState</p>
			<p>KELOMPOK 13</p>
			<div className="ViewImage">
				<div className="ViewImage1">
					<img
						className="App-logo"
						style={{ display: showImage === true ? 'flex' : 'none' }}
						src={logo}
						alt="logo"
					/>
				</div>
				<button className="Button" onClick={hideImage}>
					{showImage !== true ? 'show' : 'hide'}
				</button>
			</div>

			<ThemedButton />

			<input type="text" placeholder="" onChange={(e) => setText(e.target.value)} />
			<h1 style={{ fontSize: '5rem' }}>{text}</h1>
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
