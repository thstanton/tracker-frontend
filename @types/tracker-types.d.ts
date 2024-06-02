export type Click = {
  id: number;
  createdAt: Date;
  ipAddress: string;
  identifier: Identifier;
  identifierId: number;
  destination: Destination;
  destinationId: number;
  isRead: boolean;
};

export type ChartData = {
  date: Date;
  clicks: number;
};

export type Destination = {
  id: number;
  url: string;
  name: string;
  slug: string;
  owner: User;
  userId: number;
  clicks: Click[];
  _count?: {
    clicks: number;
  };
};

export type DestinationCreate = {
  url: string;
  name: string;
};

export type DestinationUpdate = DestinationCreate & {
  id: string;
};

export type Identifier = {
  id: number;
  name: string;
  clicks: Click[];
};

export type User = {
  id: number;
  email: string;
  password?: string;
  destination: Destination[];
};
