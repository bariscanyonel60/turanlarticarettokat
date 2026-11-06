import { GalleryManager } from "@/components/admin/GalleryManager";
import { isAdmin } from "@/lib/admin-auth";
import { listGalleryImages } from "@/lib/gallery";
import { databaseErrorMessage } from "@/lib/db";
import { redirect } from "next/navigation";

export const instant = false;

export default async function AdminGalleryPage() {
  if (!(await isAdmin())) {
    redirect("/admin/giris");
  }

  let error = "";
  let images: Awaited<ReturnType<typeof listGalleryImages>> = [];
  try {
    images = await listGalleryImages();
  } catch (caught) {
    error = databaseErrorMessage(caught);
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="font-display text-3xl tracking-[-0.04em] text-navy">Galeri</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
        Buraya eklenen görseller sitedeki galeri sayfasında görünür.
      </p>
      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : (
        <div className="mt-6">
          <GalleryManager images={images} />
        </div>
      )}
    </div>
  );
}
