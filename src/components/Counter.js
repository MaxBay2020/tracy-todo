import './counter.scss'
import {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1)
    }

    return (
        <>
            <section className='counter-container'>
                <button>-</button>
                <h1>{number}</h1>
                <button onClick={()=>increment()}>+</button>
            </section>
        </>
    )
}

export default Counter
