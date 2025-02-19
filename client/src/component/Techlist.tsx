import { useTech } from "../hooks/useTech";

export const TechList = () => {
  const { isLoading, tech, error } = useTech();

  if (isLoading) {
    return <div className="text-center text-gray-600">Chargement...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-6xl min-w-xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
      <ul className="bg-gray-50 rounded-lg shadow-md divide-y divide-gray-200">
        {tech.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between py-6 px-6 hover:bg-gray-100 transition duration-200"
          >
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full border border-gray-300"
                src={"https://assistanteplus.fr/wp-content/uploads/2022/04/chat-midjourney-750x375.webp"}
              />
              <div className="ml-6">
                <div className="font-semibold text-lg text-gray-900">{item.login}</div>
                <div className="text-sm uppercase font-medium text-gray-500">{item.competenece}</div>
              </div>
            </div>

            <p className="text-sm text-gray-600">{item.id}</p>

            <div className="flex space-x-4">
              <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>
              <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5-5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
