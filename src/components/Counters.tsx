import CreateElementCounter from "./CreateElementCounter"
import DefaultComponentCounter from "./DefaultComponentCounter"
import FunctionalComponentCounter from "./FunctionalComponentCounter"
import PureComponentCounter from "./PureComponentCounter"

const Counters = () => {
  const counters = [
    { title: "Create Element Counter", component: <CreateElementCounter /> },
    {
      title: "Default Component Counter",
      component: <DefaultComponentCounter />,
    },
    { title: "Pure Component Counter", component: <PureComponentCounter /> },
    {
      title: "Functional Component Counter",
      component: <FunctionalComponentCounter />,
    },
  ]

  return (
    <>
      <h1>Counters</h1>
      {counters.map((counter) => (
        <div key={counter.title}>
          <b>{counter.title}</b>
          {counter.component}
          <hr />
        </div>
      ))}
    </>
  )
}

export default Counters
