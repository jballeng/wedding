import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default{
  name: 'accom',
  title: 'Accomodation Information',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'accom'}),
    {
      name: 'title',
      type: 'string',
      title: 'Section',
    },
    {
      name: 'section',
      type: 'array',
      title: 'Travel sections',
      of: [
        {
          type: 'text',
        },
      ],
    },
    {
      name: 'type',
      type: 'string',
      title: 'Section Type',
      options: {
        list: [
          {title: 'Checkbox', value: 'checkbox'}
        ],
      }
      
    }
  ],
}
