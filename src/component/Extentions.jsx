const content = [
    {
        id: '1',
        image:'../assets/images/logo-chrome.svg',
        description:'Add to Chrome',
        type: 'Minimum version 62',
        btn: 'Add & Install Extention'
    },
    {
        id: '2',
        image:'../assets/images/logo-firefox.svg',
        description:'Add to Firefox',
        type: 'Minimum version 65',
        btn: 'Add & Install Extention'
    },
    {
        id: '3',
        image:'../assets/images/logo-opera.svg',
        description:'Add to Opera',
        type: 'Minimum version 46',
        btn: 'Add & Install Extention'
    },
]
const Extentions = () => {
    
  return (
    <>
    <h1>Hello World</h1>
      {content.map((items, id)=> {
        <div key={id}>
            <img src={items.image}/>
            <h2 className="text-2xl">{items.description}</h2>
            <p>{items.type}</p>
            <button>{items.btn}</button>
        </div>
        // console.log(items.type)
      })}
    </>
  )
}

export default Extentions
