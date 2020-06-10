import React from 'react';
import { Form, Input } from 'antd';

const InputForm = ({
  help,
  label,
  validateStatus,
  value,
  id,
  size,
  type,
  onChange,
  onBlur,
  placeholder,
  ...props
  }) => {
    return(
      <Form.Item
        help={help}
        label={label}
        validateStatus={validateStatus}
        >
        <Input
          {...props}
          id={id}
          defaultValue={value}
          value={value}
          size={size}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Form.Item>
  )
}

export default InputForm;