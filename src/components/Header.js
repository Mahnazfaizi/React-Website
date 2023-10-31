export default function Header(props){
    return(
       
        <header>
        <img id="headerImage" src={props.image} alt="Ancient Pottery" />
        <h1>Historical Artifacts Museum</h1>
        <p>Embark on a virtual journey to explore the world's most intriguing historical artifacts</p>
      </header>
    )
}

