export default async function Noticia({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return <h1>Notícia: {slug}</h1>
}
