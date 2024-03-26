"use server";
import { Destination, DestinationCreate } from "../../../@types/tracker-types";
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
