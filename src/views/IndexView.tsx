import { useAppStore } from "../stores/useAppStore"


function IndexView() {
  useAppStore((state) => state.categories)
  return (
    <>
        <h1>Inicio</h1>
    </>
  )
}

export default IndexView