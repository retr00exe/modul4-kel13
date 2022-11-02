import React, { useState, useContext } from 'react';
import './index.css';
const themes = {
	light: {
		id: 1,
		foreground: '#000000',
		background: '#f70',
	},
	dark: {
		id: 2,
		foreground: '#f70',
		background: '#222222',
	},
};
const ThemeContext = React.createContext(themes.light);
export default function Index() {
	const [theme, setTheme] = useState(themes.dark);
	const changeTheme = () => {
		if (theme.id === themes.light.id) {
			setTheme(themes.dark);
		} else {
			setTheme(themes.light);
		}
	};
	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			<div className="Main" style={{ background: theme.background, color: theme.foreground }}>
				<p className="Text">Theme by useContext</p>
				<p>KELOMPOK13</p>
				<ThemedButton />
			</div>
		</ThemeContext.Provider>
	);
}
export function ThemedButton() {
	const { theme, changeTheme } = useContext(ThemeContext);
	return (
		<button
			className="Button"
			style={{ background: theme.background, color: theme.foreground }}
			onClick={changeTheme}
		>
			i am styled by theme context!
		</button>
	);
}
