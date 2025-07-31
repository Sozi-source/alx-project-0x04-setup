import React from "react";

interface ButtonProps {
    buttonLabel: string;
    buttonBackgroundColor: "red" | "blue" | "green";
    onClick?: () => void;
    }

const Button: React.FC<ButtonProps>=({buttonLabel, buttonBackgroundColor, onClick})=>{
    const colorClasses : Record<string, string> = {
        red: "bg-red-500 hover:bg-red-600",
        blue: "bg-blue-500 hover:bg-blue-600",
        green: "bg-green-500 hover:bg-green-600",
    };


    return (
        <button
            className={`text-white font-semibold py-2 px-4 rounded ${colorClasses[buttonBackgroundColor]}`}
            onClick={onClick}
        >
            {buttonLabel}
        </button>
          
    );
}
export default Button;