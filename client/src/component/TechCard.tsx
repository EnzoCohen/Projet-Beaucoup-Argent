import { useTech } from "../hooks/useTech"
import { CardLoad } from "./CardLoad";


export const TechCard = ()=>{
  const {tech , isLoading, error} = useTech();

  if (isLoading) {
   return <CardLoad></CardLoad>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  return(
  <div className="flex flex-col p-5 gap-3 self-center mx-auto max-w-5xl">
  {tech.map((unTech)=>(
  <div className="card card-side bg-base-100 shadow-sm relative">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie"
      
    />
  </figure>
  <div className="card-body">
    {/* Status placé en haut à droite avec un espace */}
    {unTech.avaible ?(<div
      aria-label="success"
      className="status status-success status-xl absolute top-2 right-2"
    ></div>): ((<div
      aria-label="error"
      className="status status-error status-xl absolute top-2 right-2"
    ></div>)) }
    

    <h1 className="card-title text-2xl">{`${unTech.nom} ${unTech.prenom}`}</h1>
    <p className="text-lg">{unTech.competence}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Afficher</button>
    </div>
  </div>
</div>
))}
  </div>
)
  
  
}