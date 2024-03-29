import React from "react";
import { motion } from "framer-motion";

const ForecastPage = () => {
    return (
        <motion.div
            className="bg-gray-200 h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-4xl font-bold">Forecast Page</h1>
        </motion.div>
    );
    };

export default ForecastPage;