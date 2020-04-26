import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LAUNCHES } from "../queries";
import Launch from "../components/Launch";

const Index = () => {
  /**
   * @type {Apollo.QueryResult<Schema.GetLaunchList>}
   */
  const { data, loading, error } = useQuery(GET_LAUNCHES);

  return loading ? (
    <p>Loading</p>
  ) : error ? (
    <p>Error: {error.message}</p>
  ) : !data ? (
    <p>No data</p>
  ) : (
    <ul>
      {data.launches.launches.map((launch) => launch && <Launch key={launch.id} {...launch} />)}
    </ul>
  );
};

export default Index;
