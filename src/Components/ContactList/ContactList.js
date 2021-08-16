import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredEl = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {filteredEl.map(contact => (
        <li className={styles.contactList__item} key={contact.id}>
          {contact.name} {contact.number}
          <button
            className={styles.contactList__button}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
