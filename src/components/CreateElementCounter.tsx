import React from "react"

type Props = {}

type State = {
  count: number
}

class CreateElementCounter extends React.Component<Props, State> {
  state: Readonly<State> = {
    count: 0,
  }

  render() {
    return React.createElement(
      "div",
      { className: "counter" },
      // This child can be used too for reusability
      // <CounterElements
      //   value={this.state.count}
      //   onDecrease={() => this.setState({ count: this.state.count - 1 })}
      //   onIncrease={() => this.setState({ count: this.state.count + 1 })}
      // />,
      React.createElement("span", null, "Current count: " + this.state.count),
      React.createElement(
        "div",
        { className: "action-buttons" },
        React.createElement(
          "button",
          { onClick: () => this.setState({ count: this.state.count - 1 }) },
          "-"
        ),
        React.createElement(
          "button",
          { onClick: () => this.setState({ count: this.state.count + 1 }) },
          "+"
        )
      )
    )
  }
}

export default CreateElementCounter
