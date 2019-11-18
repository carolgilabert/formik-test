import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import MyField from "./MyField";

const SubmitButton = styled.button`
    font-size: inherit;
    background-color: yellow;
    color: darkslateblue;
    border: 2px solid darkslateblue;
    border-radius: 3px;
    line-height: 1.2rem;
    min-width: 8rem;
    margin-top: 10px;
    cursor: pointer;
`;

function validate(values) {
    const errors = {};
    if (!values.email) {
        errors.email = "Required";
    }
    if (!values.confirmEmail) {
        errors.confirmEmail = "Required";
    } else if (values.email !== values.confirmEmail) {
        errors.confirmEmail = "Emails must match";
    }
    return errors;
}

function submit(values, { setSubmitting }) {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
}

function MyForm() {
    return (
        <Formik
            initialValues={{ email: "", confirmEmail: "" }}
            validate={validate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <MyField type="text" name="email" label="Email" />
                    <MyField
                        type="text"
                        name="confirmEmail"
                        label="Confirm your email"
                    />
                    <SubmitButton type="submit" disabled={isSubmitting}>
                        Submit
                    </SubmitButton>
                </Form>
            )}
        </Formik>
    );
}

export default MyForm;
