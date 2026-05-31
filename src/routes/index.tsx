import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Calendar,
  MapPin,
  Heart,
  CakeSlice,
  Users,
  Sparkles,
  Phone,
  Check,
} from "lucide-react";
// import scones removed
import biscuits from "@/assets/biscuits.png";
import queenCakes from "@/assets/queen-cakes.png";
import goldenScones from "@/assets/golden-scones.png";
import cupcakeJamTarts from "@/assets/cupcake-jam-tarts.jpg";
import heroCover from "@/assets/hero-cover.jpg";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Zee Bakehouse — Baked fresh. Made with love." },
      {
        name: "description",
        content:
          "Homemade scones, jam tarts and queen cakes baked fresh in Garankuwa Unit 9. Order on WhatsApp.",
      },
      { property: "og:title", content: "Zee Bakehouse" },
      {
        property: "og:description",
        content:
          "Homemade bakes made fresh in Garankuwa Unit 9 for family moments, events, and everyday cravings.",
      },
    ],
  }),
  component: Index,
}));

const WA_BASE = "https://wa.me/27720225059";
const waLink = (msg: string) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;
const WA_ORDER = waLink("Hi Zee Bakehouse, I would like to place an order.");

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892a11.86 11.86 0 001.586 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.489-8.413z" />
    </svg>
  );
}

const decor = (
  <span className="inline-flex items-center justify-center gap-2 text-primary/70">
    <span className="h-px w-8 bg-primary/40" />
    <Heart className="h-4 w-4" />
    <span className="h-px w-8 bg-primary/40" />
  </span>
);

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#bakes", label: "Our Bakes" },
    { href: "#prices", label: "Price List" },
    { href: "#how", label: "How to Order" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-foreground/80 hover:bg-accent"
          aria-label="Open menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <CakeSlice className="h-5 w-5 text-primary" />
            <h1 className="font-serif text-xl font-bold leading-none sm:text-2xl">
              Zee Bakehouse
            </h1>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
            Baked fresh. Made with love. <Heart className="inline h-3 w-3 text-primary" />
          </p>
        </div>
        <a
          href={WA_ORDER}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="rounded-full bg-primary/10 p-2.5 text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function OrderButton({
  href,
  label,
  variant = "primary",
  className = "",
}: {
  href: string;
  label: string;
  variant?: "primary" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-[var(--shadow-card)] transition active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "bg-background text-primary hover:bg-background/90";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EF] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
              style={{ animation: "heroFadeIn 0.8s ease-out both" }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Garankuwa Unit 9</span>
            </div>

            <h2
              className="font-serif text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl text-foreground"
              style={{ animation: "heroFadeIn 0.8s ease-out 0.15s both" }}
            >
              Baked fresh.
              <br className="hidden sm:block" />
              <span className="text-primary relative inline-block">
                Made with love.
                <svg className="absolute -bottom-2 left-0 w-full text-primary/30" viewBox="0 0 200 10" preserveAspectRatio="none" style={{ fill: "currentColor" }}>
                  <path d="M0,5 Q100,-5 200,5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>

            <p
              className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
              style={{ animation: "heroFadeIn 0.8s ease-out 0.3s both" }}
            >
              Homemade bakes made fresh for family moments, events, and everyday cravings. Perfected with care and the finest ingredients.
            </p>

            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              style={{ animation: "heroFadeIn 0.8s ease-out 0.45s both" }}
            >
              <OrderButton
                href={WA_ORDER}
                label="Order on WhatsApp"
                className="px-8 py-4 text-base shadow-lg"
              />
            </div>
            
            <p
              className="mt-6 inline-flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start"
              style={{ animation: "heroFadeIn 0.8s ease-out 0.6s both" }}
            >
              <Calendar className="h-4 w-4 text-primary/70" />
              Orders must be placed at least 3 days in advance.
            </p>
          </div>

          {/* Right Column: Image */}
          <div 
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            style={{ animation: "heroFadeIn 1s ease-out 0.3s both" }}
          >
            <div className="relative rounded-3xl bg-white p-2 shadow-2xl">
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  src={heroCover}
                  alt="Zee Bakehouse fresh bakes"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl border border-border/50 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground mt-1">Homemade</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Blob/Decoration */}
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-[#E7D2BD]/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

const products = [

  {
    id: "biscuits",
    title: "Jam tarts",
    img: biscuits,
    desc: "Delicious jam tarts baked fresh for sharing.",
    btn: "Order Jam tarts",
    link: waLink("Hi Zee Bakehouse, I would like to order jam tarts."),
  },
  {
    id: "queen-cakes",
    title: "Queen Cakes",
    img: queenCakes,
    desc: "Classic homemade queen cakes, soft, simple, and delicious.",
    btn: "Order Queen Cakes",
    link: waLink("Hi Zee Bakehouse, I would like to order queen cakes."),
  },
  { id: "golden-scones-platter", title: "Golden Scones Platter", img: goldenScones, desc: "Delicious golden scones platter, perfect for sharing.", btn: "Order Golden Scones Platter", link: waLink("Hi Zee Bakehouse, I would like to order Golden Scones Platter.") },
  {
    id: "cupcake-jam-tarts",
    title: "Cup cake jam tarts",
    img: cupcakeJamTarts,
    desc: "Golden cupcake jam tarts, freshly baked and perfect for any occasion.",
    btn: "Order Cup cake jam tarts",
    link: waLink("Hi Zee Bakehouse, I would like to order Cup cake jam tarts."),
  },
];

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: boolean; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      {eyebrow !== false && decor}
      <h3 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">{title}</h3>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Bakes() {
  return (
    <section id="bakes" className="bg-card/40 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Our Bakes" subtitle="Made with care. Baked to perfection." />
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col items-center p-6 text-center">
                <h4 className="font-serif text-2xl font-bold">{p.title}</h4>
                <Heart className="my-2 h-4 w-4 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 w-full">
                  <OrderButton href={p.link} label={p.btn} className="w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: CakeSlice, title: "Freshly Baked", text: "Made fresh for every confirmed order." },
  { icon: Heart, title: "Homemade Quality", text: "Simple, warm, and made with care." },
  { icon: Users, title: "Perfect for Events", text: "Great for family, church, school, work, and celebrations." },
  { icon: MessageCircle, title: "Easy WhatsApp Orders", text: "Choose your items, send your order, and confirm payment." },
];

function Why() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-border bg-accent/40 p-6 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h5 className="mt-3 font-serif text-lg font-bold">{b.title}</h5>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const prices = [

  { title: "Jam tarts", rows: [["5L", "R300"], ["10L", "R460"], ["20L", "R750"]] },
  { title: "Golden Scones Platter", rows: [["5L", "R220"], ["10L", "R310"], ["20L", "R600"]] },
  { title: "Queen Cakes", rows: [["5L", "R240"], ["10L", "R400"], ["20L", "R650"]] },
  { title: "Cup cake jam tarts", rows: [["5L", "R280"], ["10L", "R440"], ["20L", "R720"]] },
];

function Prices() {
  return (
    <section id="prices" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Price List"
          subtitle="Fresh homemade bakes available in 5L, 10L, and 20L options."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {prices.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <h4 className="text-center font-serif text-2xl font-bold">{p.title}</h4>
              <Heart className="mx-auto my-2 h-4 w-4 text-primary" />
              <ul className="mt-4 divide-y divide-border">
                {p.rows.map(([size, price]) => (
                  <li key={size} className="flex items-center justify-between py-3">
                    <span className="text-sm font-medium text-muted-foreground">{size}</span>
                    <span className="font-serif text-lg font-bold text-primary">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
          Full payment confirms your order. Prices do not include delivery. Emergency
          orders are accepted depending on availability.
        </p>
      </div>
    </section>
  );
}

const steps = [
  { t: "Choose your bakes", d: "Pick from jam tarts, queen cakes, golden scones platter, or cup cake jam tarts." },
  { t: "Send us a WhatsApp message", d: "Tell us what you want and the size." },
  { t: "Confirm your order", d: "We confirm availability, collection time, and total price." },
  { t: "Make payment", d: "Full payment confirms your order." },
  { t: "Collect your order", d: "Fresh bakes ready from Garankuwa Unit 9." },
];

function HowToOrder() {
  return (
    <section id="how" className="bg-card/40 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle title="How to Order" />
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h5 className="font-serif text-lg font-bold">{s.t}</h5>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <OrderButton href={WA_ORDER} label="Order on WhatsApp" />
        </div>
      </div>
    </section>
  );
}

const gallery = [

  { src: biscuits, caption: "Jam tarts" },
  { src: queenCakes, caption: "Soft Queen Cakes" },
  { src: goldenScones, caption: "Golden Scones Platter" },
  { src: cupcakeJamTarts, caption: "Cup cake jam tarts" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Fresh from Our Oven"
          subtitle="A few of our homemade favourites, baked fresh with care."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {gallery.map((g) => (
            <figure
              key={g.caption}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-3 py-3 text-center text-sm font-medium">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PleaseNote() {
  const items = [
    "Orders must be placed at least 3 days in advance.",
    "Full payment confirms your order.",
    "Prices do not include delivery.",
    "Emergency orders may be accepted depending on availability.",
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-border bg-accent/50 p-6 sm:p-8">
          <h4 className="text-center font-serif text-2xl font-bold">Please Note</h4>
          <Heart className="mx-auto my-2 h-4 w-4 text-primary" />
          <ul className="mt-4 space-y-3">
            {items.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 sm:flex">
                <WhatsAppIcon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                  Ready to place an order?
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Chat with Zee Bakehouse on WhatsApp and tell us what you would like to order.
                </p>
                <div className="mt-5">
                  <OrderButton href={WA_ORDER} label="Order on WhatsApp" variant="light" />
                </div>
              </div>
            </div>
            <ul className="space-y-3 border-t border-white/20 pt-5 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>WhatsApp: 072 022 5059</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Location: Garankuwa Unit 9</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="h-4 w-4" />
                <span>Orders: At least 3 days in advance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <p className="font-serif text-xl font-bold">Zee Bakehouse</p>
        </div>
        <div className="mt-2">{decor}</div>
        <p className="mt-3 text-sm text-muted-foreground">
          Baked fresh. Made with love.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Fresh homemade bakes for family moments, events, and everyday cravings.
        </p>
        <p className="mt-4 text-sm text-foreground/80">
          WhatsApp: 072 022 5059 &nbsp;|&nbsp; Location: Garankuwa Unit 9
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Bakes />
        <Why />
        <Prices />
        <HowToOrder />
        <Gallery />
        <PleaseNote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
