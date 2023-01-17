import {faker} from "@faker-js/faker";

const albums = [
    {
        name: "Sailing The Seas Of Cheese",
        artist: "Primus",
        year: 1991,
        image: "SailingCheese.jpg",
        id: 1,
    },
    {
        name: "Movie",
        artist: "Holger Czukay",
        year: 2016,
        image: "Movie.jpg",
        id: 2,
    },
    {
        name: "No More Heros",
        artist: "The Stranglers",
        year: 1977,
        image: "NoMoreHeros.jpg",
        id: 3,
    },
    {
        name: "OK Computer",
        artist: "Radiohead",
        year: 1997,
        image: "OK.jpg",
        id: 4,
    },
    {
        name: "MADE BY GOD (Chapter 1)",
        artist: "Die Antwoord",
        year: 2017,
        image: "GodChapter1.jpg",
        id: 5,
    },
]

const song = () => {
    const title = faker.music.songName();
    return ({
        addDate: faker.date.recent(),
        title,
        length: faker.random.numeric(3, {bannedDigits: ['9', '8', '7', '6']}) / 100,
        album: albums[Math.floor(Math.random() * albums.length)],
        id: `${title.trim()}_${Math.random().toString()}`,
    })
}

const playlist = () => {
    const listLength = 10 + Math.floor(Math.random() * 30);
    const list = Array.from(Array(listLength), () => song());
    const name = `${faker.music.genre()} ${faker.commerce.productName()}`;
    return ({
        name,
        id: `${name.trim()}_${Math.random().toString()}`,
        list,
    });
}

const getLists = () => {
    const length = 3 + Math.floor(Math.random() * 10);
    return Array.from(Array(length), () => playlist());
}

export const getPlaylists = () => {
    return new Promise((resolve) => {
        resolve(Date.now());
    }).then(date => {
        const playlists = getLists();
        return {
            date,
            playlists,
        }
    });
}



