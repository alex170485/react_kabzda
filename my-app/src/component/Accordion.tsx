import React from "react";


export type AccordionValueType =  false | true;

type AccardionPropsType = {
    title: string;
    setAccordionControl: (value: AccordionValueType) => void;
    accordionControl: boolean;
}
function Accordion(props: AccardionPropsType) {
    console.log('Accordion rendering')
   return (
        <div>
            <AccordionTitle title = {props.title} setAccordionControl = {props.setAccordionControl} accordionControl = {props.accordionControl}/>
            {props.accordionControl && <AccordionBody />}
        </div>
    );

}

type AccardionTitlePropsType = {
    title: string;
    setAccordionControl: (value: true | false) => void;
    accordionControl: boolean;
}

function AccordionTitle(props: AccardionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3 onClick={() => {props.setAccordionControl(!props.accordionControl)}}>{props.title}</h3>
        </div>
    );
}
function AccordionBody(){
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    );
}

export default Accordion;