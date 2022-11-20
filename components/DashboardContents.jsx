import React, { Fragment } from "react";

const DashboardContents = ({ children }) => {
	return (
		<Fragment>
			<div className="relative w-full h-auto overflow-x-hidden overflow-y-scroll">
				<div className="relative">{children}</div>
			</div>
		</Fragment>
	);
};

export default DashboardContents;
