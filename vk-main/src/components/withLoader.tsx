import React from "react"
import axios from "axios"

interface LoaderState {
  data: any
  isLoading: boolean
}

interface LoaderProps {
  data: any
}

const withLoader = <P extends LoaderState>(
  WrappedComponents: React.ComponentType<P>,
  url: string
) => {
  return class LoaderComponent extends React.Component<
    Partial<LoaderProps>,
    LoaderState
  > {
    constructor(props: any) {
      super(props)
      this.state = {
        data: null,
        isLoading: false,
      }
    }

    componentDidMount() {
        console.log(123566)
      this.setState({
        isLoading: true,
      })
      axios.get(url).then((result: any) => {
        this.setState({
          data: result.data,
          isLoading: false,
        })
      })
    }

    render() {
      const { data, isLoading } = this.state
      return (
        <>
          {isLoading || !data ? (
            <p>data is Loading</p>
          ) : (
            <WrappedComponents {...(this.props as P)} data={data} />
          )}
        </>
      )
    }
  }
}

export default withLoader
