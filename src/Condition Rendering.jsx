function ColorForTheDay(props){
    let color;
    switch(props.day){
        case "Sunday" : 
            color = "#ff5733";
            break;
        case "Monday" : 
            color = "#f7dc6f";
            break;
        case "Tuesday" : 
            color = "#af7ac5";
            break;
        case "Webnesday" : 
            color = "#76d7c4";
            break;
        case "Thurday" : 
            color = "#82e0aa";
            break;
        case "Friday" : 
            color = "#5dade2";
            break;
        case "Saturday" : 
            color = "#800080";
            break;
    }

    return (
        <>
            &nbsp; <span>{props.day}</span> &nbsp;
            <input type="color" value={color}></input> &nbsp;
        </>
    )
}

export default ColorForTheDay;