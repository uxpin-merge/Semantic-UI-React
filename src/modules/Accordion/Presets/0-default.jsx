/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Accordion from '../Accordion'

const panels = [
  {
    key: 'what-is-dog',
    title: 'What is a dog?',
    content: [
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
      'guest in many households across the world.',
    ].join(' '),
  },
  {
    key: 'kinds-of-dogs',
    title: 'What kinds of dogs are there?',
    content: [
      'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
      'that they find to be compatible with their own lifestyle and desires from a companion.',
    ].join(' '),
  },
  {
    key: 'acquire-dog',
    title: 'How do you acquire a dog?',
    content: [
      'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private',
      'owner allows you to assess the pedigree and upbringing of your dog before choosing to',
      'take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog',
      'who may not find one so readily.',
    ].join(' '),
  },
]

export default <Accordion defaultActiveIndex={0} panels={panels} />
