export default function ArtiactCard(props){ 

    const handelClick=()=>{
    var headerImageElement=document.getElementById("headerImage");
    if(headerImageElement){
      headerImageElement.src=props.image;
    headerImageElement.classList.add("animateheader");
      setTimeout(() => {
        headerImageElement.classList.remove("animateheader")
      }, 2000);
    } 
    };
    
 return(
     <div className="artifact-card " onClick={handelClick}>
       <img src={props.image}/>
       <h2>{props.title}</h2>
       <p>{props.description}</p>
     </div>
 );
}






