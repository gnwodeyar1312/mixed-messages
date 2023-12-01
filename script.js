// Horoscope Generator, below is the data for horoscope generator which will be generated randomnly

const horoscopeData = {
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    traits: [
        ['Energetic', 'Courageous', 'Confident'],
        ['Patient', 'Practical', 'Dependable'],
        ['Adaptable', 'Curious', 'Eloquent'],
        ['Intuitive', 'Compassionate', 'Protective'],
        ['Creative', 'Passionate', 'Dignified'],
        ['Analytical', 'Kind', 'Hardworking'],
        ['Diplomatic', 'Harmonious', 'Charming'],
        ['Resourceful', 'Brave', 'Determined'],
        ['Optimistic', 'Adventurous', 'Philosophical'],
        ['Responsible', 'Disciplined', 'Cautious'],
        ['Innovative', 'Humanitarian', 'Independent'],
        ['Imaginative', 'Compassionate', 'Intuitive']
    ],
    predictions: [
        'You may find new opportunities in your career. Embrace change and take calculated risks.',
        'Focus on your relationships today. A conversation may lead to a new understanding.',
        'Your creativity will shine today. Explore new hobbies or activities.',
        'Trust your instincts today. Your inner wisdom will guide you in the right direction.',
        'Express your passions openly. Your enthusiasm will inspire others.',
        'Stay focused on your tasks today. Your hard work will pay off soon.',
        'Seek harmony in your interactions today. Your diplomatic approach will bring positive outcomes.',
        'Embrace challenges courageously. Your determination will lead to success.',
        'Be open to new experiences. An adventure awaits you today.',
        'Maintain your discipline and responsibility. It will bring you long-term benefits.',
        'Your uniqueness is your strength. Embrace your individuality today.',
        'Listen to your intuition. It will provide valuable insights.'
    ],
};


//Creating a random function to get random number 
const getRandomNumber = (num) =>{
    return Math.floor(Math.random() * num)
}


//creating an empty array to store the randomly selected horoscope data
let yourHoroscope = [];

for(let data in horoscopeData){
    let getIndex = getRandomNumber(horoscopeData[data].length)

    //By using the horoscope data object properties we will add it to yourHoroscope array

    switch(data){
        case 'signs':
            yourHoroscope.push(`Your sign is: "${horoscopeData[data][getIndex]}."`);
            break;
        case 'traits':
            yourHoroscope.push(`Your traits are:  "${horoscopeData[data][getIndex]}."`);
            break;
        case 'predictions':
            yourHoroscope.push(`Your prediction of your sign is: "${horoscopeData[data][getIndex]}."`);
            break;
        default:
            yourHoroscope.push(`There is no proper data`);
            break;
    }
}


//Finally Prinitng the data
const showHoroscopeData = (datas) => {

    const format = yourHoroscope.join('\n');
    console.log(format);
}

showHoroscopeData(yourHoroscope)




