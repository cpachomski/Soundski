import d3 from 'd3';


class AudioVisualizer {

  constructor(el, p) {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.el = el;
    this.p = p;
    this.src = this.ctx.createMediaElementSource(this.el);
    this.analyzer = this.ctx.createAnalyser();
    this.frequencyData = new Uint8Array(200);
    this.svgHeight = '300';
    this.svgWidth = '1200';
    this.barPadding = '1';
    this.svg = null;

    //audio element -> audio src -> analyzer -> speakers
    this.src.connect(this.analyzer);
    this.src.connect(this.ctx.destination);

    this.setupViz()
  }

  setupViz() {
    this.svg = this.createSvg(this.p, this.svgHeight, this.svgWidth);

    this.svg.selectAll('rect')
      .data(this.frequencyData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => {
        return i * (this.svgWidth / this.frequencyData.length)
      })
      .attr('width', this.svgWidth / this.frequencyData.length - this.barPadding)

      this.renderFreqs();
  }

  createSvg(p, h, w) {
    return d3.select(p).append('svg').attr('id', 'viz').attr('height', h).attr('width', w);
  }

  renderFreqs() {
    //loop forever
    window.animation = window.requestAnimationFrame(() => this.renderFreqs())
    this.analyzer.getByteFrequencyData(this.frequencyData);

    this.svg.selectAll('rect')
      .data(this.frequencyData)
      .attr('y', (d) => {
        return this.svgWidth - d;
      })
      .attr('height', (d) => {
        return d;
      })
      .attr('fill', (d) => {
        return 'rgb(0,0,' + d + ')';
      });


  }

}

export default AudioVisualizer;