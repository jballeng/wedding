import client from '../../sanity/sanity.client'
import { createClient } from "next-sanity"
import {config} from '../../utils/sanity-config'
import {useState, useEffect} from 'react'

const getClient = () => createClient(
  {
    ...config, 
    useCdn: false, 
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  }
)

export default function MoveToGuest(props){
  const [isPublishing, setIsPublishing] = useState(false)
  
 
  useEffect(() => {
    

    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])
    let guest = []
    return {
      disabled: isPublishing,
      label: isPublishing ? 'Processing...' : 'Move to Guest',
      onHandle: () => {
        setIsPublishing(true)
        client.getDocument(props.id).then((data) => {
          const test = {
            _type: 'guest',
            _id: data.firstName + data.middleName + data.lastName + 'guest',
            email: data.email,
            extraInfo: data.extraInfo,
            firstName: data.firstName,
            fullName: data.fullName,
            lastName: data.lastName,
            middleName: data.middleName,
            phone: data.phone,
            address: {
              address1: data.address.address1,
              address2: data.address.address2,
              city: data.address.city,
              state: data.address.state,
              zipCode: data.address.zipCode,
            },
          }
          return test
        })
        .then((res) => {
          if(res){
            getClient().create(res).then((res) => {
              if(res){
                window.alert('Guest Moved Successfully!')
                getClient().delete(props.id).then((del) => {
                  console.log(del)
                })
              }
            }).catch((err) => console.error(err))
          }else{
            window.alert('Looks like we got an issue')
          }
        })
        .catch(error => console.log(error))
        .finally(() => setIsPublishing(false))
      }    
    } 
  }