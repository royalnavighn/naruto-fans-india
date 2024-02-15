import React, { useEffect, useRef, useState } from "react";
import "../assets/css/joinourteam.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function JoinOurTeam() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const whyjoinRef = useRef(null);

  const [formError, setFormError] = useState({});
  const [formValues, setFormValues] = useState({});
  const [gender, setGender] = useState("male");
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmit, setIsSubmit] = useState(false);
  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleChange = (e) => {
    let dobdate = dateOfBirthRef.current.props.selected;
    let firstname = firstNameRef.current.value;
    let lastname = lastNameRef.current.value;
    let email = emailRef.current.value;
    let whyyoujoin = whyjoinRef.current.value;
    let gendertype = genderRef.current.value;

    e.preventDefault();

    setFormValues({
      ...formValues,
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender: gendertype,
      dateofbirth: dobdate.toLocaleDateString(),
      whyyoujoin: whyyoujoin,
    });
    setIsSubmit(false);
  };

  useEffect(() => {
    setFormError(validate(formValues));
    if (Object.keys(formError).length === 0 && isSubmit) {
      setFormError(validate(formValues));
    }
  }, [formValues,formError,isSubmit]);

  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // console.log(values);

    if (!values.firstname) {
      errors.firstname = "first name is required";
    }

    if (!values.lastname) {
      errors.lastname = "last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.whyyoujoin) {
      errors.whyyoujoin = "description is required!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <div>
      <h1> joinourteam </h1>

      {Object.keys(formError).length === 0 && isSubmit ? (
        <h1> You Successfully Joined Our Team</h1>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>First Name</label>
              <input
                ref={firstNameRef}
                type="text"
                name="firstname"
                onChange={handleChange}
              />
              {formError.firstname && <span>{formError.firstname} </span>}
            </div>
            <div className="form-control">
              <label>Last Name</label>
              <input
                ref={lastNameRef}
                type="text"
                name="lastname"
                onChange={handleChange}
              />
              {formError.lastname && <span> {formError.lastname} </span>}
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                ref={emailRef}
                type="text"
                name="email"
                onChange={handleChange}
              />
              {formError.email && <span>{formError.email}</span>}
            </div>
            <div className="form-control">
              <h4>gender</h4>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    checked={gender === "male"}
                    onChange={onOptionChange}
                  />
                  Male{" "}
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    checked={gender === "female"}
                    onChange={onOptionChange}
                  />
                  Female{" "}
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    name="gender"
                    checked={gender === "other"}
                    onChange={onOptionChange}
                  />
                  Other{" "}
                </label>
                <input
                  type="hidden"
                  ref={genderRef}
                  value={gender}
                  onChange={handleChange}
                />{" "}
              </div>
            </div>
            <div className="form-control">
              <label>Date of birth</label>
              <DatePicker
                ref={dateOfBirthRef}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <span>{formError.dobdate}</span>
            </div>
            <div className="form-control">
              <textarea
                ref={whyjoinRef}
                placeholder="Why you join in this team ? ..."
                onChange={handleChange}
              />

              {formError.whyyoujoin && <span>{formError.whyyoujoin}</span>}
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">join the team </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default JoinOurTeam;
