import React, { Fragment } from "react";

const DashboardContents = ({ children }) => {
	return (
		<Fragment>
			<div className="relative w-full h-full">
				<div className="relative h-auto">{children}</div>
			</div>
		</Fragment>
	);
};

export default DashboardContents;
