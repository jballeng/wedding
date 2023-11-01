import portableText from './portableText'

const styles = portableText.of[0].styles
const lists = portableText.of[0].lists
const marks = portableText.of[0].marks

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles,
      lists,
      marks,
    },
   
  ],
}
