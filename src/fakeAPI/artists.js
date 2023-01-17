import {faker} from "@faker-js/faker";

const images = ["SailingCheese.jpg", "Movie.jpg", "NoMoreHeros.jpg", "OK.jpg", "GodChapter1.jpg"];

const genres = () => {
    const listLength = 1 + Math.floor(Math.random() * 3);
    return Array.from(Array(listLength), () => faker.music.genre());
}

const albumName = () => {
    const nameLength = 1 + Math.floor(Math.random() * 4);
    const randomWord = () => {
        const wordValue = 1 + (Math.random() * 3);
        if (wordValue < 2) return faker.commerce.productAdjective();
        if (wordValue < 3) return faker.commerce.productMaterial();
        if (wordValue < 3) return faker.animal.type();
        return faker.music.genre();
    }
    return Array.from(Array(nameLength), () => randomWord()).join(' ');
}
const albums = () => {
    const listLength = 3 + Math.floor(Math.random() * 13);
    return Array.from(Array(listLength), () => albumName());
}
const artist = () => {
    const name = faker.name.fullName();
    return ({
        id: `${name.trim()}_${Math.random().toString()}`,
        name,
        genres: genres(),
        followers: 100000 + Math.floor(Math.random() * 1000000),
        albums: albums(),
        image: faker.helpers.arrayElement(images)
    })
}

const getLists = num => {
    return Array.from(Array(num), () => artist());
}

export const getTopArtists = num => {
    return new Promise((resolve) => {
        resolve(Date.now());
    }).then(date => {
        const artists = getLists(num);
        return {
            date,
            artists,
        }
    });
}