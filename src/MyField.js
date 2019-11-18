import React from "react";
import { Field, ErrorMessage, connect } from "formik";
import styled from "styled-components";

const StyledLabel = styled.label`
    color: darkslateblue;
    display: block;
    text-align: left;
`;

const StyledInput = styled.input`
    padding: 5px;
    border: 2px solid darkslateblue;
    border-radius: 3px;
    font-size: inherit;
    line-height: 1.2rem;
    ${({ formik, name }) =>
        formik.errors[name] &&
        formik.touched[name] &&
        "border: 2px solid indianred;"}
`;

const StyledParagraph = styled.p`
    font-size: 0.8rem;
    text-align: left;
    color: indianred;
    margin: 0;
`;

function MyField({ label, name, ...props }) {
    return (
        <div>
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            <Field as={StyledInput} id={name} name={name} {...props} />
            <ErrorMessage name={name} component={StyledParagraph} />
        </div>
    );
}

export default connect(MyField);
