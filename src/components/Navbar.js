import {useEffect, useState} from "react";

const Navbar = (props) => {

    const [name, setName] = useState('Tracy')
    const [age, setAge] = useState(18);
    const name2 = 'Tracy No2'

    useEffect(() => {
        console.log('useEffect')
    }, [name, age])


    return (
        <>
            <h1>hello, {name}</h1>
            <h1>hello, {name2}</h1>
            <button onClick={() => setName('World')}>
                Change name
            </button>
            <button onClick={() => setAge(19)}>
                Change age
            </button>
        </>
    )
}

export default Navbar
