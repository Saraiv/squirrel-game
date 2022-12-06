import './Game.css'
import useWindowDimensions from '../../Helpers/Helpers'
import World from '../World/World'

const Game = () => {
    const { height, width } = useWindowDimensions()

    const url_private = "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000"

    async function getNumber(url) {
        var response = await fetch(url)
        var data = await response.json()

        console.log(data[0])

        return data[0]
    }

    return (
            <>
                <World />
            </>
    )   
}

export default Game