import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default{
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'faq'}),
    {
      name: 'title',
      type: 'string',
      title: 'Question',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Answer'
    }
    
  ],

  
    
  
}
