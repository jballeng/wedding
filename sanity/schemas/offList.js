export default {
    name: 'offList',
    title: 'Non Guest List Info',
    type: 'document',
    fields: [
      
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'middleName',
        title: 'Middle Name',
        type: 'string',
      },
      {
        name: 'suffix',
        title: 'Suffix',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      
      {
        name: 'address',
        title: 'Address',
        type: 'object',
        fields: [
          {
            name: 'address1',
            title: 'Address Line 1',
            type: 'string',
          },
          {
            name: 'address2',
            title: 'Address Line 2',
            type: 'string',
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
          },
          {
            name: 'state',
            title: 'State',
            type: 'string',
          },
          {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string',
          },
        ]
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'extraInfo',
        title: 'Extra Info',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'lastName',
        subtitle: 'firstName'
      },
    },
  }
  