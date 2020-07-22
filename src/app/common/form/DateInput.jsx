import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';

const DateInput = ({
  input: { value, onChange, onBlur },
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={
          value
            ? Object.prototype.toString.call(value) !== '[object Date]'
              ? value.toDate()
              : value
            : null
        }
        onChange={onChange}
        onBlur={(e) => e.preventDefault()}
        onChangeRaw={(e) => e.preventDefault()} //executed when user type in the field
      />
      {touched && error && (
        <Label basic color='red' pointing>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
