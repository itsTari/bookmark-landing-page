const Extentions = ({description, type, btn, image}) => {
  console.log(description)
  return (
    <>
        <div>
            <img src={image}/>
            <h2 className="text-2xl">{description}</h2>
            <p>{type}</p>
            <button>{btn}</button>
        </div>
    </>
  )
}

export default Extentions
