export interface Location {
  provided: string;
  lat: number;
  long: number;
}

export interface Events {
  workflowDispatch: number;
}

export interface GithubUsername {
  _id: string;
  location: Location;
  createdAt: Date;
  updatedAt: Date;
  events: Events;
}

export interface SocketResponse {
  githubUsername: GithubUsername;
  event: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
