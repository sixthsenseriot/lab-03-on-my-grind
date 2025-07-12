import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";
import "./BaristaForm.css";

const BaristaForm = () => {
    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs["temperature"]) {
            setCheckedTemperature("wrong");
        } else {
            setCheckedTemperature("correct");
        }

        if (trueRecipe.milk != inputs["milk"]) {
            setCheckedMilk("wrong");
        } else {
            setCheckedMilk("correct");
        }

        if (trueRecipe.syrup != inputs["syrup"]) {
            setCheckedSyrup("wrong");
        } else {
            setCheckedSyrup("correct");
        }

        if (trueRecipe.blended != inputs["blended"]) {
            setCheckedBlended("wrong");
        } else {
            setCheckedBlended("correct");
        }
    };

    const onNewDrink = () => {
        setInputs({
            temperature: "",
            milk: "",
            syrup: "",
            blended: "",
        });

        getNextDrink();

        setCheckedTemperature("");
        setCheckedSyrup("");
        setCheckedMilk("");
        setCheckedBlended("");
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(
            Math.random() * drinksJson.drinks.length
        );

        const capitalizedDrink = capitalizeWord(
            drinksJson.drinks[randomDrinkIndex].name
        );

        setCurrentDrink(capitalizedDrink);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    const [inputs, setInputs] = useState({
        temperature: "",
        milk: "",
        syrup: "",
        blended: "",
    });

    const [correct_temp, setCheckedTemperature] = useState("");
    const [correct_syrup, setCheckedSyrup] = useState("");
    const [correct_milk, setCheckedMilk] = useState("");
    const [correct_blended, setCheckedBlended] = useState("");

    const [currentDrink, setCurrentDrink] = useState("");

    const [trueRecipe, setTrueRecipe] = useState({});

    const ingredients = {
        temperature: ["hot", "lukewarm", "cold"],
        syrup: [
            "mocha",
            "vanilla",
            "toffee",
            "maple",
            "caramel",
            "other",
            "none",
        ],
        milk: ["cow", "oat", "goat", "almond", "none"],
        blended: ["yes", "turbo", "no"],
    };

    function capitalizeWord(word) {
        if (typeof word !== "string" || word.length === 0) return "";
        return word
            .split(" ")
            .map(
                (part) =>
                    part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
            )
            .join(" ");
    }

    return (
        <div className="BaristaForm">
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    <i class="fa-solid fa-arrows-rotate"></i>
                </button>
            </div>
            <form className="container">
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {capitalizeWord(inputs["temperature"])}
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
                        checked={inputs["temperature"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup}>
                        {capitalizeWord(inputs["syrup"])}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}>
                        {capitalizeWord(inputs["milk"])}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}>
                        {capitalizeWord(inputs["blended"])}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>
            </form>

            <br />

            <button
                type="submit"
                className="button submit"
                onClick={onCheckAnswer}
            >
                Check Answer
            </button>
        </div>
    );
};
export default BaristaForm;
