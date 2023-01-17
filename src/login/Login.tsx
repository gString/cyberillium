import {Dispatch, ReactElement, SetStateAction, useEffect, useState} from "react";
import {Background, Button, Input, Label, Modal} from "./Login.styles";
import config from '../config';

export function Login ({onLogin}: { onLogin: Dispatch<SetStateAction<boolean>> }): ReactElement {
    const [sso, setSso] = useState(false);

    useEffect(() => {

        // @ts-ignore
        if (config && config["login"] === "SSO") {

            setSso(true);
        } else {
            setSso(false);
        }
    }, []);

    return <Background>
        <Modal onSubmit={(e) => {
            e.preventDefault();
            onLogin(true)
        }}>{
            sso ? <h1>SSO not implemented</h1> :
            <>
                <Label for="user">User:</Label>
                <Input id="user" type="text" />
                <Label for="password">Password:</Label>
                <Input id="password" type="password" />
            </>
        }
                <Button type="submit">Login</Button>
                <Button onClick={(e) => {
                    e.preventDefault();
                    setSso(!sso)
                }}>SSO</Button>
            </Modal>
    </Background>
}