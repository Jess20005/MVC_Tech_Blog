const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    text: 'Wow who knew you could make a digital dog! Technology is amazing!',
  },
  {
    user_id: 2,
    post_id: 2,
    text: 'Great info thanks for sharing!',
  },
  {
    user_id: 3,
    post_id: 3,
    text: 'Wow this is so deep!!',
  },
  {
    user_id: 4,
    post_id: 4,
    text:
      "There is legit nothing tech can't come up with. This is creatively insane!",
  },
  {
    user_id: 5,
    post_id: 5,
    text: 'Interesting read, thanks for sharing!',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
