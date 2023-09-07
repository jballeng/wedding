export default {
    name: 'guestlist',
    title: 'Guest List',
    type: 'document',
    fields: [
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
    ],
    preview: {
        select: {
          title: 'firstName',
          subtitle: 'group'
        },
      },
}