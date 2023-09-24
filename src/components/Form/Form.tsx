import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Form.scss';

export const Form: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (em: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(em);
  };

  const isValidPhone = (value: string) => {
    if (value.match(/12345/)) {
      return false;
    }

    if (value.match(/1234/)) {
      return false;
    }

    if (value.length < 12) {
      return false;
    }

    return true;
  };

  const handleSubmit = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setError('');

    if (name.length < 3) {
      setError('Incorect name');
    } else if (secondName.length < 3) {
      setError('Incorect second name');
    } else if (!isValidEmail(email)) {
      setError('Incorect email');
    } else if (!isValidPhone(phone)) {
      setError('incorect phone');
    } else {
      setName('');
      setSecondName('');
      setEmail('');
      setPhone('');
      setError('');
    }
  };

  return (
    <div className="form">
      <form action="" className="form__group">
        <legend className="form__legend">
          Zarejestruj się
        </legend>
        <p className={error ? 'form__error' : 'form__error form__error--hiden'}>{error}</p>
        <input
          type="text"
          placeholder="Imię"
          className="form__input"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nazwisko"
          className="form__input"
          value={secondName}
          onChange={event => setSecondName(event.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          className="form__input"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <PhoneInput
          country="pl"
          value={phone}
          onChange={num => {
            setPhone(num);
          }}
        />
        <button
          type="submit"
          className="form__button"
          onClick={event => handleSubmit(event)}
        >
          zarejestruj się
        </button>
      </form>
    </div>
  );
};
