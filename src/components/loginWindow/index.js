import React, {useState} from "react";
import {Form} from 'react-bootstrap';


export default function LoginScreen() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [styles, setStyles] = useState({
        inputs: 'input-default',
        alertText: 'alert-text hidden'
    })

    function alertUser() {
        setStyles({
            inputs: 'input-alert',
            alertText: 'alert-text'
        })
    }

    function login(name, pass) {
        console.log(name, pass)
        let ourLink = `http://${name}:${pass}@localhost/pages`
        let xhr = new XMLHttpRequest();
        xhr.open('GET', ourLink, false);
        if (xhr.status >= 200 && xhr.status < 300) {
            window.location = ourLink;
        } else {
            alertUser();
        }
    }

    return (
        <div className="form1">
            <div className="former">
                <div className={'form-text-area-container'}>
                    <Form.Group controlId="formBasicName">
                        <div className="centerAlign">
                            <Form.Label><p>Name</p></Form.Label>
                            <input className={styles.inputs} type='text' placeholder="Enter name" name='qwe'
                                   value={name}
                                   onChange={e => setName(e.target.value)}/>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <div className="centerAlign">
                            <Form.Label><p>Password</p></Form.Label>
                            <input className={styles.inputs} type='password' placeholder="Password" name='qwe'
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </Form.Group>
                </div>
                <div className={styles.alertText}>
                    Please enter valid name and password!
                </div>
                <button
                    className='custom-button'
                    onClick={() => login(name, password)}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}
