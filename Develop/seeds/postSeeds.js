const { Post } = require('../models');

const postData = [
  {
    title: 'New York Returns Its Police ‘Robodog’ After a Public Outcry',
    content:
      'THE NEW YORK Police Department said Thursday it will stop using the “Digidog,” a four-legged robot occasionally deployed for recon in dangerous situations.',
    user_id: 1,
  },
  {
    title: 'How to Find a Covid-19 Vaccine Appointment in Your Area',
    content:
      "THE DATA IS in, and Covid-19 vaccines are working. They've been injected into tons of people around the world beyond the initial trials and have been found to be safe and effective.",
    user_id: 2,
  },
  {
    title: 'Black Pain Will Never Stop Trending',
    content:
      'WHAT IS AN image worth? Specifically, what is the image of a dead Black man worth? The story of his death, rather than the story of his life—is worth Hollywood’s highest distinction: Oscar gold.',
    user_id: 3,
  },
  {
    title: 'Video Game Microwave That Only Cooks While I Play',
    content:
      'What if we could play video games while we wait? YouTuber, engineer, and maker-extraordinaire Allen Pan puts together a dream appliance, a video game microwave that only cooks while he plays!',
    user_id: 4,
  },
  {
    title: 'Feds Arrest an Alleged $336M Bitcoin-Laundering Kingpin',
    content:
      'The IRS says it has finally identified the Russian-Swedish administrator behind that long-running anonymizing system and charged him with laundering hundreds of millions of dollars worth of bitcoins.',
    user_id: 5,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
