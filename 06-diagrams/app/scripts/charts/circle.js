import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/circles.hbs'
import liquidFillGauge from '../liquidFillGauge.js'

function draw(chartId, data, width, height) {

  var bubble = liquidFillGauge.loadLiquidFillGauge(`${chartId}`, data, config, height, width)
  let config = liquidFillGauge.liquidFillGaugeDefaultSettings()

  config.maxValue = d3.max(data, function(d) {
                      return d.age
                    })
}

export default function(containerId, data) {
  const container = document.getElementById(containerId)
  const width = 800
  const height = 400
  const margin = {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
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

  draw(id, data, width, height)
}
