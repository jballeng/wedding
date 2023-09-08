import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getGuestList(firstName, lastName) {
  return client.fetch(
    groq`*[_type == "guestlist" && firstName match "${firstName}" && lastName match "${lastName}"]{
      register,
    }
     
    `
  );
}
export async function getFaqList() {
    return client.fetch(
      groq`*[_type == "faq"]{
        _id,
        title,
        body,
      }`
    );
  }
