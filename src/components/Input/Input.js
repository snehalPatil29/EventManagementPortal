import React from 'react';
import {
    Input, InputGroup, InputGroupText, InputGroupAddon
} from 'reactstrap';

const InputElement = (props) => (
    <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
            <InputGroupText><i className={props.icon}></i></InputGroupText>
        </InputGroupAddon>
        <Input 
            type={props.type} 
            placeholder={props.placeholder} 
            name={props.name} 
            onChange ={props.onchanged} 
            value ={props.value} />
        {props.required ? <div style={{color: "red"}} className="help-block">*Required</div> : null}
    </InputGroup>
);

export default InputElement;