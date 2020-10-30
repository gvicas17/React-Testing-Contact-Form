import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState('');
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  const onChange = e => {
    setData({...data, [e.target.name]: e.target.value })
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id = "firstName"
            name="firstName"
            placeholder="Edd"
            onChange = {onChange}
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
          id = "lastName"
            name="lastName"
            placeholder="Burke"
            onChange = {onChange}
            value = {data}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            Email*
          </label>
          <input 
          name="email" 
          placeholder="bluebill1049@hotmail.com" 
          ref={register({ required: true })} 
          id = 'email'
          onChange = {onChange}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" id = 'message'>Message</label>
          <textarea 
          name="message" 
          ref={register({ required: false })} 
          onChange = {onChange}
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit"  data-testid = 'submit'/>
      </form>
    </div>
  );
};

export default ContactForm;
