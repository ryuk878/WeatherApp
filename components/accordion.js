import React from 'react';

export const Accordion = ({daily, followingDay}) => {
    const InnerAccordion = ({ title, children, minTemp, maxTemp, icon }) => {
        const [isOpen, setOpen] = React.useState(false);
        
        return (
            
          <div className="accordion-wrapper">
            <div
              className={`accordion-title ${isOpen ? "open" : ""}`}
              onClick={() => setOpen(!isOpen)}
              >
              <p>         {title}{" "}    <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="icon"
            />{" "}
            {minTemp} / {maxTemp} C°</p>
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
              <div className="accordion-content">{children}</div>
            </div>
          </div>
        );
      };

    return(
       
       
      
    <InnerAccordion
    
      title={followingDay.toLocaleDateString()}
      icon={daily.weather[0].icon}
      minTemp={daily.temp.min.toFixed(1)}
      maxTemp={daily.temp.max.toFixed(1)}
    >
        
    <p>Ochtend: {Math.floor(daily.temp.morn.toFixed(1))}C°</p>
    <p>Middag: {Math.floor(daily.temp.day.toFixed(1))}C°</p>
    <p>Avond: {Math.floor(daily.temp.eve.toFixed(1))}C°</p>
    <p>Nacht  : {Math.floor(daily.temp.night.toFixed(1))}C°</p>
    </InnerAccordion>)
   
}