export default async function Curso({
  params,
}: {
  params: Promise<{ curso: string }>
}) {
  const { curso } = await params

  return <h1>Curso: {curso}</h1>
}
