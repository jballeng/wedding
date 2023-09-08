import { createClient } from "next-sanity"


const apiVersion = '2022-03-13'
const dataset = "production"
const projectId = 'h8ush2i2'
const useCdn = false

const config = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })

export default config;