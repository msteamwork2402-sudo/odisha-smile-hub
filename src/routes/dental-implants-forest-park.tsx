import { createFileRoute } from "@tanstack/react-router";
import { LocationPageTemplate } from "@/components/implant/LocationPageTemplate";
import { LOCATION_PAGES, type CityKey } from "@/lib/location-data";
import { REVIEWER, SITE } from "@/lib/implant-cluster";
import { TREATMENT_ADDRESS, TREATMENT_LOCATION } from "@/lib/site";

const CITY_KEY: CityKey = "forest_park";
const city = LOCATION_PAGES[CITY_KEY];
const URL = `${SITE}/${city.slug}/`;

export const Route = createFileRoute("/dental-implants-forest-park")({
  staticData: { sitemap: true },
  component: () => <LocationPageTemplate cityKey={CITY_KEY} />,
  head: () => ({
    meta: [
      { title: city.pageTitle },
      { name: "description", content: city.metaDescription },
      { property: "og:title", content: city.pageTitle },
      { property: "og:description", content: city.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Odisha Locations", item: `${SITE}/#location` },
                { "@type": "ListItem", position: 3, name: city.pageTitle, item: URL },
              ],
            },
            {
              "@type": "MedicalWebPage",
              name: city.pageTitle,
              description: city.metaDescription,
              url: URL,
              inLanguage: "en-IN",
              lastReviewed: REVIEWER.reviewedOnISO,
              reviewedBy: {
                "@type": "Person",
                name: REVIEWER.name,
                jobTitle: REVIEWER.role,
                url: REVIEWER.profileUrl,
              },
              provider: {
                "@type": "MedicalBusiness",
                name: "Odisha Dental Implants",
                url: SITE,
                address: TREATMENT_ADDRESS,
                location: TREATMENT_LOCATION,
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: city.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
});
