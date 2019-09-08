import React, { Component } from "react";
import Tour from "../Tour";
import "./Tourlist.scss";
import {TourData} from "../../TourData";



class Tourlist extends Component {
     state = {
        tours: TourData
    };
     removetour = id => {
        console.log(id);
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
         this.setState({
           tours: sortedTours
         });
     };
    render() {
        const tours= this.state.tours.map(item => item.Tour);
         console.log(Tour);
        //console.log(this.state.tourS);
         //const { tours } = this.state;


         return (
          <section className="tourlist">
            {/* {this.state.tours.map((tours) => (<Tour key={tours.id}
          tours={Tour} removeTour={this.removeTour} />  */}
              
            
             {this.state.tours.map((item) => (
           <Tour key={item.id} info={item} removeTour= {this.removeTour} /> 
       ))}
          </section>     
        

        
        );
    }
}

export default Tourlist;