import React from 'react';
import { useState } from 'react';
import { createSanityUser, setListRegister } from '../../../utils/helpers';
import styles from './styles.module.scss'
import { getGuestList } from '../../../sanity/sanity.query';
import { PopUpWrapper } from '../../../components/PopUpWrapper';

import {
    checkValidateFirstName,
    checkValidateMiddleName,
    checkValidateLastName,
    checkValidateEmail,
    checkValidatePhone,
    checkValidateZip,
    checkValidateAddress,
    checkValidateCity,
    checkValidateState,
} from '/utils/validator'
import usStates from './states.json'



const Contact = () => {
    const [plusOne, setPlusOne] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [processing, setProcessing] = useState('')
    const [congratulationPopup, setCongratulationPopup] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [suffix, setSuffix] = useState('')
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
    const [stateError, setStateError] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [zipCodeError, setZipCodeError] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [guestFirst, setGuestFirst] = useState('')
    const [guestLast, setGuestLast] = useState('')



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

    const checkList = async (firstname, lastname) => {
        const guest = await getGuestList(firstname, lastname)
        if (guest.length > 0) {
            return guest
        } else {
            return false
        }
    }


    const submitHandler = async e => {
        e.preventDefault()
        let check = []
        if (checkValidateFirstName(firstName).length > 0) {
            setFirstNameError(checkValidateFirstName(firstName))
            check.push(checkValidateFirstName(firstName)[0]?.message)
        }
        if (checkValidateLastName(lastName).length > 0) {
            setLastNameError(checkValidateLastName(lastName))
            check.push(checkValidateLastName(lastName)[0].message)
        }
        if (checkValidateMiddleName(middleName).length > 0) {
            setMiddleNameError(checkValidateMiddleName(middleName))
            check.push(checkValidateMiddleName(middleName)[0].message)
        }
        if (checkValidateEmail(email).length > 0) {
            setEmailError(checkValidateEmail(email))
            check.push(checkValidateEmail(email)[0].message)
        }
        if (checkValidatePhone(phone).length > 0) {
            setPhoneError(checkValidatePhone(phone))
            check.push(checkValidatePhone(phone)[0].message)
        }
        if (checkValidateAddress(address1).length > 0) {
            setAddressOneError(checkValidateAddress(address1))
            check.push(checkValidateAddress(address1)[0].message)
        }
        if (checkValidateCity(city).length > 0) {
            setCityError(checkValidateCity(city))
            check.push(checkValidateLastName(lastName)[0].message)
        }
        if (checkValidateZip(zipCode).length > 0) {
            setZipCodeError(checkValidateZip(zipCode))
            check.push(checkValidateZip(zipCode)[0].message)
        }
        if(checkValidateState(state).length > 0){
            setStateError(checkValidateState(state))
            check.push(checkValidateState(state)[0].message)
        }

        // if checks return an error
        if (check.length > 0) {
            // alert('Make sure you filled out everything correctly')
        } else {
            setProcessing('Processing...')
            setGuestFirst(firstName[0]?.toUpperCase() + firstName.substring(1))
            setGuestLast(lastName[0]?.toUpperCase() + lastName.substring(1))
            setShowLoader(true)
            checkList(firstName, lastName).then((response) => {
                // If submitted user is in guest list
                if (response.length > 0) {
                    if (response[0].plusOne == true) {
                        setPlusOne(true)
                    }
                    // If submitted user has already registered before
                    if (response[0].register == true) {
                        // Create user in the duplicate area
                        createSanityUser(requestBody, 'duplicate')
                    } else {
                        // Create guest in the wedding guest table
                        createSanityUser(requestBody, 'guest').then(
                            // Mark the user as registered in the guestlist table
                            setListRegister(response[0]._id)
                        )
                    }
                } else {
                    // Submitted user not in guest list so added to the offlist table
                    createSanityUser(requestBody, 'offList')
                }
            }).then(
                // waits for a second, then a thank you popup appears and all inputs reset
                setTimeout(() => {
                    setCongratulationPopup(true)
                    setProcessing('')
                    setShowLoader(false)
                    setMiddleName('')
                    setEmail('')
                    setPhone('')
                    setAddress1('')
                    setAddress2('')
                    setCity('')
                    setState('')
                    setZipCode('')
                    setExtraInfo('')
                    setSuffix('')
                }, 1000)
                
            )
            setFirstName('')
            setLastName('')

        }


    }



    return (

        <>
            <div className={`${styles.intro}`}>
                <span>
                Please fill out this form so that we can ensure all guests are detailed appropriately. 
                Filling this out doesn't mean you're accepting our invite; we totally understand that 
                dates, locations, etc., may change your availability. We will be sending out Save the 
                Dates as soon as possible with more information!

                </span>
                <span>
                If you have any questions, please reach out to <a href="mailto:jakeandreagansayido@gmail.com">jakeandreagansayido@gmail.com</a>.
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
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.currentTarget.value)
                                }}
                                onBlur={(e) => {
                                    setFirstNameError(checkValidateFirstName(e.currentTarget.value))

                                }}
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
                                value={middleName}
                                onChange={(e) => {
                                    setMiddleName(e.currentTarget.value);
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
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.currentTarget.value);
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
                                value={suffix}
                                onChange={(e) => {
                                    setSuffix(e.currentTarget.value);

                                }}

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
                            value={email}
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
                            value={address1}
                            onChange={(e) => {
                                setAddress1(e.currentTarget.value)
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
                            value={address2}
                            onChange={(e) => {
                                setAddress2(e.currentTarget.value);
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
                                value={city}
                                onChange={(e) => {
                                    setCity(e.currentTarget.value)
                                    setCityError('')
                                }}
                                onBlur={(e) => {
                                    setCityError(checkValidateCity(e.currentTarget.value));
                                }}
                            />
                        </div>
                        <div className={`${styles.block}`}>
                            <label htmlFor="frm-state">State</label>
                            <span
                                className={`${styles.errors}`}
                                style={{ lineHeight: '1' }}
                            >
                                {stateError.length !== 0 &&
                                    stateError.map((error) => {
                                        return (
                                            <span key={error.type} className="block">
                                                {error.message}
                                            </span>
                                        )
                                    })}
                            </span>
                            <select  
                                className='Dropdown-control' 
                                defaultValue={'none'}  
                                onChange={(e) => { 
                                    setState(e.currentTarget.value) 
                                    setStateError('')
                                    }}
                                onBlur={(e) => {
                                    setStateError(checkValidateState(e.currentTarget.value))
                                }}
                                    >
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
                                value={zipCode}
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
                            <label htmlFor="frm-phone">Phone</label>
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
                                value={phone}
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
                            <label htmlFor="frm-extra-info">Please provide any dietary restrictions or comments:</label>
                            <textarea
                                id="frm-extra-info"
                                name="extra"
                                value={extraInfo}
                                onChange={(e) => {
                                    setExtraInfo(e.currentTarget.value);
                                }}

                            />
                        </div>
                    </div>

                    <div className={`${styles.block} button`}>
                        <button type="submit" disabled={showLoader}>
                            {showLoader ? processing : 'Submit'}

                        </button>
                    </div>
                </div>
            </form>
            {congratulationPopup && (
                <PopUpWrapper handler={() => setCongratulationPopup(false)}>
                    <div className='text-center mx-auto pt-9x pb-2x' style={{ maxWidth: '26rem' }}>
                        <h3 className='title h3 weight-800 color-darkgray mb-1_5rem'>
                            Success!
                        </h3>
                        <p className='mb-2rem'>
                            Thank you, {guestFirst}, for providing your contact info!
                            {plusOne && (
                                <p className={styles.textPadding}> 
                                   You also have a designated plus one! Please make sure to 
                                   fill out the form again with their information to make sure 
                                   we can address our invites properly.
                                </p>
                            )}
                        </p>

                        <p className={styles.textPadding}>
                            We would be thrilled to have you be a part of our big day! We will be sending 
                            out Save the Dates shortly with more information.

                        </p>

                    </div>
                </PopUpWrapper>
            )}
        </>
    );

}

export default Contact




