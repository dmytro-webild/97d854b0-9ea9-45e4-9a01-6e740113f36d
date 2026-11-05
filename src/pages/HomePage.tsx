import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingLayeredCards from '@/components/sections/pricing/PricingLayeredCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Expertise Comptable"
      title="ComptaVibes : Votre comptabilité sous un nouveau jour"
      description="Simplifiez vos finances avec notre expertise et nos solutions digitales de pointe. Dédiés à la croissance de votre entreprise."
      primaryButton={{
        text: "Découvrir nos services",
        href: "#features",
      }}
      secondaryButton={{
        text: "Prendre RDV",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-home-office-with-tablet-laptop-shows-infographics-accounting-data_482257-91198.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-ceo-startup-agency-impressed-by-financial-figures-tablet_482257-113917.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-budget-plan-spiral-notepad-pen-eyeglasses-laptop-blue-background_23-2148178557.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-building-with-facade-glass_1127-2162.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30142.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/calculator-book-unrolled-paper_23-2147823692.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Notre Vision Comptable"
      descriptions={[
        "ComptaVibes est né d'un constat simple : la comptabilité ne doit pas être une source de stress pour les entrepreneurs. Nous avons intégré la technologie au service de l'expertise humaine pour offrir une expérience fluide, réactive et sécurisée.",
        "Notre équipe est composée de professionnels passionnés, toujours à la pointe des évolutions fiscales et technologiques. Ensemble, nous construisons le futur de votre gestion financière avec transparence et proactivité.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Performances"
      title="Chiffres Clés"
      description="Des résultats concrets au service de votre sérénité."
      metrics={[
        {
          value: "+20%",
          title: "Croissance moyenne",
          description: "Nous aidons nos clients à optimiser leur structure financière pour stimuler leur développement.",
          imageSrc: "http://img.b2bpic.net/free-photo/angry-manager-office-berating-worker-hitting-performance-targets_482257-126645.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Nos Services"
      title="Une gestion optimisée à chaque étape"
      description="Des solutions sur-mesure pour vous accompagner au quotidien."
      items={[
        {
          tag: "Expertise",
          title: "Tenue comptable",
          description: "Gestion précise et conforme de votre comptabilité au quotidien.",
          primaryButton: {
            text: "Voir détails",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-house-with-automation-light-system-holding-smartphone-turning-light-using-voice-activated-application_482257-2271.jpg",
        },
        {
          tag: "Sécurité",
          title: "Conseils fiscaux",
          description: "Optimisez votre fiscalité en toute sécurité avec nos experts.",
          primaryButton: {
            text: "Voir détails",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/download-cloud-storage-back-up_53876-122800.jpg",
        },
        {
          tag: "Accompagnement",
          title: "Gestion sociale",
          description: "Simplifiez la gestion de vos collaborateurs et de vos obligations sociales.",
          primaryButton: {
            text: "Voir détails",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-group-co-workers_23-2147626397.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingLayeredCards
      tag="Tarifs"
      title="Des formules adaptées à votre activité"
      description="De la start-up à la PME, nous avons une solution pour vous."
      plans={[
        {
          tag: "Basique",
          price: "99€ / mois",
          description: "Idéal pour les auto-entrepreneurs et freelances.",
          primaryButton: {
            text: "Commencer",
            href: "#contact",
          },
          features: [
            "Tenue comptable simplifiée",
            "Conseil fiscal de base",
            "Accès plateforme",
          ],
        },
        {
          tag: "Pro",
          price: "249€ / mois",
          description: "La solution complète pour les TPE.",
          primaryButton: {
            text: "Commencer",
            href: "#contact",
          },
          features: [
            "Comptabilité complète",
            "Optimisation fiscale",
            "Gestion sociale comprise",
            "Support illimité",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Témoignages"
      title="Nos clients nous font confiance"
      description="Découvrez pourquoi les entreprises choisissent ComptaVibes."
      testimonials={[
        {
          name: "Julien D.",
          role: "Dirigeant",
          quote: "Enfin une comptabilité claire et efficace. Gain de temps précieux !",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-elegant-shaved-head-male-dressed-light-grey-suit_613910-11361.jpg",
        },
        {
          name: "Sophie L.",
          role: "Fondatrice",
          quote: "Leur expertise m'a sauvé sur plusieurs dossiers fiscaux complexes.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-office-by-window_1303-21128.jpg",
        },
        {
          name: "Marc B.",
          role: "CTO",
          quote: "Une équipe réactive qui comprend les besoins des entreprises technologiques.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1677.jpg",
        },
        {
          name: "Léa V.",
          role: "CEO",
          quote: "Je ne m'occupe plus de la paperasse, je me concentre sur mon business.",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-walking-outside-modern-office-building_1139-1078.jpg",
        },
        {
          name: "Pierre M.",
          role: "Directeur",
          quote: "Un service proactif et des conseils toujours très pertinents.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-stylish-man-elegant-black-suit-dark-background_613910-14840.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Questions"
      title="Besoin d'informations ?"
      description="Retrouvez ici les réponses aux questions fréquentes."
      items={[
        {
          question: "Comment changer d'expert-comptable ?",
          answer: "La procédure est simplifiée. Nous nous occupons de la transition avec votre ancien cabinet.",
        },
        {
          question: "Proposez-vous des outils en ligne ?",
          answer: "Oui, nous mettons à votre disposition une plateforme sécurisée pour consulter vos documents en temps réel.",
        },
        {
          question: "Comment prendre un premier rendez-vous ?",
          answer: "Contactez-nous via le formulaire ci-dessous ou directement par téléphone pour un entretien gratuit.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contactez-nous"
      text="Prêt à propulser vos finances ? Discutons de votre projet."
      primaryButton={{
        text: "Planifier un rendez-vous",
        href: "#",
      }}
      secondaryButton={{
        text: "Appelez-nous",
        href: "tel:0123456789",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
