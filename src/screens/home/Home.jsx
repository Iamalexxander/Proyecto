import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { motion } from 'framer-motion';

const Home = () => {
  const MenuCard = ({ title, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-cyan-100 backdrop-blur-sm"
    >
      <div className="flex justify-center">
        <motion.div 
          whileHover={{ rotate: 5 }}
          className="w-40 h-40 mt-3 mb-5 rounded-full border-4 border-cyan-500 shadow-lg bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center"
        >
          {title === "Próximas Citas" ? (
            <Ionicons name="calendar-outline" size={96} color="#0891b2" />
          ) : (
            <Ionicons name="people-outline" size={96} color="#0891b2" />
          )}
        </motion.div>
      </div>
      <h3 className="text-cyan-600 text-xl font-bold mb-3 text-center">
        {title}
      </h3>
      <p className="font-medium text-center mb-5 text-gray-600 leading-relaxed">
        {description}
      </p>
      <motion.button 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-3 px-6 rounded-xl shadow-lg font-semibold transition-all duration-300 ease-in-out"
      >
        Ver {title}
      </motion.button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-50 p-6">
      <div className="max-w-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-cyan-100"
        >
          <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
            Sistema de{" "}
            <span className="text-cyan-500">
              Citas Médicas
            </span>
          </h1>
          <p className="mt-4 font-medium text-center text-gray-600 leading-relaxed">
            Gestione sus citas médicas de manera fácil y eficiente
          </p>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent my-8" />

        <MenuCard 
          title="Próximas Citas"
          description="Visualice y gestione sus próximas citas médicas programadas."
        />

        <MenuCard
          title="Doctores Disponibles"
          description="Explore nuestro directorio de profesionales médicos y sus especialidades."
        />
      </div>
    </div>
  );
};

export default Home;
