import React from "react";

/**
 * @type {React.FunctionComponent<Schema.LaunchDetails_launch>}
 */
const LaunchDetail = ({ id, site, rocket }) => (
  <div>
    <h3>
      {id.toUpperCase()}
      {rocket && rocket.name} ({rocket && rocket.type})
    </h3>
    <h5>{site}</h5>
  </div>
);

export default LaunchDetail;
