import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";

const BaristaForm = () => {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    })

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const [correctTemperature, setCorrectTemperature] = useState('');
    const [correctMilk, setCorrectMilk] = useState('');
    const [correctSyrup, setCorrectSyrup] = useState('');
    const [correctBlended, setCorrectBlended] = useState('');

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'caramel', 'toffee', 'maple', 'other', 'none'],
        'milk': ['cow', 'almond', 'goat', 'oat', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }    

    const onNewDrink = () => {
        setCorrectBlended('');
        setCorrectMilk('');
        setCorrectSyrup('');
        setCorrectTemperature('');
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        })
        getNextDrink();
    }

    const onCheckAnswer = () => {
        if (trueRecipe.temp === inputs.temperature) {
            setCorrectTemperature('correct');
        } else {
            setCorrectTemperature('wrong');
        }

        if (trueRecipe.syrup === inputs.syrup) {
            setCorrectSyrup('correct');
        } else {
            setCorrectSyrup('wrong');
        }

        if (trueRecipe.milk === inputs.milk) {
            setCorrectMilk('correct');
        } else {
            setCorrectMilk('wrong');
        }

        if (trueRecipe.blended === inputs.blended) {
            setCorrectBlended('correct');
        } else {
            setCorrectBlended('wrong');
        }
    }
  
  return (
    <div className="barista-form">
        <h2>Hi, I'd Like to order a:</h2>
        <div className="drink-container">
            <h2 className="mini-header">{currentDrink}</h2>
            <button type='new-drink-button'
                className="button newdrink"
                onClick={onNewDrink}
            >
                🔄
            </button>
        </div>
        <form className="container">
        <div className="mini-container">
            <h3>Temperature</h3>
            <div className={"answer-space " + correctTemperature + '-field'} id={correctTemperature}>
                {inputs["temperature"]}
            </div>
            <RecipeChoices
                handleChange={(e) =>
                setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))
                }
                label="temperature"
                choices={ingredients["temperature"]}
                currentVal={inputs["temperature"]}
            />
        </div>
        <div className="mini-container">
            <h3>Milk</h3>
            <div className={'answer-space ' + correctMilk + '-field'} id={correctMilk}>
                {inputs['milk']}
            </div>
            <RecipeChoices 
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value
                }))}
                label='milk' 
                choices={ingredients['milk']} 
                checked={inputs['milk']}
            />
        </div>
        <div className="mini-container">
            <h3>Syrup</h3>
            <div className={'answer-space ' + correctSyrup + '-field'} id={correctSyrup}>
                {inputs['syrup']}
            </div>
            <RecipeChoices 
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value
                }))}
                label='syrup' 
                choices={ingredients['syrup']} 
                checked={inputs['syrup']}
            />
        </div>
        <div className="mini-container">
            <h3>Blended</h3>
            <div className={'answer-space ' + correctBlended + '-field'} id={correctBlended}>
                {inputs['blended']}
            </div>
            <RecipeChoices 
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value
                }))}
                label='blended' 
                choices={ingredients['blended']} 
                checked={inputs['blended']}
            />
        </div>
        </form>
        <button type='submit' className="button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>
        <button type='new-drink-button' className="button submit" onClick={onNewDrink}>
            New Drink
        </button>
    </div>
  );
  
};

export default BaristaForm;