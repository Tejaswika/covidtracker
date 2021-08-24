
import React ,{useEffect,useState}from 'react'
import './covid.css'
import './hover-min.css'

const Covid = () => {
    const [data,setData]=useState([]);
    const getValue =async () => {
       try{
            const res= await fetch('https://data.covid19india.org/data.json');
            const actualData= await res.json();
            setData(actualData.statewise[0]);

       }
       catch(err){
           console.log(err);
       }
    }
    useEffect(() => {
        getValue();
    }, [])
    return (
        <>
        <section>
           <h1 className="main_heading">Live Covid-19 Tracker</h1> 
           <ul className="all_card">
               <li className="card hvr-wobble-horizontal hvr-float-shadow">
                   <div className="card_body">
                       <p className="card_heading"><span>Country</span></p>
                       <p className="card_main"><span>India</span></p>
                   </div>
                </li>
                <li className="card hvr-wobble-horizontal hvr-float-shadow">
                   <div className="card_body">
                       <p className="card_heading"><span>Recovered</span></p>
                       <p className="card_main"><span>{data.recovered}</span></p>
                   </div>
                </li>
                <li className="card hvr-wobble-horizontal hvr-float-shadow">
                   <div className="card_body">
                       <p className="card_heading"><span>Confirmed</span></p>
                       <p className="card_main"><span>{data.confirmed}</span></p>
                   </div>
                </li>
                </ul>
                <ul className="all_card">
                <li className="card hvr-wobble-horizontal hvr-float-shadow">
                   <div className="card_body">
                       <p className="card_heading"><span>Death</span></p>
                       <p className="card_main"><span>{data.deaths}</span></p>
                   </div>
                </li>
                <li className="card hvr-wobble-horizontal hvr-float-shadow">
                   <div className="card_body">
                       <p className="card_heading"><span>Active</span></p>
                       <p className="card_main"><span>{data.active}</span></p>
                   </div>
                </li>
                <li className="card hvr-wobble-horizontal hvr-float-shadow">
                   <div className="card_body">
                       <p className="card_heading"><span>Last Updated on</span></p>
                       <p className="card_main"><span>{data.lastupdatedtime}</span></p>
                   </div>
                </li>
           </ul>
        </section>
        </>
    )
}

export default Covid
