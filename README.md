# Google JWKS Proxy

A simple proxy service for Google's JWKS (JSON Web Key Set) public keys, deployed on Vercel.

## Why?

In some regions (e.g., China mainland), direct access to Google APIs is restricted. This proxy provides an accessible endpoint to fetch Google's public keys for JWT verification.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `/` | Proxy to Google JWKS |
| `/certs` | Proxy to Google JWKS |
| `/health` | Health check |

## API Response

### GET /certs

Returns Google's JWKS public keys from `https://www.googleapis.com/oauth2/v3/certs`

**Response Example:**
```json
{
  "keys": [
    {
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "kid": "...",
      "n": "...",
      "e": "AQAB"
    }
  ]
}
```

### GET /health

**Response Example:**
```json
{
  "status": "ok",
  "time": "2024-01-01T00:00:00.000Z"
}
```

## Deployment

### Deploy to Vercel

1. Fork this repository
2. Import to [Vercel](https://vercel.com)
3. Deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Local Development

```bash
npm run dev
```

## License

MIT
