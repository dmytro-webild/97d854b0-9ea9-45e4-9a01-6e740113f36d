import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "À propos",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#features"
  },
  {
    "name": "Tarifs",
    "href": "#pricing"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="ComptaVibes"
      ctaButton={{
        text: "Prendre RDV",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="ComptaVibes"
      columns={[
        {
          title: "Société",
          items: [
            {
              label: "À propos",
              href: "#about",
            },
            {
              label: "Carrières",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Tenue comptable",
              href: "#",
            },
            {
              label: "Conseil fiscal",
              href: "#",
            },
            {
              label: "Gestion sociale",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 ComptaVibes. Tous droits réservés."
      links={[
        {
          label: "Mentions légales",
          href: "#",
        },
        {
          label: "Confidentialité",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/download-cloud-storage-back-up_53876-122800.jpg?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
