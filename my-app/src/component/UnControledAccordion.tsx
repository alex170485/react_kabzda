import React, {useState} from "react";

type UnControledAccordionPropsType = {
    title: string;
    // collapsed: boolean;
}
function UnControledAccordion(props:UnControledAccordionPropsType) {
    console.log('Accordion rendering')
    let[collapsed, setCollapsed] = useState(false);

   return (
        <div>
            <AccordionTitle title = {props.title} onClick={()=>(setCollapsed(!collapsed))}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );

}

type AccardionTitlePropsType = {
    title: string;
    onClick: () => void;

}

function AccordionTitle(props: AccardionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
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

export default UnControledAccordion;