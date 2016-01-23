import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/ownbarchart.hbs'

function draw (chartId, data, width, height, margin) {
  const svg = d3.select(`#${chartId}`)
  const x = d3.scale.linear().range([height, 0])
  const y = d3.scale.ordinal().rangeRoundBands([0, width], 0.3)
  const xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(10)
  const yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(10)

  x.domain([
    d3.max(data, function(d) {
      return d.age
    }), 0
  ])
  y.domain(data.map(function(d) {
    return d.name
  }))

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(${margin.left}, ${height})`)
    .call(xAxis)
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.5em')
    .attr('dy', '.5em')
    .attr('transform', 'rotate(-45)')

  svg
    .append('g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(yAxis)

  svg
    .selectAll('bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function(d) {
      return margin.left
    })
    .attr('width', function(d) {
      return x(d.age)
    })
    .attr('y', function(d) {
      return y(d.name)
    })
    .attr('height', function(d) {
      return y.rangeBand()
    })



}

export default function(containerId, data){
  const container = document.getElementById(containerId)
  const width = 800
  const height = 785
  const margin = {
    top: 0,
    right: 0,
    left: 160,
    bottom: 145
  }
  const viewBox = `0 0 ${width} ${height}`
  const w = width - margin.left - margin.right
  const h = height - margin.top - margin.bottom

  if (!(data instanceof Array)) {
    return
  }

  const id = 'chart-' + uuid.v4()
  const svg = tpl({
    id,
    viewBox
  })

  container.innerHTML = svg

  draw(id, data, w, h, margin)
}
