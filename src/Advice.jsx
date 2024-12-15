import { useState } from "react";

export const Advice = () => {
    const [ advice, setAdvice] = useState("Please Click Button to get Advice");
    const [ count, setCount] = useState(0);

    async function getAdvice() {
        const result = await fetch("https://api.adviceslip.com/advice");
        const data = await result.json();
        setAdvice(data.slip.advice);
        setCount( (c)=>  c + 1 ); 
    }
    return (
        <div className="advice-container">
            <h3>{advice}</h3>   
            <button className="advice-button" onClick={getAdvice}>Get Advice</button>
            <p>You have read <b>{count}</b> pieces of advice</p>
        </div>
    );
}