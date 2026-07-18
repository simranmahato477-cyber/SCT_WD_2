# Bug Report

## Bug 01

**Title:** Screenshot images were not visible in README  
**Severity:** Low  
**Status:** Fixed  

**Description:**  
The screenshot folder was empty, so GitHub could not display the project screenshots.

**Steps to Reproduce:**

1. Open the GitHub repository.
2. Open the README file.
3. Scroll to the screenshot section.

**Expected Result:**  
All stopwatch screenshots should be displayed.

**Actual Result:**  
Broken image icons were displayed.

**Fix:**  
Added the required image files to the screenshots folder and corrected their filenames and README paths.

---

## Bug 02

**Title:** Screenshot filenames contained double `.png` extension  
**Severity:** Low  
**Status:** Fixed  

**Description:**  
Some screenshots were saved as `.png.png`, while the README referenced `.png`.

**Fix:**  
Renamed the image files and updated the README paths.
