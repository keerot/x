# Waloi

Next.js -website 
## Teknologiat

- **Next.js**: 9.1.1
- **React**: 16.10.2
- **Node.js**: Yhteensopiva v22.0.0+ (legacy OpenSSL -tilan kanssa)

## Asennus

```bash
npm install
```

## Kehityspalvelimen käynnistäminen

```bash
npm run dev
```

Sovellus käynnistyy osoitteessa [http://localhost:3000](http://localhost:3000)

## Tuotantoversion buildaaminen

```bash
npm run build
npm start
```

## Tärkeää: Node.js yhteensopivuus

Tämä projekti käyttää vanhaa Next.js 9.1.1 -versiota, joka sisältää Webpack 4:n. Node.js versioissa 17+ on OpenSSL 3.0, joka ei tue vanhoja hash-algoritmeja.

**Ratkaisu**: Projektissa käytetään `--openssl-legacy-provider` -lippua, joka on määritelty `package.json` tiedostossa:

```json
"scripts": {
  "dev": "NODE_OPTIONS='--openssl-legacy-provider' next dev",
  "build": "NODE_OPTIONS='--openssl-legacy-provider' next build"
}
```

Jos kohtaat virheen:
```
Error: error:0308010C:digital envelope routines::unsupported
```

Varmista, että käytät päivitettyä `package.json` tiedostoa, jossa on `NODE_OPTIONS` määritelty.

## Varoitukset

Saatat nähdä seuraavia varoituksia, jotka eivät estä sovelluksen toimintaa:

- `Browserslist: caniuse-lite is outdated` - Voit päivittää ajamalla `npm update`
- `The static directory has been deprecated` - Next.js suosittelee `public` hakemiston käyttöä `static` hakemiston sijaan

## Lisenssi

Private
