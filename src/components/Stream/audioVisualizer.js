import d3 from 'd3';

class AudioVisualizer {

  constructor(el) {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.el = el;
    console.log(el);
    this.p = document.getElementById('visualizer');
    this.src = this.ctx.createMediaElementSource(this.el);
    this.analyzer = this.ctx.createAnalyser();
    this.frequencyData = new Uint8Array(200);
    this.svgHeight = window.innerHeight;
    this.svgWidth = window.innerWidth - 410;
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
    if (document.getElementById('viz')) {return}
    return d3.select(p).append('svg').attr('id', 'viz').attr('height', h).attr('width', w);
  }

  renderFreqs() {
    //loop forever
    window.animation = window.setInterval(() => this.renderFreqs(), 50)
    this.analyzer.getByteFrequencyData(this.frequencyData);

    this.svg.selectAll('rect')
      .data(this.frequencyData)
      .attr('y', (d) => {
        return this.svgHeight - (d * 3);
      })
      .attr('height', (d) => {
        return d * 3;
      })
      .attr('fill', (d) => {
        return 'rgb(255, 255, 255)';
      });


  }

}

export default AudioVisualizer;