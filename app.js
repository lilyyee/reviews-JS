// local reviews data
const reviews = [
  {
    id: 1,
    name: 'louise',
    job: 'nurse',
    img: './img/randompic1.jpeg',
    text: `Lily has the courage to explore new challenges, opportunities, and experiences. She is self-directed and doesn't need someone to direct or motivate her.  She is also a great team player and initiator. I also appreciate her willingness to share her knowledge.`,
  },
  {
    id: 2,
    name: 'susan',
    job: 'nurse',
    img: './img/randompic2.jpeg',
    text: `Lily's strengths are her positivity, great energy, being able to learn quickly and diligently.  She's bright and works well with different personalities.  She also works well independently and as part of a team.`,
  },
  {
    id: 3,
    name: 'aubrey',
    job: 'engineer',
    img: './img/randompic3.jpeg',
    text: `Lily is an intelligent, passionate person who demonstrates compassion and empathy for those around her. She is always willing to take time to help anyone. She is an excellent planner who has a keen attention to detail and takes pride in being thorough and accurate.`,
  },
  {
    id: 4,
    name: 'michael',
    job: 'sales',
    img: './img/randompic4.jpeg',
    text: `Lily is a very hard working, detailed, and focused person.  She has an uncanny ability to meet and exceed deadlines. She loves to learn and simplify things where it makes sense to her and others.  She is very curious and looks to improve things.`,
  },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
