export const images = {
  logo: '/images/logo.png',

  carousel: [
    '/images/carousel-1.jpg',
    '/images/carousel-2.jpg',
    '/images/carousel-3.jpg',
    '/images/carousel-4.jpg',
    '/images/carousel-5.jpg',
  ],

  gallery: Array.from({ length: 12 }, (_, i) => `/images/gallery-${i + 1}.jpg`),

  petFriendly: ['/images/pet-1.jpg', '/images/pet-2.jpg'],

  brunch: ['/images/brunch-1.jpg', '/images/brunch-2.jpg', '/images/brunch-3.jpg'],
}
