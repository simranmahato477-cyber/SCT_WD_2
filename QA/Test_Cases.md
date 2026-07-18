# Stopwatch Web Application Test Cases

| Test ID | Test Scenario | Steps | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| TC-01 | Initial timer display | Open the application | Timer shows 00:00:00.000 | Timer shows correctly | Pass |
| TC-02 | Start stopwatch | Click Start | Timer begins counting | Timer begins counting | Pass |
| TC-03 | Pause stopwatch | Start timer, then click Pause | Timer stops at current time | Timer stops correctly | Pass |
| TC-04 | Resume stopwatch | Pause timer, then click Start | Timer continues from paused time | Timer resumes correctly | Pass |
| TC-05 | Reset stopwatch | Start timer, then click Reset | Timer returns to 00:00:00.000 | Timer resets correctly | Pass |
| TC-06 | Add lap | Start timer and click Lap | A new lap record appears | Lap record appears | Pass |
| TC-07 | Add multiple laps | Click Lap multiple times | Multiple lap records appear | Multiple laps appear | Pass |
| TC-08 | Lap numbering | Add three laps | Laps are numbered correctly | Numbering is correct | Pass |
| TC-09 | Lap total time | Add a lap while timer runs | Total elapsed time is displayed | Total time is correct | Pass |
| TC-10 | Lap interval time | Add multiple laps | Each lap shows its interval time | Interval time is displayed | Pass |
| TC-11 | Reset clears laps | Add laps, then click Reset | Timer and lap records are cleared | All data is cleared | Pass |
| TC-12 | Pause button state | Open application before starting | Pause button is disabled | Button is disabled | Pass |
| TC-13 | Lap button state | Open application before starting | Lap button is disabled | Button is disabled | Pass |
| TC-14 | Start button state | Start the stopwatch | Start button becomes disabled | Button is disabled | Pass |
| TC-15 | Responsive layout | Open on different screen sizes | Layout remains usable | Layout remains responsive | Pass |
| TC-16 | Rapid Start clicks | Click Start repeatedly | Only one timer should run | One timer runs | Pass |
| TC-17 | Rapid Reset clicks | Click Reset repeatedly | No error occurs | No error occurs | Pass |
| TC-18 | Long-running timer | Keep stopwatch running for several minutes | Timer continues accurately | Timer works correctly | Pass |
| TC-19 | Browser refresh | Start timer and refresh page | Application resets safely | Application resets | Pass |
| TC-20 | Browser compatibility | Test in Chrome and Edge | Application works correctly | Works correctly | Pass |
