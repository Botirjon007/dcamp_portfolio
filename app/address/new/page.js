import React from "react";

export default function NewAddressPage() {
  return (
    <div>
      <section className="py-5 sm:py-7 bg-blue-100 h-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            <li className="inline-flex items-center">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Breadcrumbs
              </a>
              <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
            </li>
          </ol>
        </div>
      </section>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <aside className="md:w-1/3 lg:w-1/4 px-4">
              <ul className="sidebar">
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/products/new"
                  >
                    New Product <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/products"
                  >
                    All Products <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/orders"
                  >
                    All Orders <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/users"
                  >
                    All Users <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me"
                  >
                    Your Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me/orders"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me/update"
                  >
                    Update Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me/update_password"
                  >
                    Update Password
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer">
                    Logout
                  </a>
                </li>
              </ul>
            </aside>
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
                style={{ maxWidth: "480px" }}
              >
                <form>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Add new Address
                  </h2>
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Address* </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type your address"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-3">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> City </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type your city"
                      />
                    </div>
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> State </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type state here"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> ZIP code </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Type zip code here"
                      />
                    </div>
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Phone No </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Type phone no here"
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Country </label>
                    <select className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                      <option value="Andorra">Andorra</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Albania">Albania</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Angola">Angola</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Argentina">Argentina</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Austria">Austria</option>
                      <option value="Australia">Australia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Åland">Åland</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Benin">Benin</option>
                      <option value="Saint Barthélemy">Saint Barthélemy</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire">Bonaire</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belize">Belize</option>
                      <option value="Canada">Canada</option>
                      <option value="Cocos [Keeling] Islands">
                        Cocos [Keeling] Islands
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Ivory Coast">Ivory Coast</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Chile">Chile</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Curacao">Curacao</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Germany">Germany</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Algeria">Algeria</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Spain">Spain</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Finland">Finland</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Georgia">Georgia</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Greece">Greece</option>
                      <option value="South Georgia and the South Sandwich Islands">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guam">Guam</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Heard Island and McDonald Islands">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="India">India</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Iran">Iran</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Italy">Italy</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Japan">Japan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="North Korea">North Korea</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Libya">Libya</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Saint Martin">Saint Martin</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Mali">Mali</option>
                      <option value="Myanmar [Burma]">Myanmar [Burma]</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Macao">Macao</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Malta">Malta</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Namibia">Namibia</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="Niger">Niger</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Norway">Norway</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Niue">Niue</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Oman">Oman</option>
                      <option value="Panama">Panama</option>
                      <option value="Peru">Peru</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Poland">Poland</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Pitcairn Islands">Pitcairn Islands</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Palau">Palau</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Réunion">Réunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Somalia">Somalia</option>
                      <option value="Suriname">Suriname</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="São Tomé and Príncipe">
                        São Tomé and Príncipe
                      </option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Sint Maarten">Sint Maarten</option>
                      <option value="Syria">Syria</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Togo">Togo</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="Uganda">Uganda</option>
                      <option value="U.S. Minor Outlying Islands">
                        U.S. Minor Outlying Islands
                      </option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vatican City">Vatican City</option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="British Virgin Islands">
                        British Virgin Islands
                      </option>
                      <option value="U.S. Virgin Islands">
                        U.S. Virgin Islands
                      </option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="Kosovo">Kosovo</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      {/* Add other options here */}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
