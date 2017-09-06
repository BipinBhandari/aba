import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError, formValueSelector} from 'redux-form/immutable';

import {Form, ButtonGroup, Button, Alert, Modal, ModalHeader, ModalBody, NavItem, Tag} from 'reactstrap';
import {connect} from "react-redux";

export const FormName = "FormName";

const validate = (values) => {

}

class FormClassName extends React.Component {

}

const reduxFormFormClassName = reduxForm({
    form: FormName,
    validate
})(FormClassName);

export default reduxFormFormClassName;