import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/playerSlice'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  if (isCourseLoading) {
    return <h1 className="text-2x1 font-bold">Carregando...</h1>
  }

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-2x1 font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo "{currentModule?.title}"
        </span>
      </div>
    </>
  )
}
