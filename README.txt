iVeron Requirements Navigator V8.11 – PC Upload Button Fix

Root cause fixed: the DE/EN language switch replaced the complete upload label textContent and thereby removed the nested file input before the deferred module scanner initialized.

Fix:
- upload button text is now isolated in a span
- fileInput remains in the DOM during DE/EN initialization
- event registration is defensive for optional inputs
- mobile V5 stable core unchanged
- PC scanner engine unchanged
