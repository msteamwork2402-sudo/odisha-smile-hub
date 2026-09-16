# Add Google Analytics 4 site-wide

## Scope
- Store the supplied GA4 Measurement ID securely in the project environment.
- Add one shared analytics initializer at the website root so every page loads the same Google tag.
- Track the first page load and client-side route changes without loading duplicate scripts or sending duplicate page views.
- Leave SEO metadata, canonical URLs, sitemap, redirects, page content, and visual design unchanged.

## Verification and release
- Confirm only one Analytics script and one initialization exist on representative homepage and treatment routes.
- Confirm client-side navigation records route page views.
- Publish the updated website and verify the public site.

## Technical details
- The measurement ID will be exposed to browser code only as the public GA4 identifier; no private credential is embedded.
- Initialization will be idempotent to protect against duplicate tags during development and navigation.
