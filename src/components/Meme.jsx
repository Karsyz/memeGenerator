import React from "react"
import memesData from "../assets/memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState({memesData})

    
    function getMemeImage(e) {
        e.preventDefault()
        const memesArray = allMemeImages.memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value  // square brackets is a computed property from the events" target which is the name property of the input element. This simplifies using the function with different elements and unique names.
        }))
    }

    return (
        <main>

            <form className="form">

                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} 
                />

                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                />

                <button 
                    type="button" 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>

            </form>
            <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}
