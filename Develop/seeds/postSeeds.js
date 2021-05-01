const { Post } = require('../models');

const postData = [
  {
    title: 'New York Returns Its Police ‘Robodog’ After a Public Outcry',
    content:
      'THE NEW YORK Police Department said Thursday it will stop using the “Digidog,” a four-legged robot occasionally deployed for recon in dangerous situations. NYPD officials confirmed in a statement it had terminated its contract and will return the dog to vendor Boston Dynamics. Last December, the agency leased the Digidog, nicknamed Spot, for $94,000.',
    user_id: 1,
  },
  {
    title: 'How to Find a Covid-19 Vaccine Appointment in Your Area',
    content:
      "THE DATA IS in, and Covid-19 vaccines are working. They've been injected into tons of people around the world beyond the initial trials and have been found to be safe and effective. The three vaccines available use unique technologies to stimulate an immune response in your body, but none of them involve injecting a live virus into your arm. In short, they cannot get you sick with Covid-19.",
    user_id: 2,
  },
  {
    title: 'Black Pain Will Never Stop Trending',
    content:
      'WHAT IS AN image worth? Specifically, what is the image of a dead Black man worth? If you had to guess, how much do you think an image of a Black man fatally wounded would go for, his body chilling against the pavement as a pool of blood— in the shape of Africa, just in case the symbolism wasn’t clear—forms next to him? Not sure? Too uncomfortable a thought? According to members of the Academy of Motion Picture Arts and Sciences, that man—and the story of his death, rather than the story of his life—is worth Hollywood’s highest distinction: Oscar gold.',
    user_id: 3,
  },
  {
    title: 'Video Game Microwave That Only Cooks While I Play',
    content:
      "What's the worst part of any microwave? The timer! All that time we spend just waiting for our microwaves to finish cooking...but what if that waiting was just a bit more fun? What if we could play video games while we wait? YouTuber, engineer, and maker-extraordinaire Allen Pan puts together a dream appliance, a video game microwave that only cooks while he plays! Check out Allen Pan on his YouTube channel:https://www.youtube.com/channel/UCVS89U86PwqzNkK2qYNbk5A",
    user_id: 4,
  },
  {
    title: 'Feds Arrest an Alleged $336M Bitcoin-Laundering Kingpin',
    content:
      "FOR A DECADE, Bitcoin Fog has offered to obscure the source and destination of its customers' cryptocurrency, making it one of the most venerable institutions in the dark web economy. Now the IRS says it has finally identified the Russian-Swedish administrator behind that long-running anonymizing system and charged him with laundering hundreds of millions of dollars worth of bitcoins, much of which was sent to or from dark web drug markets. What gave him away? The trail of his own decade-old digital transactions.",
    user_id: 5,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
