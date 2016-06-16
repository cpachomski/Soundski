import d3 from 'd3';

class AudioVisualizer {

  constructor(el) {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.el = el;
    this.p = document.getElementById('visualizer');
    this.src = this.ctx.createMediaElementSource(this.el);
    this.analyzer = this.ctx.createAnalyser();
    this.frequencyData = new Uint8Array(200);
    this.svgHeight = window.innerHeight;
    this.svgWidth = window.innerWidth - 410;
    this.barPadding = '1';
    this.svg = null;
    this.active = false;

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
  }

  createSvg(p, h, w) {
    let svg = document.getElementById('viz');
    if(svg){
      svg.parentNode.removeChild(svg);
    }
    return d3.select(p).append('svg').attr('id', 'viz').attr('height', h).attr('width', w);
  }
  
  renderFreqs() {
    this.analyzer.getByteFrequencyData(this.frequencyData);

    this.svg.selectAll('rect')
      .data(this.frequencyData)
      .attr('y', (d) => {
        return this.svgHeight - (d * 5);
      })
      .attr('height', (d) => {
        return d * 5;
      })
      .attr('fill', (d) => {
        return 'rgb(255, 255, 255)';
      });

    if ( !this.active ) {
      console.log('this is false')
      this.svg.selectAll('rect')
        .attr('height', 0);
      return;
    }
    window.requestAnimationFrame(() => this.renderFreqs());

  }

}

export default AudioVisualizer;