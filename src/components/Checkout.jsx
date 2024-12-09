import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                        <option>India</option>
                                        <option>Canada</option>
                                        <option>Australia</option>
                                        <option>United Kingdom</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                        <option>China</option>
                                        <option>Japan</option>
                                        <option>Brazil</option>
                                        <option>Russia</option>
                                        <option>Italy</option>
                                        <option>South Korea</option>
                                        <option>Mexico</option>
                                        <option>Indonesia</option>
                                        <option>Turkey</option>
                                        <option>Nigeria</option>
                                        <option>Bangladesh</option>
                                        <option>Pakistan</option>
                                        <option>Philippines</option>
                                        <option>Egypt</option>
                                        <option>Vietnam</option>
                                        <option>Algeria</option>
                                        <option>Sudan</option>
                                        <option>South Africa</option>
                                        <option>Saudi Arabia</option>
                                        <option>Ukraine</option>
                                        <option>Colombia</option>
                                        <option>Argentina</option>
                                        <option>Spain</option>
                                        <option>Poland</option>
                                        <option>Iran</option>
                                        <option>Netherlands</option>
                                        <option>Thailand</option>
                                        <option>Ethiopia</option>
                                        <option>Myanmar</option>
                                        <option>Kenya</option>
                                        <option>Angola</option>
                                        <option>Mozambique</option>
                                        <option>Uganda</option>
                                        <option>Tanzania</option>
                                        <option>Madagascar</option>
                                        <option>Cameroon</option>
                                        <option>Ghana</option>
                                        <option>Mali</option>
                                        <option>Niger</option>
                                        <option>Burkina Faso</option>
                                        <option>Chad</option>
                                        <option>Somalia</option>
                                        <option>Zimbabwe</option>
                                        <option>Afghanistan</option>
                                        <option>Yemen</option>
                                        <option>Syria</option>
                                        <option>Iraq</option>
                                        <option>Israel</option>
                                        <option>Lebanon</option>
                                        <option>Jordan</option>
                                        <option>Morocco</option>
                                        <option>Tunisia</option>
                                        <option>Libya</option>
                                        <option>Kuwait</option>
                                        <option>United Arab Emirates</option>
                                        <option>Oman</option>
                                        <option>Qatar</option>
                                        <option>Bahrain</option>
                                        <option>Sri Lanka</option>
                                        <option>Nepal</option>
                                        <option>Afghanistan</option>
                                        <option>Kazakhstan</option>
                                        <option>Uzbekistan</option>
                                        <option>Turkmenistan</option>
                                        <option>Tajikistan</option>
                                        <option>Kyrgyzstan</option>
                                        <option>Mongolia</option>
                                        <option>Malaysia</option>
                                        <option>Singapore</option>
                                        <option>Myanmar</option>
                                        <option>Laos</option>
                                        <option>Cambodia</option>
                                        <option>Timor-Leste</option>
                                        <option>Papua New Guinea</option>
                                        <option>Fiji</option>
                                        <option>New Zealand</option>
                                        <option>Chile</option>
                                        <option>Peru</option>
                                        <option>Venezuela</option>
                                        <option>Ecuador</option>
                                        <option>Bolivia</option>
                                        <option>Paraguay</option>
                                        <option>Uruguay</option>
                                        <option>Guatemala</option>
                                        <option>Honduras</option>
                                        <option>El Salvador</option>
                                        <option>Nicaragua</option>
                                        <option>Costa Rica</option>
                                        <option>Panama</option>
                                        <option>Cuba</option>
                                        <option>Haiti</option>
                                        <option>Dominican Republic</option>
                                        <option>Jamaica</option>
                                        <option>Puerto Rico</option>
                                        <option>Trinidad and Tobago</option>
                                        <option>Barbados</option>
                                        <option>Guyana</option>
                                        <option>Suriname</option>
                                        <option>Belize</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jammu and Kashmir</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                        <option>Andaman and Nicobar Islands</option>
                                        <option>Chandigarh</option>
                                        <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                        <option>Delhi</option>
                                        <option>Lakshadweep</option>
                                        <option>Puducherry</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
