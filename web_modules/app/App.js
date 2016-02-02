import React, { Component } from 'react';

import Item from "Item"
import List from "List"

const artists = [
	{name:"Bob Marley"},
	{name:"Bob Dylan"},
	{name:"Muse"},
	{name:"Lana Del Rey"}
]
const kinds = {
	rap: {name:"Rap"},
	rock: {name:"Rock"},
	electro: {name:"Electro"}
}

let	kindArray = Object.keys(kinds)
console.log(kindArray)

export default class App extends Component {

	getItem(artist, index){
		return (<Item key={index} name={artist.name}/>)
	}
	render() {
		return (
			<div>
			<List items={artists} />
			{
				kinds &&
				kindArray.map((key, index) => {
					console.log(kindArray[key])
				})
			}
			</div>
		);
	}
}
