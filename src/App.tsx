import * as React from "react";

export interface HelloWorldProps {
    userName: string,
    lang: string,
}

export default (props: HelloWorldProps) => (
    <h1>
        Hi {props.userName} from React! Welcome to {props.lang}
    </h1>
);
