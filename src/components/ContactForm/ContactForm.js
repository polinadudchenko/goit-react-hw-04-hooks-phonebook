import { useState } from 'react';
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

export default function ContactForm({onSubmit}){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case ('name'):
                setName(value);
                break;
            case ('number'):
                setNumber(value);
                break;
            default:
                throw new Error();
        }
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, number);
        reset();
    }
    
    const reset = () => {
        setName('');
        setNumber('');
    }

    return (<form className={s.contact_form} onSubmit={handleSubmit}>
            <label className={s.contact_form__label}> Name
                <input
                    type="text"                
                    className={s.contact_form__input}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={s.contact_form__label}> Telephone number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    className={s.contact_form__input}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button type="submit" className={s.contact_form__button} >
            Add to contacts
            </button>
        </form> )
}

ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
}