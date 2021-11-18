import React from "react"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M2NmajN2bnNtZ2o4b2twMnZ0dnZudW1tZjQgbmVtYUBkYXJiYW4uZGV2&tmsrc=nema%40darban.dev">
          {/* <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"/> */}
          <p className="footer-text">Coming April 24, 2022!</p>
          <p className="footer-text">Click to add to your Google Calendar</p>
        </a>
      </div>
    </div>
  )
}
