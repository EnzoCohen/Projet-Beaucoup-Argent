import { useState } from "react";
import { useTech } from "../hooks/useTech";
import { CardLoad } from "./CardLoad";
import { motion } from "framer-motion";

export const TechCard = () => {
  const { tech, isLoading, error } = useTech();
  const [technicienActif, setTechnicienActif] = useState(null);

  if (isLoading) {
    return <CardLoad />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col p-5 gap-3 self-center mx-auto max-w-5xl">
      {tech.map((unTech) => (
        <div key={unTech.id} className="card card-side bg-base-100 shadow-sm relative">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Technicien"
            />
          </figure>
          <div className="card-body">
            {unTech.avaible ? (
              <div
                aria-label="success"
                className="status status-success status-xl absolute top-2 right-2"
              ></div>
            ) : (
              <div
                aria-label="error"
                className="status status-error status-xl absolute top-2 right-2"
              ></div>
            )}

            <h1 className="card-title text-2xl">{`${unTech.nom} ${unTech.prenom}`}</h1>
            <p className="text-lg">{unTech.competence}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => setTechnicienActif(unTech)}>
                Afficher
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {technicienActif && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setTechnicienActif(null)} // Ferme en cliquant à l'extérieur
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 rounded-lg shadow-lg w-96 z-50"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant dans le modal
          >
            <h2 className="text-xl font-bold">{`${technicienActif.nom} ${technicienActif.prenom}`}</h2>
            <p className="text-gray-700 mt-2">{technicienActif.competence}</p>

            <div className="mt-4 flex justify-between">
              <button className="btn bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setTechnicienActif(null)}>
                Annuler
              </button>
              <button className="btn bg-green-500 text-white px-4 py-2 rounded">
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
