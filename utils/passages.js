let passageWords = ['hat', 'cat', 'bat', 'sat', 'fat', 'snoop', 'program', 'shame', 'name', 'lame', 'eat', 'love', 'rice', 'ice', 'jewelry', 'onerous', 'ostentatious', 'gore', 'bludgeon', 'apt', 'awry', 'fly', 'by', 'hi',
'they', 'the', 'I', 'my', 'sigh', 'lie', 'tie', 'pie', 'apples', 'bananas', 'oranges', 'grapes', 'code', 'work','hard', 'lemon', 'yeet', 'child', 'karen', 'video', 'games', 'medicine', 'violence', 'anger', 'happiness', 'sadness', 'joy', 'eggs', 'sacrifice'
]
let sentences = [
    'How does it feel to have completed our typing tutorial?',
    'Does anyone know where the rice is?',
    'I like to eat bananas.',
    'Zacharius went out one day to play games with deSean',
    'I need food.',
    'Would you consider yourself a healthy individual?',
    'Green should have smelled more tranquil, but somehow it just tasted rotten.',
    'The group quickly understood that toxic waste was the most effective barrier to use against the zombies.',
    'Martha came to the conclusion that shake weights are a great gift for any occasion.',
    'She found his complete dullness interesting.',
    'I ate a sock because people on the Internet told me to.',
    'The team members were hard to tell apart since they all wore their hair in a ponytail.',
    'She thought there\'d be sufficient time if she hid her watch.',
    'Erin accidentally created a new universe.',
    'He wondered if it could be called a beach if there was no sand.'
]
let paragraphs = [
    'How does it feel to have completed our typing tutorial? Before you call yourself an expert, however, just pass this quick quiz. Do not be lazy, for if you do a careless job on this evaluation, you should take it again. Make your best effort. Doing great? Almost finished! Now time to get your score!',
    "They want to deliver vast amounts of information over the internet. And again, the internet is not something you just dump something on. It's not a truck. It's a series of tubes! And if you don't understand those tubes can be filled and if they are filled, when you put your message in, it gets in line and its going to be delayed by anyone that puts into that tube enormous amounts of material, enormous amounts of material.",
    'The name "echo" comes from the Greek nymph Echo. According to Greek mythology, Echo was a Nymph who had the job of talking incessantly to Hera, the Queen of the Gods. Hera caught on to Echo\'s trick and cursed her to only be able to say what others had just said - hence the word "echo". "A duck\'s quack doesn\'t echo," is a much quoted scientific myth. The truth is that a duck\'s quack in fact, does echo, however it may be difficult to hear.',
    'The Walrus and the Carpenter walked on a mile or so, and then rested on a rock - conveniently low: and all the little oysters stood and waited in a row. "The time has come," the Walrus said, "To talk of many things: Of shoes-and ships-and sealing-wax-Of cabbages-and kings-And why the sea is boiling hot-And whether pigs have wings.',
    'Extreme Ironing (or EI) is an extreme sport and a performance art in which people take an ironing board to a remote location and iron a few items of clothing. According to the official website, extreme ironing is "the latest danger sport that combines the thrills of an extreme outdoor activity with the satisfaction of a well-pressed shirt." Part of the attraction and interest the media has towards extreme ironing seems to centre on the issue of whether it is really a sport or not. It is widely considered to be tongue-in-cheek.',
    'Though the traditional notion of rain in the Western World is negative, rain can also bring joy, as some consider it to be soothing or enjoy the aesthetic appeal of it. In dry places, such as parts of Africa, Australia, India, and the Middle East, rain is greeted with euphoria. (In Botswana, the Setswana word for rain, "pula," is used as the name of the national currency, in recognition of the economic importance of rain in this desert country.).'
]

let passageWordsString = `
    the be to of and a in that have I it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us
`
const splitPassageWordsString = passageWordsString.split(' ')
passageWords = [
    ...passageWords,
    ...splitPassageWordsString
]

export {passageWords, sentences, paragraphs}

