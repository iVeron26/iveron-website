iVeron Requirements Navigator V8.5 – V5 Mobile Scanner Restore

Basis: V8.4 current app design and navigation.
Change: Mobile Document Scan processing has been restored to the proven V5 implementation.

Preserved:
- current V8.4 design
- login
- DE/EN interface
- project phase dropdown
- PC layout
- existing private route

Restored from V5 on smartphone/mobile:
- camera capture input
- image upload
- PDF upload
- PDF.js 4.10.38 module implementation
- Tesseract.js 5 OCR (German + English)
- text extraction first, OCR fallback for scanned PDFs
- V5 standard detection and result context/page output

Deploy: replace the existing navigator folder in GitHub with the navigator folder from this ZIP.
Private URL remains unchanged.
