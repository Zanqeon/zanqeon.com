export default function mapAspectRatio (data) {
  const aspectRatios = {
    'Landscape (3:2)': '2/3',
    'Portrait (2:3)': '3/2',
    'Square (1:1)': '1/1',
    'Panorama (2:1)': '1/2',
    'Panorama Wide (3:1)': '1/3'
  }

  return aspectRatios[data]
}
