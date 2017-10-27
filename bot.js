const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var commands = {
    who: 'The names **Professor Charleston**! As a Professor I research the art of capturing and taming Pokemon. I am also an active villager in Torak Town! Come visit me!',
    faq1: 'Q. How do I make a trainer? A. Go into #trainer-info and enter your characters names, starter and gender! I remember those beginning days!',
    faq2: 'Q. What can I choose as a starter? A. Being a Professor, I give out the choices of **any** starter pokemon in other regions. Those regions would be Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos and Alola!',
    faq3: 'Q. So I signed up, how do I begin the roleplaying? A. Well haha, you can start from any town, just make sure you keep to the roads! Always best to start with others, or you can go it alone, those are the trainers who end up with Team Pyro.',
    faq4: 'Q. How do I catch a Pokemon? A. As you go about your adventure, occasionally you may see the Wild Grass bot announce that a Pokemon has been spotted, this is your opportunity to catch it! Go for it! Just make sure you have Pokeballs, the president and I will keep track of that!',
    faq5: 'Q. How do I battle on my own? A. You must act out the battles! Make them epic and slow, or quick and easy, it is up to you.',
    faq6: 'Q. How do I battle against another user? A. You must still act out your battles, but do not take whole control of the battle, let both trainers decide the flow. A winner can be decided however you and the other player wish.',
    faq7: 'Q. I want to battle a gym, how do I do this? A. An ambitious trainer! I like it! You must DM or @ either Ace or Flameshot, and then one of them will take the mantle of the leader, while you battle them. Then things are the same as talked about in Faq 6. You can see that with the command /faq6.',
    faq8: 'Q. I want to challenge the Pokemon League, how do I go about this? A. The big leagues! Firstly, you must have collected and earned 8 badges! It is a lot, I know. Then, DM or @ either Ace or Flameshot, and they will take the reigns of the Elite 4 and Champion for you to battle.',
    sovrakogym: 'Sovrako Gym is run by Derek, the Grass type Gym Leader. He is quite annoying to be honest, such a bore with his constant stories. But he is strong!',
    reggaegym: 'Reggae Gym is run by Andrew, the Ground type Gym Leader. A tough cookie, that one, very strong.',
    illumgym: 'Illum Gym is run by Alicia, the Electric type Gym Leader. Loves her science, and man is she good at it. And not too shabby looks-wise, if you get what I am saying. Rawr.',
    tushmooregym: 'Rushmoore Gym is run by Kate and Johnny, the two Flying type Gym Leaders. They work as a pair, and only battle in Double Battles, very tough indeed.',
    volcantroplisgym: 'Volcantroplis Gym is run by Ringo, the Fire type Gym Leader. He's calm and quiet, just like this old man likes it, but VERY strong! Do not underesimate him just because he barely talks!'
    torakgym: 'I am not allowed to spoil this one, have fun figuring it out. Haha.',
    hokkirasgym: 'Hokkiras Gym is run by Sir Freeze. He's not very n*ice*, and he makes a lot of ice puns, so prepare yourself!',
    occultgym: 'The lone wolf gym in Occult City? Why that's run by Alfred Tailsman, some weird old man who uses ghosts with perfection.'
};

client.on('message', message => {
    if (message.content.substr(0, 1) !== '/') {
        return;
    }
    for (var i in commands) {
        if (message.content === '.' + commands[i]) {
            break;
        }
    }
    message.reply(commands[i]);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzczMzY3MDQzNTY0NzY1MTg2.DNRssA.sMeFAdR_g_dUgcDHWjb7Pl_MDLQ);
