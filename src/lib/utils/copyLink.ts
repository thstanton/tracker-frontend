export async function copyLink(identifier: string, slug: string) {
  await navigator.clipboard.writeText(
    identifier.length
      ? `${process.env.NEXT_PUBLIC_LINK_URL}/${slug}/?id=${identifier}`
      : `${process.env.NEXT_PUBLIC_LINK_URL}/${slug}`,
  );
}
