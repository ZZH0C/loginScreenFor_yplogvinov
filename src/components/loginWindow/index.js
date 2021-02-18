import React, {useState} from "react";
import {Form} from 'react-bootstrap';


export default function LoginScreen() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="form1">
            <div className="former">
                <Form.Group controlId="formBasicName">
                    <div className="centerAlign">
                        <Form.Label><p>Name</p></Form.Label>
                        <input type='text' placeholder="Enter name" name='qwe' value={name}
                               onChange={e => setName(e.target.value)}/>
                    </div>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <div className="centerAlign">
                        <Form.Label><p>Password</p></Form.Label>
                        <input type='password' placeholder="Password" name='qwe' value={password}
                               onChange={e => setPassword(e.target.value)}/>
                    </div>
                </Form.Group>
                <button
                    className='custom-button'
                    onClick={() => login(name, password)}
                >
                    Click me!
                </button>
            </div>
        </div>

    );
}


function login(name, pass) {
    console.log(name, pass)
    let ourLink = `http://${name}:${pass}@localhost/pages`
    let xhr = new XMLHttpRequest();
    xhr.open('GET', ourLink, false);
    if (xhr.status >= 200 && xhr.status < 300) {
        window.location = ourLink;
    } else {
        alert("wrong!")
    }
}
