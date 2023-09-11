import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
    name: 'imageGrid',
    title: 'Images',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: 'imageGrid'}),
        {
            name: 'gridItem',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
        },
        
    ]
}