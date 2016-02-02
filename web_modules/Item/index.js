import React, { Component } from 'react';

const Item = ({name = ""}) => {
	return <span className="item">{name}</span>
}

export default Item