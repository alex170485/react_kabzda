import React, {useState} from 'react';
import './App.css';
import Accordion, {AccordionValueType} from "./component/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import UncontrolOnOffOnOff from "./component/UncontroledOnOff";
import UnControledAccordion from "./component/UnControledAccordion";
import {UnControlRating} from "./components/UnControlRating";
import UncontrolOnOff from "./component/UncontroledOnOff";
import ControlOnOff, {OnOffType} from "./component/ControledOnOff";


function App() {
    console.log('App rendering');
    let[on,seton] = useState(true);
    let[ratingValue, setRatingValue] = useState< RatingValueType>(0);
    let [accordionControl, setAccordionControl] = useState<AccordionValueType>(true);
    let [turnOn, setTurnOn] = useState<OnOffType>(true)




    return (
        <div className="App">
            <PageTitle title = {"this is APP"}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <ControlOnOff setTurnOn = {setTurnOn} turnOn = {turnOn}/>
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
            <Accordion title = {'Меню 1'} setAccordionControl = {setAccordionControl} accordionControl = {accordionControl}/>
            {/*<Accordion title = {'Users'} collapsed={false}/>*/}
            {/*<UnControledAccordion title={'Меню 1'} />*/}
            {/*<UncontrolOnOff />*/}
            {/*<UnControlRating/>*/}

        </div>
    );
}

type PagePropsType = {
    title: string;
}
function PageTitle(props: PagePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>

}

export default App;
