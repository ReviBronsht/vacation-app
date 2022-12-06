import Header from "./components/header"
import Features from "./components/features"
import Vacations from "./components/vacations"
import { useEffect, useState } from "react"
import axios from "axios";

export default function Home() {
  // homepage allows user to view and search all their trips,
  // contains explanation about the website and allows users to navigate
  // to each trip and to add trip page
  const [trips, setTrips] = useState([]);

  useEffect(() => { //useeffect called to get data from api with axios after render and every page update
    axios.get(`https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations`)
        .then((res) => {
            console.log(res.data);
            setTrips(res.data);
        })
}, [])

  return ( // homepage header, features and vacations components
    <div>
      <Header />
      <br/>
      <Features />
      <br/>
      {trips.length > 0 ? <Vacations trips={trips}/> : ""}
    </div>
  )
}
