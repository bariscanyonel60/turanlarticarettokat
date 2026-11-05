<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Turanlar Ticaret

Tokat Merkez için kurumsal tüp sitesi. E-ticaret yoktur; sipariş WhatsApp, servis telefonladır.

## Çalıştırma

```bash
npm run dev
npm run lint
npm run build
```

Üretim adresi için `NEXT_PUBLIC_SITE_URL` tanımlayın (ör. `https://ornek-alanadi.com`). Tanımlı değilse Vercel üretim hostu, o da yoksa `http://localhost:3000` kullanılır. Canonical, Open Graph ve sitemap bu adresten üretilir.

## Dokunma / uydurma

- Fiyat, puan, yorum, müşteri sayısı ve "yetkili bayi" iddiası ekleme. Hizmete başlama yılı işletmenin bildirdiği 1977'dir; başka yıl yazma.
- `src/data/business.ts` içindeki `businessHours.openingTime` ve `workingDays` doğrulanmadan doldurulmaz. Kapanış saati `22:00`.
- `src/data/products.ts` içindeki `capacity` yalnızca resmi Hürgaz kataloğundan doğrulanırsa yazılır.
- Hizmet bölgesi yalnızca Tokat Merkez.
- Sosyal medya bağlantısı doğrulanmadan eklenmez.
- `servicePhoto` boşken sahte servis aracı görseli kullanılmaz. Gerçek fotoğraf `{ src, alt, width, height }` olarak eklenir.
- Ürün fotoğrafı için `image` alanını `{ kind: "photo", src, alt, width, height }` yapın. Dosyalar `public/images/products/` altına konur. Kamp ve ekipman kartlarındaki görseller lisanslı örneklerdir; stoktaki modelin fotoğrafı değildir. `credit` alanı kaynakla birlikte durur.

## İletişim kaynağı

Telefon, WhatsApp ve adres yalnızca `src/data/business.ts` dosyasından okunur.
