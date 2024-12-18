function ClickParameter(){
    function buttonClick(yearth,classname){
        document.getElementById('btn2').textContent =  `Year: ${yearth} , Class: ${classname}`;
    }
    return  (
        <>
            <h2>Click Event with Parameter</h2>
            <button id="btn2" onClick={()=>buttonClick('Year 4','MAE')}>Click Me</button>
        </>
    )
}
export default ClickParameter;