import { Suspense, type PropsWithChildren } from "react";
import type { Viewport } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

const LiveVisualEditing = dynamic(
  () => import("@/lib/loader/LiveVisualEditing"),
);

// TODO: add global metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const [{ data: settings }, { data: homePage }] = await Promise.all([
//     loadSettings(),
//     loadHomePage(),
//   ])
//
//   const ogImage = urlForOpenGraphImage(settings?.ogImage)
//   return {
//     title: homePage?.title
//       ? {
//         template: `%s | ${homePage.title}`,
//         default: homePage.title || 'Personal website',
//       }
//       : undefined,
//     description: homePage?.overview
//       ? toPlainText(homePage.overview)
//       : undefined,
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   }
// }

export const viewport: Viewport = {
  themeColor: "#000",
};

export default async function IndexRoute({ children }: PropsWithChildren) {
  return (
    <>
      <Suspense>{children}</Suspense>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  );
}
