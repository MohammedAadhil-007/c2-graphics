// images

import service1 from '../assets/services/Little-Wishes.jpg'
import service2 from '../assets/services/Coming-of-Age.jpg'
import service3 from '../assets/services/Roots-of-Love.jpg'
import service4 from '../assets/services/Solo-Glam.jpg'
import service5 from '../assets/services/Made-to-Match.jpg'
import service6 from '../assets/services/Tying-Knots.jpg'
import service7 from '../assets/services/Furry-Friends.jpg'
import service8 from '../assets/services/New-Chapter.jpg'

export type ServicesType = {
  id: string
  title: string
  description?: string
  source: string
  packages?: string[]
  price?: number
}[]

const servicesData: ServicesType = [
  {
    id: 'price_1MwmuuLZfLpJv2G9jfbrdhki',
    title: 'Little Wishes',
    source: service1,
    description:
      "This is a great way to capture the precious moments of your baby's early life, creating memories that you can treasure for a lifetime.",
    packages: ['1pc 8R portrait', '2pcs 3R potraits', '3pcs 2R portraits'],
    price: 1400,
  },
  {
    id: 'price_1MxXZNLZfLpJv2G9aZF10JaN',
    title: 'Coming of Age',
    source: service2,
    description:
      'Capture your special day with a birthday photoshoot. Get ideas for poses, outfits, and props to create the perfect memories to cherish for years to come.',
    packages: ['1 pc 16x20 framed print', '1 pc 8R', '2pc 3R', '3pcs 2R'],
    price: 1500,
  },
  {
    id: 'price_1N5qOvLZfLpJv2G9JK7cmRYZ',
    title: 'Roots of Love',
    source: service3,
    description:
      'From the laughter to the tears, the moments spent with family are priceless. Our family portrait sessions are the perfect way to capture the love and joy shared between you and your loved ones. ',
    packages: [
      '11 x 14',
      '16 x 20',
      '20 x 24',
      '20 x 30',
      '30 x 40',
      '40 x 50',
    ],
    price: 3800,
  },
  {
    id: 'price_1MxXXALZfLpJv2G9BISngAcy',
    title: 'Solo Glam',
    source: service4,
    description:
      'Step into the spotlight and let your beauty shine with our solo glam photoshoots - because sometimes, all you need is a little glam and a lot of confidence!',
    packages: ['1 pc 8R portrait', '2 pcs 3R portraits', '3pcs 2R portraits'],
    price: 1500,
  },
  {
    id: 'price_1N5qORLZfLpJv2G98YtSxza5',
    title: 'Made to Match',
    source: service5,
    description:
      'Two hearts beating as one, two souls intertwined in love. Our couple photoshoots are the perfect way to capture the magic and beauty of your love story.',
    packages: ['1 pc 8R portrait', '2 pcs 3R portraits', '3pcs 2R portraits'],
    price: 1800,
  },
  {
    id: 'price_1MxXZmLZfLpJv2G9kHkrY4Jf',
    title: 'Tying Knots',
    source: service6,
    description:
      'Two hearts beating as one, two souls intertwined in love. Our couple photoshoots are the perfect way to capture the magic and beauty of your love story.',
    packages: [
      '1 pc 20x24 blow-up frame',
      '1 pc 8R portraits',
      '2pcs 3R',
      '3 pcs 2R',
    ],
    price: 1800,
  },
  {
    id: 'price_1MxXWTLZfLpJv2G9v7cSklSS',
    title: 'Furry Friends',
    source: service7,
    description:
      'Pet portraits are a beautiful way to capture the unique personalities and characteristics of our beloved furry friends. A pet portrait session provides a way to celebrate their individuality and create timeless memories that can be cherished for years to come.',
    packages: ['1 pc 8R portraits', '2pcs 3R portraits', '3pcs 2R portraits'],
    price: 1200,
  },
  {
    id: 'price_1MxXYcLZfLpJv2G9NQbHr5K2',
    title: 'New Chapter',
    source: service8,
    description:
      "Graduation is a major milestone in one's academic journey and marks the culmination of years of hard work and dedication. It is a time to celebrate achievements, accomplishments, and new beginnings.",
    packages: ['1 pc 8R portraits', '2pcs 3R portraits', '3pcs 2R portraits'],
    price: 1500,
  },
]

export default servicesData
