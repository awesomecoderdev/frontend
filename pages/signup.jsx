import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'

const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async event => {
        event.preventDefault()
    }
    return (
        <div>
            lorem ipsum dolor sit amet
        </div>
    );
}

export default Signup;

