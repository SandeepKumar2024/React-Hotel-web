import "./header.css";
import {
  faBed,
  faCab,
  faCalendarTimes,
  faCity,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  return (
    <div className="header">
      <div className="headerCont">
        <div className="headerItems">
          <div className="headerItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Car rentals</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faCity} />
            <span>Flight + hotel</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <div className="content">
          <h1>Find your next stay</h1>
          <p>Search deals on hotels, homes, and much more...</p>
        </div>

        <div className="headerSearch">
          <div className="headerSeachItem">
            <FontAwesomeIcon icon={faBed} className="haederIcon" />
            <input
              type="text"
              placeholder="where you want to go..."
              className="headerInput"
            />
          </div>
          <div className="headerSeachItem">
            <FontAwesomeIcon icon={faCalendarTimes} className="haederIcon" />
            <span
              onClick={() => setOpen(!open)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSeachItem">
            <FontAwesomeIcon icon={faPerson} className="haederIcon" />
            <span className="headerSearchText">2 Adults 2 children</span>
          </div>
          <div className="headerSeachItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
