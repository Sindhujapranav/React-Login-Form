import React from 'react';
import './form.css';
import { Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {

    const [FirstName, setFirstName] = React.useState("");
    const [LastName, setLastName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [ConfirmPassword, setConfirmPassword] = React.useState("");
    const [MaritalStatus, setMaritalStatus] = React.useState("");
    const [food, setfood] = React.useState([]);
    const [country, setcountry] = React.useState("");
    const [selectstate, setselectstate] = React.useState("");
    const [state, setstate] = React.useState([]);
    const [value, setvalue] = React.useState([]);
    const selection = [
        {
            name: "INDIA",
            states: ["tamilnadu", "kerala", "Delhi"],
        },
        {
            name: "USA",
            states: ["New York", "California", "Texas"],
        },
    ];
    function random_function(e) {
        console.log("state", state);
        setcountry(e.target.value);
        setstate(selection.filter((d, i) => d.name == e.target.value)[0].states);
        console.log("state", state);
    }
    function f(e) {
        setselectstate(e.target.value);
    }


    function handleEnter(event) {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }

    }
    function submit() {
        if (Password == ConfirmPassword) {
            return setvalue(
                value.concat([
                    { FirstName, LastName, Email, food, MaritalStatus, country, selectstate },
                ]),

                setFirstName(""),
                setLastName(""),
                setEmail(""),
                setPassword(""),
                setConfirmPassword(""),
                setMaritalStatus(""),
                setfood(""),
                setcountry(""),

            )
        } else {
            alert("confirm password Password is incorrect");
        }

    }

    return (
        console.log(value),
        (
            <React.Fragment>
                <Container><Row><Col>
                    <h1>React-Form</h1>
                    <form className="wrapper">
                        <div className="form-wrapper">
                            <div className="input">
                                <label>FirstName:</label>
                                <input
                                    type="text" value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onKeyDown={handleEnter} required
                                ></input>
                            </div>

                            <div className="input">
                                <label>LastName:</label>
                                <input
                                    type="text" value={LastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    onKeyDown={handleEnter} required
                                ></input>
                            </div>

                            <div className="input">
                                <label>Email:</label>
                                <input
                                    type="email" value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required onKeyDown={handleEnter}
                                ></input>
                            </div>

                            <div className="input">
                                <label>Password:</label>
                                <input
                                    type="password" value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={handleEnter} required
                                />
                            </div>

                            <div className="input">
                                <label>ConfirmPassword:</label>
                                <input
                                    type="password"
                                    value={ConfirmPassword}
                                    refs="rrpassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    onKeyDown={handleEnter}
                                />
                            </div>

                            <div className="input">
                                <label>Marital Status:</label>


                                <label >Single</label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="single"
                                    refs="single"
                                    className="radio-inline"
                                    onChange={(e) => setMaritalStatus(e.currentTarget.value)}
                                    checked={MaritalStatus == "single"}
                                />

                                <label>Married</label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="married"
                                    refs="married"
                                    className="radio-inline"
                                    onChange={(e) => setMaritalStatus(e.currentTarget.value)}
                                    checked={MaritalStatus == "married"}
                                />

                                <label>RelationShip</label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Relationship"
                                    refs="Relationship"
                                    className="radio-inline"
                                    onChange={(e) => setMaritalStatus(e.currentTarget.value)}
                                    checked={MaritalStatus == "Relationship"}
                                />
                            </div>

                            <div className="input">

                                <label>Choice Of Food:</label>

                                <input
                                    type="radio" name="food1" value="Desserts"
                                    onChange={(e) => setfood(food.concat([e.target.value]))}
                                    checked={food.includes("Desserts")}
                                />
                                <label>Desserts</label>

                                <input
                                    type="radio" name="food2" value="Briyani"
                                    onChange={(e) => setfood(food.concat([e.target.value]))}
                                    checked={food.includes("Biriyani")}
                                />
                                <label>Biriyani</label>

                                <input
                                    type="radio" name="food3" value="Meals"
                                    onChange={(e) => setfood(food.concat([e.target.value]))}
                                    checked={food.includes("Meals")}
                                />
                                <label>Meals</label>

                                <input
                                    type="radio" name="food4" value="Meals"
                                    onChange={(e) => setfood(food.concat([e.target.value]))}
                                    checked={food.includes("Non-vegetarian")}
                                />
                                <label>Non-vegetarian</label>

                                <input
                                    type="radio" name="food5" value="Meals"
                                    onChange={(e) => setfood(food.concat([e.target.value]))}
                                    checked={food.includes("vegetarian")}
                                />
                                <label>vegetarian</label>

                            </div>

                            <div className="input">
                                <label>Country</label>

                                <select onChange={(e) => random_function(e)}>
                                    <option>select option</option>
                                    <option>INDIA</option>
                                    <option>USA</option>
                                </select>

                            </div>

                            <div className="input">
                                <label>State</label>
                                <select onChange={(e) => f(e)} onKeyDown={handleEnter}>
                                    <option>Choose State</option>
                                    {state.map((data, i) => {
                                        return <option key={i}>{data}</option>;
                                    })}
                                </select>
                            </div>

                            <div className="input">
                                <button type="submit" onClick={() => submit()}>Submit</button>
                            </div>
                        </div>

                    </form>
                </Col>
                    <Col>

                        <Table>
                            <thead>
                                <tr>
                                    <th>First name</th>
                                    <th>Last name:</th>
                                    <th>E-mail</th>
                                    <th>Marital Status</th>
                                    <th>Choice of food</th>
                                    <th>Country</th>
                                    <th>state</th>
                                </tr>
                            </thead>
                            <tbody>
                                {value.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.FirstName}</td>
                                            <td>{data.LastName}</td>
                                            <td>{data.Email}</td>
                                            <td>{data.MaritalStatus}</td>
                                            <td>{data.food}</td>
                                            <td>{data.country}</td>
                                            <td>{data.selectstate}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row></Container>
            </React.Fragment>
        )
    )
}
export default Form;