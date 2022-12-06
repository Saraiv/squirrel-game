import { 
    useWindowDimensions,
    URL_PRIVATE
} from '../../helpers/Helpers'
import World from '../World/World'

const Game = () => {
    const { height, width } = useWindowDimensions()
    async function getNumber(url) {
        var response = await fetch(url)
        var data = await response.json()

        console.log(data[0])

        return data[0]
    }

    console.log(getNumber(URL_PRIVATE))

    return (
            <>
                <World />
            </>
    )   
}

export default Game