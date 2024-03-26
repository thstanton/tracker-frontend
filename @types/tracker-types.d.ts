export type Click = {
    id: number;
    createdAt: Date;
    ipAddress: string;
    identifier: Identifier;
    destination: Destination;
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
    }
};

export type DestinationCreate = {
    url: string;
    name: string;
    slug: string;
}

export type Identifier = {
    id: number;
    name: string;
    clicks: Click[];
};
  
export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    destination: Destination[];
};
  