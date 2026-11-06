# Shourya Nature Way — Updated Website

Responsive static website for GitHub Pages, Netlify or Vercel.

## Included
- Updated gallery with the newly supplied original resort, club, pool and restaurant photos.
- Removed the deleted `gallery-02.webp` and `gallery-03.webp` entries from the visible gallery data.
- Gallery category filters and photo lightbox.
- Separate Food Menu and Bar Menu PDF viewer/download links (March 2026 files supplied by the business).
- UPI deep link and supplied QR image.
- Google Maps embedded location and directions link.
- Contact details transcribed from the supplied March 2026 Bar Menu PDF.

## Run locally
Open the folder in VS Code, install the Live Server extension, right-click `index.html`, then choose **Open with Live Server**.

## Verify before publishing
1. Confirm the UPI ID and QR still belong to the business.
2. Confirm the contact numbers and address are current.
3. Confirm the menu PDFs and prices are still current before publishing.
4. Check the website on mobile and desktop.
5. Ensure you have permission to publish all supplied photos and menu PDFs.

## Payment limitation
The UPI button opens a UPI app using the merchant UPI ID. It does not set an order amount, verify a payment, or confirm an order. Use it only for a booking advance or amount agreed directly with the business. Do not use this static page as an alcohol ordering or checkout system. For online orders and payment confirmation, a compliant backend and payment gateway workflow would be required.

## Publish with GitHub Pages
1. Create a public GitHub repository.
2. Upload the contents of this folder (not the parent folder) and keep the `assets` directory.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
5. Wait for GitHub Pages to publish your `https://USERNAME.github.io/REPOSITORY/` URL.

GitHub Pages hosting is free for public repositories. A custom domain is optional and normally costs money.
