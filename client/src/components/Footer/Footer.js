import React from "react"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <h4>Arriving April 24, 2022!</h4>
      <p>.</p><p>.</p><p>.</p>
      <button className="btn btn-lg btn-link calendar-save" type="button">
        <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NWVwMGZsaWhwaTJhbnRyYWM1NWdvYWYwcjcgY19sMThldWZndTBudGptbDM2ZGgzZTIxbDJia0Bn&tmsrc=c_l18eufgu0ntjml36dh3e21l2bk%40group.calendar.google.com">Add our due date to your Google Calendar</a>
        <p/>
        <a target="_blank" rel="noopener noreferrer" href="https://babylist.com/baby-darban">Find our registry here</a>
        </button>
    </div>
  )
}
