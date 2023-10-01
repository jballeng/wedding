/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import MoveToGuest from './sanity/actions/actions'

export default defineConfig({
  name: 'wedding-backend',
  title: 'Wedding Backend',
  basePath: '/studio',
  projectId: projectId,
  dataset: dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: schema,
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Sections')
          .items([
            S.listItem()
              .title('Guest List')
              .schemaType('guestlist')
              .child(S.documentTypeList('guestlist').title('Guest List')),
            S.listItem()
              .title('Guest Info')
              .schemaType('guest')
              .child(S.documentTypeList('guest').title('Guest')),
            S.listItem()
              .title('Off List')
              .schemaType('offList')
              .child(S.documentTypeList('offList').title('Off list guests')),
            S.listItem()
              .title('Duplicate Entries')
              .schemaType('duplicate')
              .child(S.documentTypeList('duplicate').title('Duplicate Entries')),
            
            orderableDocumentListDeskItem({type: 'faq', S, context}),
            orderableDocumentListDeskItem({type: 'imageGrid', S, context})
          ])
      }
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  document: {
    actions: (prev, context) => {
      return context.schemaType === 'offList' ? [MoveToGuest, ...prev] : prev;
    }
  },
})
