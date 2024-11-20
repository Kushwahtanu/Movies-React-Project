
import { movies } from "./data.js";
import { useState } from "react";

export default function Movies() {
  const [movieList, setmovieList] = useState(movies);
  const filterCategory = (cat)=>{
    setmovieList(movies.filter((data)=>data.category == cat))
  }
  return (
    <>
    <div className="my-3 " style={{width:"1000px", margin:"auto"}}>
        <div className="text-center">
 <button onClick={()=> setmovieList(Movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=> filterCategory("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=> filterCategory("Thriller")}type="button" className="btn btn-outline-light mx-3">Thriller</button>
<button onClick={()=> filterCategory("Animination")} type="button" className="btn btn-outline-info mx-3">Animination</button>
<button onClick={()=> filterCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=> filterCategory("Drama")}type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=> filterCategory("Si-Fi")} type="button" className="btn btn-outline-light mx-3">Si-Fi</button>

        </div>
    
    </div>
  
    <div
      style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        //gap: "2rem",
        textAlign: "center",
        width: "1300px",
        margin: "auto",
        marginTop:"1.5rem"
      }}
    >
      {movieList.map((data) => (
        <div key={data.id} style={{maxWidth:"250px", textAlign:'center'}}>
          <div style={{ padding: "10px"  }} className="hover-effect">
            <img
              src={data.poster_path}
              alt=""
              style={{
                width: "200px",
                border: "1px solid yellow",
                borderRadius: "10px",
              }}
            />
          </div>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>
        </div>
      ))}
    </div></>
  );
}

