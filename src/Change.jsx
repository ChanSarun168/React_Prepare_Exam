function Change(){
    function textChange(event){
        document.getElementById('status').textContent = event.target.value;
    }
    return (
        <>
            <h2>Text Box Change Event</h2>
            <label for="txt">Text Box</label>
            <input type="text" id="txt" name="txt" onChange={textChange}></input>
            <p id="status"></p>
        </>
    )
}
export default Change