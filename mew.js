const phrase1 = 'you are shining my sun today';
const phrase2 = 'you have a beautiful day darling';
const phrase3 = 'eat a fruit and get rest';
const phrase4 = 'rise and shine'; 
const phrase5 = 'you can be whoever you want from now on';

const phrases = [phrase1, phrase2, phrase3, phrase4, phrase5];

//generating a random phrase from our array - phrases, then loging it 

const phraseGenerator = array => {
    const randomPhrase = Math.floor(Math.random() * array.length);
    console.log(phrases[randomPhrase]);
}

phraseGenerator(phrases);