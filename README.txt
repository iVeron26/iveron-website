iVeron Requirements Navigator V8.12 – OCR + Result Layout

Basis: V8.11 stable build.

PC changes:
- compact result cards instead of oversized result typography
- stronger OCR for small/dense document images through local upscaling and contrast preparation
- Tesseract segmentation optimized for dense document pages
- tolerant OCR normalization for ISO/EN/DIN references and common I/1 errors
- CEN ISO/TR recognition added
- uploader and scanner event flow preserved

Mobile stable V5 core is unchanged.

Deploy: replace the existing navigator folder in GitHub.
After deployment press Ctrl+F5 once on PC if an older cached version appears.
