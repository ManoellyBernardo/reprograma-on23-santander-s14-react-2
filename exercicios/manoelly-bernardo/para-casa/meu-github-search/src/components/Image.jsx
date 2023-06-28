import '../styles/Image.css'

const Image = ({ image, textAlt }) => {
  return (
    <img src={image} alt={textAlt} />
  )
}

export default Image;