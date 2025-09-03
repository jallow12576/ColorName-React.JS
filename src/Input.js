const Input = ({colorValue, setColorValue, setHexValue, setIsDarkText, isDarkText}) => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <input
            type='text'
            placeholder='Enter Color Name'
            onChange={
                (e) => {setColorValue(e.target.value);
            }}
            value={colorValue}
            autoFocus
            required
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >Toggle Text Color</button>
        </form>
    )
}

export default Input;