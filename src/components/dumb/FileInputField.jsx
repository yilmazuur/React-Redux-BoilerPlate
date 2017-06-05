import React, { Component, PropTypes } from 'react';
import FileInput from 'react-file-input';


const FileInputField = ({ input, label, type, accept, meta: { touched, error, invalid, warning } }) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className="control-label">{label}</label>
        <div>
            <FileInput  {...input} className="form-control" placeholder={label} type={type} accept={accept} />
            <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
)

export default FileInputField;