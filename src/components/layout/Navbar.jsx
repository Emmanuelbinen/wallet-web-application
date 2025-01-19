import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="bg-red-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold">Wallet App</Link>
                    </div>
                    <div className="flex items-center">
                        <span className="px-4"> Welcome, Eric</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;