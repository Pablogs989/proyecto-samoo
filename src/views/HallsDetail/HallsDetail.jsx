import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../features/event/eventSlice";

const HallsDetail = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="view-hall-container">
      <div className="title">
        <h1>La Font Blanca</h1>
      </div>

      {events.map((event, index) => (
        <div key={index} className="cards-info">
          {console.log(event)}
          <div className="card-1">
            <div className="img-card">
              <img src="" alt="" />
            </div>
            <div className="text-card">
              <div className="text-1">
                <p>{event.desc_event}</p>
                <p></p>
                <p>{event.company}</p>
              </div>
              <div className="date">{formatDate(event.date)}</div>
              <div className="hour">{event.hour}</div>
              <div className="pencil-and-number">
                <div className="pencil-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                  >
                    <path
                      d="M0.677734 17.25H21.6777V18.6875H0.677734V17.25ZM18.2277 5.03125C18.8277 4.45625 18.8277 3.59375 18.2277 3.01875L15.5277 0.43125C14.9277 -0.14375 14.0277 -0.14375 13.4277 0.43125L2.17773 11.2125V15.8125H6.97773L18.2277 5.03125ZM14.4777 1.4375L17.1777 4.025L14.9277 6.18125L12.2277 3.59375L14.4777 1.4375ZM3.67773 14.375V11.7875L11.1777 4.6L13.8777 7.1875L6.37773 14.375H3.67773Z"
                      fill="#1C1C24"
                    />
                  </svg>
                </div>
                <div className="number">{formatDate(event.date)}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HallsDetail;
