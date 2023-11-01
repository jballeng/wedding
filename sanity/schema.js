import faq from './schemas/faq'
import guest from './schemas/guest'
import guestlist from './schemas/guestlist'
import offList from './schemas/offList'
import duplicate from './schemas/duplicate'
import imageGrid from './schemas/images'
import travel from './schemas/travel'
import accom from './schemas/accomodation'
import bodyPortableText from './schemas/objects/bodyPortableText'
import portableText from './schemas/objects/portableText'
import section from './schemas/objects/section'
export const schema = {
  types: [
    guestlist, 
    guest, 
    offList, 
    faq, 
    duplicate, 
    imageGrid,
    travel,
    bodyPortableText,
    portableText,
    section,
    accom
  ]
}
