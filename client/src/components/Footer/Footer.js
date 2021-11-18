import React from "react"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <h4>Arriving April 24, 2022!</h4>
        <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M2NmajN2bnNtZ2o4b2twMnZ0dnZudW1tZjQgbmVtYUBkYXJiYW4uZGV2&amp;tmsrc=nema%40darban.dev">
          {/* <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"/> */}
        <div class="d-grid gap-2">
          <button class="btn btn-lg btn-info" type="button">Click to add to your Google Calendar</button>
        </div>
        </a>
    </div>
  )
}
