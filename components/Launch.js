import React from "react";

/**
 * @type {React.FunctionComponent<Schema.GetLaunchList_launches_launches>}
 */
const Launch = ({ id, rocket, mission }) => <li>{`${id} - ${rocket?.name} - ${mission?.name}`}</li>;

export default Launch;
