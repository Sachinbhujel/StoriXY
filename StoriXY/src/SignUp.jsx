import React, { useState } from "react";
import './App.css';

function SignUp({setSignUpShow}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+1");
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignUpShow(false);
        console.log({ firstName, lastName, email, phone, countryCode, password, setPassword });
    };

    const handleSignUpBack = () => {
        setSignUpShow(false);
    }

    return (
        <>
            <div className="container">
            <span className="material-symbols-outlined signup-back-btn" onClick={handleSignUpBack}>
arrow_back
</span>
                <h3 className="title">Get Started Now</h3>
                <p>Create an account or log in to explore our app</p>

                <form onSubmit={handleSubmit} action="#">
                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <select
                                id="countryCode"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                style={{ flex: "1" }}
                            >
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+91">+91</option>
                                <option value="+880">+880</option>
                            </select>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                style={{ flex: "2" }}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="setPassword">Set Password</label>
                        <input
                            id="setPassword"
                            type="password"
                            placeholder="Set Password"
                            value={samePassword}
                            onChange={(e) => setSamePassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    );
}

export default SignUp;