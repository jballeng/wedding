export default {
    name: 'guestlist',
    title: 'Guest List',
    type: 'document',
    fields: [
        {
            name: 'register',
            title: 'Registered?',
            type: 'boolean',
           
            
        },
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'group',
            title: 'Group Name',
            type: 'string',

        },
        {
          name: 'plusOne',
          title: 'Plus One',
          type: 'boolean'
        },
        
    ],
    
    
    preview: {
        select: {
          title: 'firstName',
          subtitle: 'group'
        },
      },
}