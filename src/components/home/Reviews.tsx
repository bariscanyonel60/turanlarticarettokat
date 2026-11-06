import { business } from "@/data/business";

type Review = {
  author: string;
  text: string;
};

/**
 * TODO: Google yorumları işletme tarafından paylaşılınca doldur.
 * Boşken bölüm render edilmez. Sahte puan veya yorum eklenmez.
 */
const reviews: Review[] = [];

export function Reviews() {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16" aria-labelledby="yorumlar-baslik">
      <div className="mx-auto max-w-3xl px-4">
        <h2 id="yorumlar-baslik" className="font-display text-3xl text-navy">
          {business.name} hakkında gelen yorumlar
        </h2>
        <ul className="mt-6 space-y-4">
          {reviews.map((review) => (
            <li key={review.author} className="text-base leading-7 text-ink">
              <p>{review.text}</p>
              <p className="mt-2 font-semibold">{review.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
