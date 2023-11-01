import { TextUnderline, ColoredText } from '../components/portableTextComponents'
import React from 'react'

export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Underline',
            value: 'underline',
            blockEditor: {
              render: TextUnderline,
              icon: () => (
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M2 13.5h11M3.5 1v6.5a4 4 0 108 0V1" stroke="currentColor" />
                </svg>
              ),
            },
          },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
              {
                name: 'blank',
                title: 'open in new window',
                type: 'boolean',
                initialValue: true,
              },
            //   {
            //     name: 'color',
            //     type: 'color',
            //     title: 'Text color',
            //   },
            //   {
            //     name: 'highlight',
            //     type: 'color',
            //     title: 'Text Highlight',
            //   },
            ],
            blockEditor: {
              render: ColoredText,
            },
          },
        //   {
        //     name: 'color',
        //     title: 'Color',
        //     type: 'object',
        //     fields: [
        //       {
        //         name: 'color',
        //         type: 'color',
        //         title: 'Text color',
        //       },
        //       {
        //         name: 'highlight',
        //         type: 'color',
        //         title: 'Text Highlight',
        //       },
        //     ],
        //     blockEditor: {
        //       render: ColoredText,
        //       icon: () => (
        //         <svg
        //           viewBox="0 0 15 15"
        //           fill="none"
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="15"
        //           height="15"
        //         >
        //           <path
        //             d="M6.086 2.914l-.354-.353.354.353zM1.914 7.086l-.353-.354.353.354zm0 2.828l.354-.353-.354.353zm3.172 3.172l.353-.354-.353.354zm2.828 0l.354.353-.354-.353zm4.172-4.172l-.354-.353.354.353zm0-2.828l.353-.354-.353.354zM8.914 2.914l-.353.354.353-.354zm3.767 7.586l.353-.354-.353-.353-.354.353.354.354zm1.18 1.18l-.353.354.354-.353zM11.639 14l.312-.39-.312.39zm2.086 0l-.312-.39.312.39zM5.732 2.56L1.561 6.733l.707.707 4.171-4.171-.707-.707zm-4.171 7.708l3.171 3.171.707-.707-3.171-3.171-.707.707zm6.707 3.171l4.171-4.171-.707-.707-4.171 4.171.707.707zm4.171-7.707L9.268 2.561l-.707.707 3.171 3.171.707-.707zm0 3.536a2.5 2.5 0 000-3.536l-.707.707a1.5 1.5 0 010 2.122l.707.707zm-7.707 4.171a2.5 2.5 0 003.536 0l-.707-.707a1.5 1.5 0 01-2.122 0l-.707.707zM1.561 6.732a2.5 2.5 0 000 3.536l.707-.707a1.5 1.5 0 010-2.122l-.707-.707zm4.878-3.464a1.5 1.5 0 012.122 0l.707-.707a2.5 2.5 0 00-3.536 0l.707.707zM7 7V2.5H6V7h1zM2 2.5v4h1v-4H2zM4.5 0A2.5 2.5 0 002 2.5h1A1.5 1.5 0 014.5 1V0zM7 2.5A2.5 2.5 0 004.5 0v1A1.5 1.5 0 016 2.5h1zM1.5 10h10V9h-10v1zm10.827.854l1.181 1.18.707-.707-1.18-1.18-.708.707zm-.473 1.18l1.18-1.18-.707-.708-1.18 1.181.707.707zm.096 1.576c-.29-.232-.422-.51-.438-.77-.015-.257.081-.545.342-.806l-.707-.707c-.444.444-.667 1.004-.633 1.575.035.569.324 1.099.811 1.488l.625-.78zm1.462 0a1.17 1.17 0 01-1.462 0l-.625.78a2.17 2.17 0 002.711 0l-.624-.78zm.096-1.576c.26.26.357.549.341.807-.016.259-.147.537-.437.769l.624.78c.487-.39.777-.919.811-1.489.035-.57-.188-1.13-.632-1.574l-.707.707z"
        //             fill="currentColor"
        //           ></path>
        //         </svg>
        //       ),
        //     },
        //   },
        ],
      },
    },
    
  ],
}
