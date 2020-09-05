import React from "react";

const SearchPanel = () => {

	const searchTeaxt = 'Type here to search';
	const searchStyle = {
		fontSize: "20px"
	};
	return <input
		style={searchStyle}
		placeholder={searchTeaxt} />;
};

export default SearchPanel;