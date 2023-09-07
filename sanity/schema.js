import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import guest from './schemas/guest'
import people from './schemas/people'
import guestlist from './schemas/guestlist'
import offList from './schemas/offList'

export const schema = {
  types: [blockContent, guestlist, guest, offList]
}
