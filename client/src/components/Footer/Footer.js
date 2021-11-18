import React from "react"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <h4>Arriving April 24, 2022!</h4>
        <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NWVwMGZsaWhwaTJhbnRyYWM1NWdvYWYwcjcgY19sMThldWZndTBudGptbDM2ZGgzZTIxbDJia0Bn&tmsrc=c_l18eufgu0ntjml36dh3e21l2bk%40group.calendar.google.com">
          {/* <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"/> */}
        <div className="d-grid gap-2">
          <button className="btn btn-lg btn-info" type="button">Click to add to your Google Calendar</button>
        </div>
        </a>
    </div>
  )
}
