import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/circles.hbs'
import liquidFillGauge from '../liquidFillGauge.js'

function draw(id) {
  const svg = d3.select(`#${id}`)
  const config = liquidFillGauge.liquidFillGaugeDefaultSettings();

  config
    .circleThickness = 0.15
    .circleColor = '#FF7777'
    .textColor = '#555500'
    .waveTextColor = '#FFFFAA'
    .waveColor = '#AAAA39'
    .textVertPosition = 0.8
    .waveAnimateTime = 1000
    .waveHeight = 0.05
    .waveAnimate = true
    .waveRise = false
    .waveHeightScaling = false
    .waveOffset = 0.25
    .textSize = 0.75
    .waveCount = 3


  svg
    .append('circle')
    .attr('id', 'circle1')
    .attr('cx', 200)
    .attr('cy', 300)
    .attr('r', 150)
    .attr('onclick', 'gauge.update(60)')


    svg
    .append('circle')
    .attr('cx', 600)
    .attr('cy', 300)
    .attr('r', 100)
    .style('fill', 'green')

  const gauge = liquidFillGauge.loadLiquidFillGauge('circle1', 50, config)

}


export default function(containerId) {
  const container = document.getElementById(containerId)
  const width = 800
  const height = 600
  const margin = {
    top: 0,
    right: 0,
    left: 55,
    bottom: 145
  }

  const viewBox = `0 0 ${width} ${height}`
  const w = width - margin.left - margin.right
  const h = height - margin.top - margin.bottom

  const id = 'chart-' + uuid.v4()
  const svg = tpl({
    id,
    viewBox
  })

  container.innerHTML = svg

  draw(id)
}
