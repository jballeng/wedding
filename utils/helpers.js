import { groq } from "next-sanity"
import { createClient } from "next-sanity"
import { config } from "./sanity-config"
import { useState, useEffect } from "react"

const setRegister = (_id) => {
  return {
    id: _id,
    set: {
      register: true,
    }
  }
}

export const setListRegister = async (_id) => {
  const registerUserMutation = []
  registerUserMutation.push({
    patch: setRegister(_id)
  })
  return handleMutations(registerUserMutation)
}
export const createSanityUser = async (user, type) => {
  const registerUserMutation = []
  registerUserMutation.push({
    createOrReplace: createNewSanityUser(user, type)
  })
  return handleMutations(registerUserMutation)
}

const createNewSanityUser = (user, type) => {
  let fullName = user.firstName + ' ' + user.middleName + ' ' + user.lastName
  let id = user.firstName + user.middleName + user.lastName + type
  return {
    _type: type,
    _id: id,
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
      }),
    }
  )
    .then((response) => response.json())
    .then((results) => {
      return results
    })
    .catch((error) => {
      console.error(error)
      return error
    })
  
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
  )
}

export const isMobile = () => {
  const size = useWindowSize()
  return size.width < 992
}
function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

