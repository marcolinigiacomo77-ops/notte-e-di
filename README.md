# Notte&Dì

Sito e-commerce della boutique Notte&Dì (Macerata): pigiami, costumi e intimo, uomo e donna.

## Avvio in locale

```bash
npm install
cp .env.local.example .env.local   # poi inserisci la chiave Web3Forms
npm run dev
```

Apri http://localhost:3000

## Struttura

- `app/` pagine (App Router): home, pigiami, costumi, intimo, storia, contatti, carrello
- `components/` layout, sidebar, pagine prodotto, form contatti
- `context/CartContext.jsx` carrello (salvato nel localStorage)
- `data/products.js` catalogo prodotti: modifica qui prezzi e descrizioni
- `public/` immagini

## Deploy

Collega il repository a Vercel e aggiungi la variabile `NEXT_PUBLIC_WEB3FORMS_KEY` nelle impostazioni del progetto.
