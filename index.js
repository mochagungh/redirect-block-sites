const quotes = [
  'did it reach you ?',
  'it takes courage to sail in uncharted waters',
  'im here ..',
  "you're just you, no matter what",
  'Stop worrying about the world ending today. It’s already tomorrow in Australia.',
  'All you need is love. But a little chocolate now and then doesn’t hurt.',
  'Learning to ignore things is one of the great paths to inner peace.',
  'The less you want, the more you love.',
  'Fear is not evil, It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.',
  "don't worry, i know you can do it",
  "when you're depressed, it always help to lean your head on your arms.\n arms like to feel useful",
  'There is no monument dedicated to the memory of a committee.',
  "Wanting to be someone you're not is a waste of the person you are.",
  "If you can find a path with no obstacles, it probably doesn't lead anywhere.",
  'Mistakes are the portals of discovery.',
  'Death is a friend of ours; and he that is not ready to entertain him is not at home.',
  "Don't let yourself forget what it's like to be seventeen."
];

const backGrounds = [
  'salmon',
  '#FB8C00',
  'linear-gradient( 112.4deg,  rgba(176,174,225,1) 44.9%, rgba(135,197,235,1) 94.5% )',
  'linear-gradient( 65.5deg,  rgba(23,205,205,1) -15.1%, rgba(23,25,95,1) 71.5% )',
  'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )',
  'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))'
];

(function() {
  const activeQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  return (document.querySelector('.quotes').textContent = activeQuotes);
}.call(this));

(function() {
  const now = backGrounds[Math.floor(Math.random() * backGrounds.length)];
  return (document.querySelector('.wrapper').style.background = now);
}.call(this));
