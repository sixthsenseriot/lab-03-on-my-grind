import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
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
        <div className="RecipeChoices">
            <div className="radio-buttons">
                {choices &&
                    choices.map((choice) => (
                        <li key={choice}>
                            <input
                                id={choice}
                                value={choice}
                                name={label}
                                type="radio"
                                onChange={handleChange}
                                checked={checked == choice}
                            />
                            {capitalizeWord(choice)}
                        </li>
                    ))}
            </div>
        </div>
    );
};

export default RecipeChoices;
