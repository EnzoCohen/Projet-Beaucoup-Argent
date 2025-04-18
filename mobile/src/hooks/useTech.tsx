import { useEffect, useState } from "react";
import axios from "axios";

export type Tech = {
  id: number;
  login: string;
  password: string;
  competence: string;
  image:string;
  nom:string
  prenom:string
  avaible:boolean

};

export const useTech = () => {
  const [tech, setUsers] = useState<Tech[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const data = (await axios.get(`http://192.168.191.110:3000/technicien`)).data;
        setUsers(data);
        setError(undefined);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setTimeout(() => setIsLoading(false), 2000);      }
    };
    fetchTech();
  }, []);

  return {
    tech,
    isLoading,
    error,
  };
};
