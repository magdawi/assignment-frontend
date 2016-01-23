import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/ownbarchart.hbs'

function draw () {
  
}

export default function(containerId, data){
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
