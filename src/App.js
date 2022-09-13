import { useState } from "react";
import "./styles.css";

const songs = {
  Romantic: [
    {
      name: "Tujh Mein Rab Dikhta Hai",
      image:
        "https://c-fa.cdn.smule.com/rs-s55/arr/29/5d/d5e6a181-bf8a-4104-8e72-d1dd717f935d_1024.jpg",
      lyrics:
        "Tujh mein rab dikhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu Sajdhe sar jukhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu...",
      stars: "4.5/5"
    },
    {
      name: "Love Story",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDhkMGE0ZWQtNTdhZC00MTg1LTk2OTEtNGM4MWJjMjZjNTY2XkEyXkFqcGdeQXVyMjU3NzUyMTU@._V1_.jpg",
      lyrics:
        "We were both young when I first saw you I close my eyes and the flashback starts I'm standin' there On a balcony in summer air See the lights, see the party, the ball gowns...",
      stars: "4/5"
    },
    {
      name: "Zara Zara",
      image:
        "https://c-fa.cdn.smule.com/rs-s77/arr/48/5e/5a258e1c-bfb8-4d20-990a-68cfee5ccf6d.jpg",
      lyrics:
        "Zara Zara behekta hai mehekta hai aaj to mera tan badan main pyaasi hoon mujhe bhar le apni baahon mein Hai meri kasam tujhko sanam, door kahin na jaa Yeh doori kehti hai paas mere aaja re...",
      stars: "5/5"
    }
  ],
  Rock: [
    {
      name: "It's My Life",
      image: "https://i1.sndcdn.com/artworks-000095519561-gn5hq5-t500x500.jpg",
      lyrics:
        "This ain't a song for the broken-hearted No silent prayer for faith-departed And I ain't gonna be just a face in the crowd You're gonna hear my voice when I shout it out loud...",
      stars: "3.5/5"
    },
    {
      name: "In the End",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzc1MjBiM2QtNTcxNS00YWQ2LTgwMDktOGYxMTU5M2Q4ZjBhXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
      lyrics:
        "It starts with one All I know It's so unreal Watch you go I tried so hard and got so far But in the end, it doesn't even matter I had to fall to lose it all But in the end, it doesn't even matter...",
      stars: "4/5"
    },
    {
      name: "Chop Suey",
      image:
        "https://townsquare.media/site/366/files/2018/06/System-of-a-Down-Chop-Suey.jpg",
      lyrics:
        "Wake up (wake up) Grab a brush and put a little make up Hide the scars to fade away the shake up (hide the scars to fade away the) Why'd you leave the keys upon the table?...",
      stars: "3.5/5"
    }
  ],
  BollywoodPop: [
    {
      name: "Tennu Le",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jai-veeru-et00002582-24-03-2017-16-32-00.jpg",
      lyrics:
        "Tennu le ke jaana apne naal Nahi jeena bin yaraa inne saal Aadi raat (aadi raat) Neend na aave (neend na aave) Menu chain (menu chain) tadpave (tadpave)...",
      stars: "5/5"
    },
    {
      name: "Let The Music Play",
      image:
        "https://a10.gaanacdn.com/images/albums/77/65477/crop_480x480_65477.jpg",
      lyrics:
        "Let the music play, baby Music, take control O na kar maan rupaiye wala baar baar ke na rajje Bai na kar maan rupaiye wala baar baar ke na rajje O na kar maan rupaiye wala baar baar ke na rajje...",
      stars: "5/5"
    },
    {
      name: "Aap Ki Kashish",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/ec/Aashiq_Banaya_Aapne.jpg",
      lyrics:
        "Aapki kashish Sarfarosh hain Aapka nasha yu madhosh hain Kya kahe tumse jaane ja (Jaane ja, jane jaane ja) Gum hua hosh hain (hosh hain) Gum hua hosh hain...",
      stars: "5/5"
    }
  ]
};

let types = Object.keys(songs);

export default function App() {
  const [category, setCategory] = useState("Romantic");

  function handleClick(event) {
    let songCategory = event.target.innerText.split(" ").join("");
    setCategory(songCategory);
  }

  return (
    <div className="App">
      <h1>My Favorite Songs</h1>
      <hr />
      <div className="category">
        <span onClick={handleClick}>Romantic</span>
        <span onClick={handleClick}>Rock</span>
        <span onClick={handleClick}>Bollywood Pop</span>
      </div>
      <ul>
        {types.map((type, index) => {
          return (
            <li key={songs[category][index].name}>
              <div className="list">
                <h2>{songs[category][index].name}</h2>
                <div className="details">
                  <img src={songs[category][index].image} alt="" />
                  <aside>
                    {songs[category][index].lyrics}
                    <div>Stars: {songs[category][index].stars}</div>
                  </aside>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
