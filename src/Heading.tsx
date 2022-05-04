import React from 'react';
import {FC} from "react";

type HeadingProps = { class: string; text: string;}

export const AppHeading: FC<HeadingProps> =  (props) => (
    <p className={props.class} > {props.text} </p>
)


// HOW TO MAKE THIS ?????
// type HeadingProps = {tag:string; class: string; text: string;}
//
// export const AppHeading: FC<HeadingProps> =  (props) => (
//     <{props.tag} className={props.class} > {props.text} </{props.tag}>
// )

// EXPECT
//     <AppHeading tag="h1" class="h1" text="Contacts:" />
//     <h1 class="h1"> Contacts:</h1>