import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCH_DETAILS } from '../queries';

/**
 * @type {React.FunctionComponent<{ launchId: string }>}
 */
const Launch = ({ launchId }) => {
  /**
    * @type {Apollo.QueryResult<Schema.LaunchDetails>}
    */
  const { 
    data, 
    loading,
    error,
  } = useQuery(GET_LAUNCH_DETAILS, 
    { variables: { launchId } }
  );
  if (loading) return null;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      {data?.launch?.mission?.name}
    </Fragment>
  );
}

export default Launch;