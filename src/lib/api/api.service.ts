"use server";
import {
  ChartData,
  Click,
  Destination,
  DestinationCreate,
  DestinationUpdate,
  Identifier,
} from "../../../@types/tracker-types";
import { getToken } from "../auth/auth.service";

export async function fetchLinks(): Promise<Destination[] | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/destinations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.log(response)
      throw new Error("Error");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchLink(id: number): Promise<Destination | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/destinations/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createLink({
  name,
  url,
  slug,
}: DestinationCreate): Promise<Destination | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/destinations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ name, url, slug }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteLink(id: number) {
  try {
    const response = await fetch(`${process.env.API_URL}/destinations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateLink({
  id,
  name,
  url,
  slug,
}: DestinationUpdate): Promise<Destination | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/destinations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ name, url, slug }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchClicks(): Promise<Click[] | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/clicks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchChartData(): Promise<ChartData[] | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/clicks/chart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchIdentifiers(): Promise<Identifier[] | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/identifiers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
