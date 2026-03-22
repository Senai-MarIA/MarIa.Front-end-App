import "./style.css";

function Cards({icon1, icon2, title, description}) {
 
    return (
        
            <div className="card">
                <div className="iconscard">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                </div>
                <div className="textcard">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
          
    );
}

export default Cards;