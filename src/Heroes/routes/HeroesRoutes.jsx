import { Navbar } from "../../UI";
import { Navigate, Route, Routes } from "react-router-dom";
import {MarvelPage,DCPage, SearchPAge, HeroPage} from '../Pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
      
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} /> 
        <Route path="hero/:id" element={<HeroPage/>}/>

        <Route path="/" element={<Navigate to = '/marvel'/>} /> 
        
        
        <Route path="search" element={<SearchPAge/>}/>
      </Routes>
      </div>
    </>
  );
};
