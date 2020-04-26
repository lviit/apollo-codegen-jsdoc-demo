/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunchList
// ====================================================

export interface GetLaunchList_launches_launches_rocket {
  __typename: "Rocket";
  id: string;
  name: string | null;
}

export interface GetLaunchList_launches_launches_mission {
  __typename: "Mission";
  name: string | null;
  missionPatch: string | null;
}

export interface GetLaunchList_launches_launches {
  __typename: "Launch";
  id: string;
  isBooked: boolean;
  rocket: GetLaunchList_launches_launches_rocket | null;
  mission: GetLaunchList_launches_launches_mission | null;
}

export interface GetLaunchList_launches {
  __typename: "LaunchConnection";
  cursor: string;
  hasMore: boolean;
  launches: (GetLaunchList_launches_launches | null)[];
}

export interface GetLaunchList {
  launches: GetLaunchList_launches;
}

export interface GetLaunchListVariables {
  after?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchDetails
// ====================================================

export interface LaunchDetails_launch_rocket {
  __typename: "Rocket";
  type: string | null;
  id: string;
  name: string | null;
}

export interface LaunchDetails_launch_mission {
  __typename: "Mission";
  name: string | null;
  missionPatch: string | null;
}

export interface LaunchDetails_launch {
  __typename: "Launch";
  site: string | null;
  rocket: LaunchDetails_launch_rocket | null;
  id: string;
  isBooked: boolean;
  mission: LaunchDetails_launch_mission | null;
}

export interface LaunchDetails {
  launch: LaunchDetails_launch | null;
}

export interface LaunchDetailsVariables {
  launchId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LaunchTile
// ====================================================

export interface LaunchTile_rocket {
  __typename: "Rocket";
  id: string;
  name: string | null;
}

export interface LaunchTile_mission {
  __typename: "Mission";
  name: string | null;
  missionPatch: string | null;
}

export interface LaunchTile {
  __typename: "Launch";
  id: string;
  isBooked: boolean;
  rocket: LaunchTile_rocket | null;
  mission: LaunchTile_mission | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
