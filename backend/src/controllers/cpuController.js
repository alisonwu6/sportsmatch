function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const handleCpuHeavyTask = (req, res) => {
  const n = parseInt(req.query.n) || 40 // default is set to fib(40)
  const start = Date.now()

  const result = fibonacci(n)

  const end = Date.now()
  const duration = end - start

  res.json({
    message: `CPU-heavy task completed`,
    input: n,
    result,
    duration: `${duration}ms`,
  })
}

module.exports = { handleCpuHeavyTask }
