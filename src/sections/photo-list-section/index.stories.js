import React from 'react'
import { array, withKnobs } from '@storybook/addon-knobs'
import RichTextSection from './index'

export default {
  title: 'Sections/Rich Text Section',
  decorators: [ withKnobs ]
}

const richText = {
  nodeType: 'document',
  data: {},
  content: [ {
    nodeType: 'unordered-list',
    content: [ {
      nodeType: 'list-item',
      content: [ {
        nodeType: 'paragraph',
        content: [ {
          nodeType: 'text',
          value: 'Item 1',
          marks: [],
          data: {}
        } ],
        data: {}
      }, {
        nodeType: 'unordered-list',
        content: [ {
          nodeType: 'list-item',
          content: [ {
            nodeType: 'paragraph',
            content: [ {
              nodeType: 'text',
              value: 'Sub-Item 1',
              marks: [],
              data: {}
            } ],
            data: {}
          } ],
          data: {}
        } ],
        data: {}
      } ],
      data: {}
    }, {
      nodeType: 'list-item',
      content: [ {
        nodeType: 'paragraph',
        content: [ {
          nodeType: 'text',
          value: 'Item 2',
          marks: [],
          data: {}
        } ],
        data: {}
      }, {
        nodeType: 'unordered-list',
        content: [ {
          nodeType: 'list-item',
          content: [ {
            nodeType: 'paragraph',
            content: [ {
              nodeType: 'text',
              value: 'Sub-Item 2',
              marks: [],
              data: {}
            } ],
            data: {}
          } ],
          data: {}
        } ],
        data: {}
      } ],
      data: {}
    }, {
      nodeType: 'list-item',
      content: [ {
        nodeType: 'paragraph',
        content: [ {
          nodeType: 'text',
          value: 'Item 3',
          marks: [],
          data: {}
        } ],
        data: {}
      }, {
        nodeType: 'unordered-list',
        content: [ {
          nodeType: 'list-item',
          content: [ {
            nodeType: 'paragraph',
            content: [ {
              nodeType: 'text',
              value: 'Sub-Item 3',
              marks: [],
              data: {}
            } ],
            data: {}
          } ],
          data: {}
        } ],
        data: {}
      } ],
      data: {}
    } ],
    data: {}
  },
  {
    nodeType: 'paragraph',
    content: [ {
      nodeType: 'text',
      value: '',
      marks: [],
      data: {}
    } ],
    data: {}
  } ]
}

const linkList = [
  {
    label: 'Instagram',
    href: '#',
    colorType: 'instagram'
  },
  {
    label: 'Facebook',
    href: '#',
    colorType: 'facebook'
  },
  {
    label: 'Linkedin',
    href: '#',
    colorType: 'linkedin'
  },
  {
    label: 'Github',
    href: '#',
    colorType: 'github'
  }
]

export const Default = () => {
  return (
    <RichTextSection
      title="About me"
      richText={richText}
      linkList={linkList}
    />
  )
}
