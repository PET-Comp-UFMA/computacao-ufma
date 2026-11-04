export default async function Curriculo({
  params,
}: {
  params: Promise<{ curso: string }>
}) {
  const { curso } = await params

  return <h1>Currículo: {curso}</h1>
}
