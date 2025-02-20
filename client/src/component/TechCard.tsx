import { useTech } from "../hooks/useTech"


export const TechCard = ()=>{
  const {tech , isLoading, error} = useTech();
  if (isLoading) {
    return <div className="text-center text-gray-600">Chargement...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  return(
  <div className="flex flex-col p-5 gap-3 self-center mx-auto max-w-5xl">
  {tech.map((unTech)=>(
  <div className="card card-side bg-base-100 shadow-sm">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Movie" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{unTech.login}</h2>
      <p>{unTech.competence}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Afficher</button>
      </div>
    </div>
  </div>))}
  </div>
)
  
  
}