import React from "react"
import styled from 'styled-components'

const Input = styled.input`

`;


function FormField( { label, type, name, value, onChange }) {

    const tag = type === "textarea" ? "textarea" : "input"

    return (
        <div>
            <label>
                {label}
                <Input 
                as={tag}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            </label>
        </div>
    )
}


export default FormField; 