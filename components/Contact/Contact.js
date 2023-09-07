import React from 'react';
import { useState } from 'react';
import { createSanityUser } from '../../utils/helpers';
import styles from 'components/Contact/styles.module.scss'
import { guestInfo } from '../../utils/helpers'
import { guestListBulk } from '../../utils/helpers';

import {
    checkValidateFirstName,
    checkValidateMiddleName,
    checkValidateLastName,
    checkValidateEmail,
    checkValidatePhone,
    checkValidateZip,
    checkValidateAddress,
    checkValidateCity,
} from '/utils/validator'
import usStates from './states.json'



const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [middleNameError, setMiddleNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [address1, setAddress1] = useState('')
    const [addressOneError, setAddressOneError] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [cityError, setCityError] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [zipCodeError, setZipCodeError] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [extraInfoError, setExtraInfoError] = useState('')
    
    const requestBody = {
        firstName: firstName[0]?.toUpperCase() + firstName.substring(1),
        lastName: lastName[0]?.toUpperCase() + lastName.substring(1),
        middleName: middleName[0]?.toUpperCase() + middleName.substring(1),
        email: email,
        phone: phone,
        address: {
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zipCode: zipCode
        },
        extra: extraInfo
    }
    // setProjects: (state, action) => {
    //     state.projects = action.payload
    //   }
   
    const submitHandler = async e => {
        
      
        e.preventDefault()
        const guestList = await guestInfo()
        guestListBulk()
        console.log(guestList[0])
        let test = []
        if (checkValidateFirstName(firstName).length > 0) {
            setFirstNameError(checkValidateFirstName(firstName))
            test.push(checkValidateFirstName(firstName)[0]?.message)
        }
        if (checkValidateLastName(lastName).length > 0) {
            setLastNameError(checkValidateLastName(lastName))
            test.push(checkValidateLastName(lastName)[0].message)
        }
        if (checkValidateMiddleName(middleName).length > 0) {
            setMiddleNameError(checkValidateMiddleName(middleName))
            test.push(checkValidateMiddleName(middleName)[0].message)
        }
        if (checkValidateEmail(email).length > 0) {
            setEmailError(checkValidateEmail(email))
            test.push(checkValidateEmail(email)[0].message)
        }
        if (checkValidatePhone(phone).length > 0) {
            setPhoneError(checkValidatePhone(phone))
            test.push(checkValidatePhone(phone)[0].message)
        }
        if (checkValidateAddress(address1).length > 0) {
            setAddressOneError(checkValidateAddress(address1))
            test.push(checkValidateAddress(address1)[0].message)
        }
        if (checkValidateCity(city).length > 0) {
            setCityError(checkValidateCity(city))
            test.push(checkValidateLastName(lastName)[0].message)
        }
        if (checkValidateZip(zipCode).length > 0) {
            setZipCodeError(checkValidateZip(zipCode))
            test.push(checkValidateZip(zipCode)[0].message)
        }


        if (test.length > 0) {
            // alert('Make sure you filled out everything correctly')
        } else {
            
        createSanityUser(requestBody, 'guest')
        }


    }



    return (
        <>
            <div className={`${styles.intro}`}>
                <h1>Contact Information</h1>
                <span>
                    Please fill out this form for each member of your party so that we can ensure all
                    guests are detailed appropriately in both save the dates & invites! If you have any questions, please reach out to jakeandreagansayido@gmail.com.
                </span>
                <span>
                    Filling this out doesn't mean you're accepting our invite! We totally understand that dates, locations, etc, may change your availability so will give you
                    the opportunity to say "yes" or "no" later on.
                </span>
            </div>
            <form onSubmit={submitHandler} className={`${styles.container}`}>
                <div className={`${styles.formInputs}`}>
                    <div className={`name ${styles.name}`}>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-first">First Name</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {firstNameError.length !== 0 &&
                                    firstNameError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <input
                                id="frm-first"
                                type="text"
                                name="firstName"
                                onChange={(e) => {
                                    setFirstName(e.currentTarget.value.trim())
                                }}
                                onBlur={(e) => {
                                    setFirstNameError(checkValidateFirstName(e.currentTarget.value))

                                }}
                                // autoComplete="given-name"
                                
                            />

                        </div>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-middle">Middle Name</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {middleNameError.length !== 0 &&
                                    middleNameError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <input
                                id="frm-middle"
                                type="text"
                                name="middleName"
                                onChange={(e) => {
                                    setMiddleName(e.currentTarget.value.trim());
                                    setMiddleNameError('')
                                }}
                                onBlur={(e) => {
                                    setMiddleNameError(checkValidateMiddleName(e.currentTarget.value));
                                }}
                                
                            />
                        </div>
                    </div>
                    <div className={`name ${styles.name}`}>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-last">Last Name</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {lastNameError.length !== 0 &&
                                    lastNameError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <input
                                id="frm-last"
                                type="text"
                                name="lastName"
                                onChange={(e) => {
                                    setLastName(e.currentTarget.value.trim());
                                    setLastNameError('')
                                }}
                                onBlur={(e) => {
                                    setLastNameError(checkValidateLastName(e.currentTarget.value));
                                }}
                                
                            />
                        </div>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-suffix">Suffix (Optional)</label>
                            <input
                                id="frm-suffix"
                                type="text"
                                name="suffix"
                            // autoComplete="suffix"

                            />
                        </div>
                    </div>
                    <div className={`${styles.block}`}>
                        <label htmlFor="frm-email">Email</label>
                        <span
                            className={`${styles.errors}`}
                            style={{ lineHeight: '1' }}
                        >
                            {emailError.length !== 0 &&
                                emailError.map((error) => {
                                    return (
                                        <span key={error.type} className="block">
                                            {error.message}
                                        </span>
                                    )
                                })}
                        </span>
                        <input
                            id="frm-email"
                            type="email"
                            name="email"
                            onChange={(e) => {
                                setEmail(e.currentTarget.value.trim());
                                setEmailError('')
                            }}
                            onBlur={(e) => {
                                setEmailError(checkValidateEmail(e.currentTarget.value));
                            }}
                            
                        />
                    </div>


                    <div className={`${styles.block}`}>
                        <label htmlFor="frm-address1">Address Line 1</label>
                        <span
                            className={`${styles.errors}`}
                            style={{ lineHeight: '1' }}
                        >
                            {addressOneError.length !== 0 &&
                                addressOneError.map((error) => {
                                    return (
                                        <span key={error.type} className="block">
                                            {error.message}
                                        </span>
                                    )
                                })}
                        </span>
                        <input
                            id="frm-address1"
                            type="text"
                            name="address1"
                            onChange={(e) => {
                                setAddress1(e.currentTarget.value.trim())
                                setAddressOneError('')
                            }}
                            onBlur={(e) => {
                                setAddressOneError(checkValidateAddress(e.currentTarget.value));
                            }}
                            
                        />
                    </div>

                    <div className={`${styles.block}`}>
                        <label htmlFor="frm-address2">Address Line 2</label>
                        <input
                            id="frm-address2"
                            type="text"
                            name="address2"
                            onChange={(e) => {
                                setAddress2(e.currentTarget.value.trim());
                            }}
                            
                        />
                    </div>

                    <div className={`${styles.name}`}>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-city">City</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {cityError.length !== 0 &&
                                    cityError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <input
                                id="frm-city"
                                type="text"
                                name="city"
                                onChange={(e) => {
                                    setCity(e.currentTarget.value.trim())
                                    setCityError('')
                                }}
                                onBlur={(e) => {
                                    setCityError(checkValidateCity(e.currentTarget.value.trim()));
                                }}
                            />
                        </div>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-state">State</label>
                            <select defaultValue={'none'} className='Dropdown-control' onChange={(e) => { setState(e.currentTarget.value) }}>
                                <option value="none" disabled hidden>
                                    Select a state
                                </option>
                                {usStates.length !== 0 &&
                                    usStates.map((option) => {
                                        return (
                                            <option key={option.name} className='states' id={option.abbreviation}>
                                                {option.name}
                                            </option>
                                        )
                                    })}
                            </select>

                        </div>
                    </div>
                    <div className={`${styles.name}`}>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-zip">Zip Code</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {zipCodeError.length !== 0 &&
                                    zipCodeError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <input
                                id="frm-zip"
                                type="number"
                                name="zipCode"
                                onChange={(e) => {
                                    setZipCode(e.currentTarget.value.trim())
                                    setZipCodeError('')
                                }}
                                onBlur={(e) => {
                                    setZipCodeError(checkValidateZip(e.currentTarget.value.trim()));
                                }}
                                
                            />
                        </div>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-phone">Phone(numbers only please)</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {phoneError.length !== 0 &&
                                    phoneError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <input
                                id="frm-phone"
                                type="text"
                                name="phone"
                                onChange={(e) => {
                                    setPhone(e.currentTarget.value.trim())
                                    setPhoneError('')
                                }}
                                onBlur={(e) => {
                                    setPhoneError(checkValidatePhone(e.currentTarget.value.trim()));
                                }}
                                
                            />
                        </div>
                    </div>
                    <div className={`${styles.name}`}>
                        <div className={`${styles.block}`} id={`${styles.extraInfo}`}>
                            <label htmlFor="frm-extra-info">Please Provide Dietary Restrictions for All Memebers of Your Party:</label>
                            <textarea
                                id="frm-extra-info"
                                name="extra"
                                onChange={(e) => {
                                    setExtraInfo(e.currentTarget.value.trim());
                                }}

                            />
                        </div>
                    </div>

                    <div className={`${styles.block} button`}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );

}

export default Contact




