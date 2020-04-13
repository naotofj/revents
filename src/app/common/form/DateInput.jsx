import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const DateInput = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  const onChangeHandler = value => {
    input.value = format(value, rest.dateFormat)
    input.onChange(input.value)
  }
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={onChangeHandler}
        onBlur={input.onBlur}
        onChangeRaw={e => e.preventDefault()} //executed when user type in the field
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
