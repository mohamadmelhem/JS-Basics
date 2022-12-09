
const stringSize = (text) => {
    const result = text.length;
    return result;

}
const replaceCharacterE = (text) => {
    const result = text.replace('e', ' ');
    return result;
}
const concatString = (text1, text2) => {
    const result =  text1.concat(text2);
    return result;

}
const showChar5 = (text) => {
    const result = text.slice(4, 5);
    return result;

}
const showChar9 = (text) => {
    const result = text.slice(0, 9);
    return result;

}
const toCapitals = (text) => {
    const result = text.toUpperCase();
    return result;

}
const toLowerCase = (text) => {
    const result = text.toLowerCase();
    return result;

}
const removeSpaces = (text) => {
    const result = text.trim();
    return result;
}
const IsString = (text) => {
    const result = typeof (text) === 'string';
    return result;

}

const getExtension = (text) => {

    const result = text.split('.').pop();
    return result;
}
const countSpaces = (text) => {
    const result = text.split(" ").length - 1;
    return result;
}
const InverseString = (text) => {

    const result = text.split("").reverse().join("");
    return result;
}

const power = (x, y) => {
    const result = Math.pow(x, y);
    return result;
}
const absoluteValue = (num) => {
    const result = Math.abs(num);
    return result;

}
const absoluteValueArray = (array) => {
    const result = array.map(Math.abs);
    return result;
}
const circleSurface = (radius) => {
    const result = Math.round(Math.PI * Math.pow(radius, 2));
    return result;
}
const hypothenuse = (ab, ac) => {
    const result = Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
    return result;
}
const BMI = (weight, height) => {

    const result = Number((weight / (height * height)).toFixed(2));
    return result;

}

const createLanguagesArray = () => {
    const language = ["Html", "CSS", "Java", "PHP"];
    return language

}

const createNumbersArray = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    return numbers;
}

const replaceElement = (languages) => {
    languages.splice(2, 1, "Javascript");
    return languages;
}

const addElement = (languages) => {
    languages.splice(languages.length, 0, "Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.splice(0, 0, -2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',');
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}