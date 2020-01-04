const dogs = [
  {
    id: 'dog1',
    name: 'Murphy',
    imageUrl: 'https://newcastlebeach.org/images/mutt-bulldog-5.jpg',
    owner: 'Mandy',
    description: 'Brown Mutt',
  },
  {
    id: 'dog2',
    name: 'Jax',
    imageUrl: 'http://gsrelite.co.uk/cms/wp-content/uploads/2018/04/Jax-3.jpg',
    owner: 'Ray',
    description: 'German Shepherd Dog',
  },
  {
    id: 'dog3',
    name: 'Yeti',
    imageUrl: 'https://www.swissridgekennels.com/wp-content/uploads/gigi-8.jpg',
    owner: 'Janel',
    description: 'Golden Doodle',
  },
  {
    id: 'dog4',
    name: 'Mali',
    imageUrl: 'http://cdn.akc.org/Cairn_terrier_header_image.jpg',
    owner: 'Kat',
    description: 'Cairn Terrier',
  },
];

const getAllDogs = () => dogs;

export default { getAllDogs };
