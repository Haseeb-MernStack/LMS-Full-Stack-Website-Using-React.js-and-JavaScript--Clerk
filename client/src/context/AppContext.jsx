import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  // Fetch all courses
  const fetchAllCourses = async () => {
    // You can simulate a delay or fetch from backend here if needed
    setAllCourses(dummyCourses);
  };

  // Calculate average course rating
  const calculateRating = (course) => {
    if(course.courseRatings.length === 0 ){
      return 0 ;
    }
    let totalRating = 0 ;
    course.courseRatings.forEach(rating=>{
      totalRating += rating.rating;
    })
    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,setIsEducator
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
