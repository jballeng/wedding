import { groq } from "next-sanity"
import { createClient } from "next-sanity"
import { config } from "./sanity-config"
import guestlist from "components/Contact/guestlist(1).json"

const createNewSanityUser = (user, type) => {
  const fullName = user.firstName + ' ' + user.middleName + ' ' + user.lastName
  return {

    _type: type,
    _id: (fullName).replace(/\s+/g, ''),
    fullName: fullName,
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
    suffix: user.suffix,
    email: user.email,
    address1: user.address1,
    address2: user.address2,
    city: user.city,
    state: user.state,

    address: {
      address1: user.address.address1,
      address2: user.address.address2,
      city: user.address.city,
      state: user.address.state,
      zipCode: user.address.zipCode,

    },
    phone: user.phone,
    extraInfo: user.extra

  }

}

const createGuestList = (listitem) => {
  
  return {
    _type: 'guestlist',
    firstName: listitem.firstName,
    lastName: listitem.lastName,
    group: listitem.group,

  }
}
export const guestListBulk = () => {
  let registerUserMutation = []
  const list = guestlist
  const firstName = list.firstName
  const lastName = list.lastName
  const group = list.group
  const length = Object.keys(firstName).length
 
  for(let i=1; i<length; i++){
    let guest = {
      firstName: firstName[i],
      lastName: lastName[i],
      group: group[i]
    }
    registerUserMutation.push({
      create: createGuestList(guest)
  })
  }
  
  return handleMutations(registerUserMutation)
}
export const createSanityUser = async (user, type) => {
  const registerUserMutation = []
  registerUserMutation.push({
    createOrReplace: createNewSanityUser(user, type)
  })
  return handleMutations(registerUserMutation)
}
const deleteQuery = (query) => {
  return {
    query: query

  }
}
export const deleteThings = () => {
  const registerUserMutation = []
  registerUserMutation.push({
    delete: deleteQuery(queryOffList)
  })
  return handleMutations(registerUserMutation)
}

const handleMutations = async (mutations) => {
  
  fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-14/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
    , {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mutations
        // returnIds: true,
        // returnDocuments: true,
      }),
    }
  )
    .then((response) => response.json())
    .then((results) => {
      return results
    })
    // .then((result) => {
    //   return result
    // })
    // .then((result) => {
    //   console.log(result)
    //   return result
    // })
    .catch((error) => {
      console.error(error)
      return error
    })
  
}

export const queryUsers = groq`*[_type == 'guestList'] | order(_id){
  _id, firstName, lastName
}`
const queryGuestList = groq`*[_type == 'guestlist']`
const queryOffList = groq`*[_type == 'guest']`

export const getClient = () => createClient(
  {
    ...config, 
    useCdn: false, 
    token: process.env.SANITY_API_READ_TOKEN,
  }
)

export const guestInfo = () => {
  return(
    getClient()
      .fetch(queryGuestList)
      // .then((response) => response.json())
      // .then((results) => {
      //   return results
      // })
  )
}


