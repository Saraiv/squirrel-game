import './Tile.css'

const Tile = (src, alt, x, y, z) => {
    return(
        <img
            alt={alt}
            className='tile'
            style={{left: `${x}%`, top:`${y}%`, zIndex:z}}
            src={src}
        />
    )
}

export default Tile