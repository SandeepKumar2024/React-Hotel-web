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
  const [openOtions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleChange = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
            <span
              onClick={() => setOpenOptions(!openOtions)}
              className="headerSearchText"
            >{`${options.adult}adult .${options.children}children .${options.room}room`}</span>
            {openOtions && (
              <div className="options">
                <div className="optionItem">
                  <span>Adult</span>
                  <div className="optionCon">
                    <button
                      disabled={options.adult <= 1}
                      className="optionBtn"
                      onClick={() => handleChange("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionNum">{options.adult}</span>
                    <button
                      className="optionBtn"
                      onClick={() => handleChange("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span>Children</span>
                  <div className="optionCon">
                    <button
                      disabled={options.children <= 0}
                      className="optionBtn"
                      onClick={() => handleChange("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionNum">{options.children}</span>
                    <button
                      className="optionBtn"
                      onClick={() => handleChange("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span>Room</span>
                  <div className="optionCon">
                    <button
                      disabled={options.room <= 1}
                      className="optionBtn"
                      onClick={() => handleChange("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionNum">{options.room}</span>
                    <button
                      className="optionBtn"
                      onClick={() => handleChange("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
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
