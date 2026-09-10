function Comp1(){
    console.log("Component 1 rendered");

    function handleClick(){
        alert("Button clicked in Component 1");
    }

    return (
        <>
            <h1>Inside Component 1</h1>
        </>
    );
}

export default Comp1;