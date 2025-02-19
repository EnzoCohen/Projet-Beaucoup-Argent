export const AppointmentCard =()=> {
    return (
      <div className="flex flex-col md:flex-row p-4 shadow-lg w-full max-w-3xl border rounded-lg">
        {/* Info praticien */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 p-4 border-r">
          <img
            src="https://via.placeholder.com/80"
            alt="Orlane Fagnoni"
            className="w-20 h-20 rounded-full mb-2"
          />
          <h2 className="text-lg font-bold text-blue-600">Mme Orlane FAGNONI</h2>
          <p className="text-sm text-gray-500">Diététicienne</p>
          <div className="flex items-center text-gray-500 text-sm mt-2">
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full">Prendre Rendez-vous</button>
        </div>
  
        {/* Disponibilités */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
            {["mercredi", "jeudi", "vendredi", "samedi", "dimanche", "lundi"].map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="font-semibold">{day}</span>
                <span className="text-xs">{19 + index} févr.</span>
                {day === "jeudi" ? (
                  <div className="mt-2 space-y-2">
                    <span className="block bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs">10:00</span>
                    <span className="block bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs">19:00</span>
                  </div>
                ) : (
                  <span className="text-gray-300">-</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  