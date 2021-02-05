import React, {useState} from "react";
import { Form} from 'react-bootstrap';


export default function LoginScreen() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (

        <Form className="form1">
            <div className="former">
                <Form.Group controlId="formBasicName">
                    <div className="centerAlign">
                        <Form.Label><p>Name</p></Form.Label>
                        <input type='text' placeholder="Enter name" name='qwe' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <div className="centerAlign">
                        <Form.Label><p>Password</p></Form.Label>
                        <input type='text' placeholder="Password" name='qwe' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </Form.Group>
                <a href={`http://${name}:${password}@localhost/pages`} className='aButton'>Click me!</a>



            </div>
        </Form>

    );
}
