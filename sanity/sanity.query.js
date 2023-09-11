import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getGuestList(firstName, lastName) {
  return client.fetch(
    groq`*[_type == "guestlist" && firstName match "${firstName}" && lastName match "${lastName}"]{
      _id,
      firstName,
      lastName,
      register,
    }
     
    `
  );
}
export async function getFaqList() {
    return client.fetch(
      groq`*[_type == "faq"] | order(orderRank)
        
      `
    );
  }
  
export async function getImages(){
  return client.fetch(
    groq`*[_type == "imageGrid"] | order(orderRank)
      
    `
  );
}
