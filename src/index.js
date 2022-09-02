import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import MarvelServices from './services/MarvelServices';

import './style/style.scss';

const marvelServices = new MarvelServices();

marvelServices.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

