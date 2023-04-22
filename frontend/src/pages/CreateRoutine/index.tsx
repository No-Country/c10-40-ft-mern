import { type IRoutine } from 'app/types'
import { Loader, RoutineCard } from 'components'
import { useRoutines } from 'hooks/useRoutine'

const bgImages: Record<string, string> = {
  '2 days':
    "bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://th.bing.com/th/id/OIP.0wpdnJAgO1sHM5BzspKS9QHaD0?pid=ImgDet&w=700&h=361&rs=1')]",
  '3 days':
    "bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://ryuublog.com/wp-content/uploads/2019/02/20180409215356-300x200.jpg')]",
  '5 days':
    "bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://i.insider.com/5b6dd5b564dce81d008b4ea2?width=600&format=jpeg&auto=webp')]"
}

const CreateRoutine = (): JSX.Element => {
  const { data, isLoading } = useRoutines()

  if (isLoading) {
    return <Loader type="spinner" />
  }

  return (
    <div className="p-7 flex flex-col items-center w-full">
      <h2 className="font-bold text-2xl my-6">
        Elegi la cantidad de dias que vas a entrenar en la semana!
      </h2>
      <div className="w-full flex flex-col-reverse md:flex-row-reverse gap-4">
        {data
          ? data.map((routine: IRoutine) => {
              return (
                <RoutineCard
                  key={routine.id}
                  bgImage={bgImages[routine.name]}
                  routine={routine}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

export default CreateRoutine
