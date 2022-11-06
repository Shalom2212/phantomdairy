function Cards(props){

    console.log(props)

    return(
       <div className="card">
            <h3>{props.item.username}</h3>
            <p>{props.item.content}</p>
       </div>
    )
}

export default Cards;