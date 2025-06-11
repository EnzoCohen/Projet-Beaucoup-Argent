import { useEffect, useState } from "react";
import { PageNav } from "../component/PageNav";
import { Tech } from "../hooks/useTech";

const AdminDashboard = () => {
  const [techniciens, setTechniciens] = useState<Tech[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await fetch("http://localhost:3000/technicien");
        const data = await res.json();
        setTechniciens(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTech();
  }, []);

  return (
    <PageNav>
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Compétence</th>
                  <th>Disponible</th>
                </tr>
              </thead>
              <tbody>
                {techniciens.map((tech) => (
                  <tr key={tech.id}>
                    <td>{tech.nom}</td>
                    <td>{tech.prenom}</td>
                    <td>{tech.competence}</td>
                    <td>{tech.avaible ? "Oui" : "Non"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PageNav>
  );
};

export default AdminDashboard;
