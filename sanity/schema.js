import faq from './schemas/faq'
import guest from './schemas/guest'
import guestlist from './schemas/guestlist'
import offList from './schemas/offList'
import duplicate from './schemas/duplicate'
import imageGrid from './schemas/images'
export const schema = {
  types: [guestlist, guest, offList, faq, duplicate, imageGrid]
}
