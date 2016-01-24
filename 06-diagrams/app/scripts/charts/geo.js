import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/geo.hbs'
import countries from '../data/countries.geo.json'

function draw(chartId, data, width, height) {
  const svg = d3.select(`#${chartId}`)
  const projection = d3.geo
    .mercator()
    .translate([
      width / 2,
      height / 2
    ])
  const path = d3.geo.path().projection(projection)

  svg.selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', function(d) {
      if(d.id === "BMU"){
        return 'none'
      }
      let colors = ['#FFC490', '#E08E79', '#DBBB9A', '#EDC9A5', '#FCD8AE']
      return colors[Math.floor(Math.random() * 5)]
    })

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
      return projection([d.Location.long, d.Location.lat])[0]
    })
    .attr('cy', function(d) {
      return projection([d.Location.long, d.Location.lat])[1]
    })
    .attr('r', 10)
    .style('fill', '#55443D')
}

export default function(containerId, data) {
  const container = document.getElementById(containerId)
  const width = 800
  const height = 600
  const viewBox = `0 0 ${width} ${height}`
  const id = 'chart-' + uuid.v4()
  const svg = tpl({
    id,
    viewBox
  })

  container.innerHTML = svg

  draw(id, data, width, height)
}
