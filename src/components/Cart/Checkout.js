import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [nameInputIsValid, setNameInputIsValid] = useState(true);
  const [streetInputIsValid, setStreetInputIsValid] = useState(true);
  const [cityInputIsValid, setCityInputIsValid] = useState(true);
  const [postalCodeInputIsValid, setPostalCodeInputIsValid] = useState(true);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enterName = nameInputRef.current.value;
    const enterStreet = streetInputRef.current.value;
    const enterCity = cityInputRef.current.value;
    const enterPostalCode = postalCodeInputRef.current.value;

    const enterNameIsValid = !isEmpty(enterName);
    const enterStreetIsValid = !isEmpty(enterStreet);
    const enterCityIsValid = !isEmpty(enterCity);
    const enterPostalCodeIsValid = isFiveChar(enterPostalCode);

    setNameInputIsValid(enterNameIsValid);
    setStreetInputIsValid(enterStreetIsValid);
    setCityInputIsValid(enterCityIsValid);
    setPostalCodeInputIsValid(enterPostalCodeIsValid);

    const formIsValid =
      enterPostalCodeIsValid &&
      enterCityIsValid &&
      enterStreetIsValid &&
      enterNameIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enterName,
      street: enterStreet,
      city: enterCity,
      postalCode: enterPostalCode,
    });
  };

  const nameInputClasses = `${classes.control} ${
    nameInputIsValid ? "" : classes.invalid
  }`;

  const streetInputClasses = `${classes.control} ${
    streetInputIsValid ? "" : classes.invalid
  }`;

  const cityInputClasses = `${classes.control} ${
    cityInputIsValid ? "" : classes.invalid
  }`;

  const postalCodeInputClasses = `${classes.control} ${
    postalCodeInputIsValid ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!nameInputIsValid && <p>Enter a Valid Name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!streetInputIsValid && <p>Enter a valid Steet </p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!postalCodeInputIsValid && (
          <p>Enter a Valid Postal Code (5 Character)</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!cityInputIsValid && <p>Enter a Valid City Name</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
