import axios from "axios"
import { useEffect, useState } from "react"

const useUrlLoader = (url: string, deps: Array<any> = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(url).then((result) => {
      setData(result.data)
      setLoading(false)
    })
  }, deps)
  return [data, loading]
}

export default useUrlLoader