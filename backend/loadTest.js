const endpoint = 'http://localhost:3000/api/cpu-heavy?n=40'
const numberOfRequests = 100
let totalResponseTime = 0

async function loadTest() {
  const fetch = (await import('node-fetch')).default
  for (let i = 0; i < numberOfRequests; i++) {
    const startTime = performance.now()

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
      })

      if (!response.ok) {
        console.error(`Request ${i + 1} failed with status: ${response.status}`)
        continue
      }

      const endTime = performance.now()
      const responseTime = endTime - startTime
      totalResponseTime += responseTime

      console.log(`Request ${i + 1} completed in ${responseTime.toFixed(2)}ms`)
    } catch (error) {
      console.error(`Request ${i + 1} encountered an error: ${error.message}`)
    }
  }

  const averageResponseTime = totalResponseTime / numberOfRequests
  console.log(`Average response time: ${averageResponseTime.toFixed(2)}ms`)
}

loadTest()
