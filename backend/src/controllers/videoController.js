const ffmpeg = require('fluent-ffmpeg'); // system-installed ffmpeg
const path = require('path')

exports.transcodeVideo = async (req, res) => {
  const fileName = req.query.filename;
  if (!fileName) {
    return res.status(400).json({ error: 'Missing filename in query.' });
  }

  const inputPath = path.join(__dirname, '..', 'uploads', 'videos', fileName);
  const outputPath = path.join(
    __dirname,
    '..',
    'uploads',
    'videos',
    `output-${Date.now()}.mp4`
  );

  try {
    ffmpeg(inputPath)
      .videoCodec('libx264')
      .size('640x360')
      .outputOptions('-preset', 'ultrafast') // can use `slow` to simulate more CPU usage
      .on('start', () => console.log('Transcoding started...'))
      .on('end', () => {
        console.log('Transcoding finished')
        res
          .status(200)
          .json({ message: 'Transcoding completed', output: outputPath })
      })
      .on('error', (err) => {
        console.error('Transcoding error:', err.message)
        res.status(500).json({ error: 'Transcoding failed' })
      })
      .save(outputPath)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
