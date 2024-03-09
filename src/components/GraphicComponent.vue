<template>
  <svg id="plot" height="300" width="300" xmlns="http://www.w3.org/2000/svg" ref="plot" v-on:click="plotOnClick(this.$refs.plot)">
    <polygon v-bind:stroke="area_color" v-bind:fill="area_color" class="plot_part" points="150,150 150,100 50,150"/>
    <rect v-bind:stroke="area_color" v-bind:fill="area_color" class="plot_part" x="50" y="150" height="100" width="100"/>
    <path v-bind:stroke="area_color" v-bind:fill="area_color" class="plot_part" d="M 150 250 A 100 100, 100, 0, 0, 250 150 L 150 150 Z"/>

    <line stroke="black" x1="0" x2="300" y1="150" y2="150"/>
    <line stroke="black" x1="150" x2="150" y1="0" y2="300"/>
    <polygon fill="black" points="150,0 144,15 155,15"/>
    <polygon fill="black" points="300,150 285,156 285,144"/>

    <line stroke="black" x1="200" x2="200" y1="155" y2="145"/>
    <line stroke="black" x1="250" x2="250" y1="155" y2="145"/>

    <line stroke="black" x1="50" x2="50" y1="155" y2="145"/>
    <line stroke="black" x1="100" x2="100" y1="155" y2="145"/>

    <line stroke="black" x1="145" x2="155" y1="100" y2="100"/>
    <line stroke="black" x1="145" x2="155" y1="50" y2="50"/>

    <line stroke="black" x1="145" x2="155" y1="200" y2="200"/>
    <line stroke="black" x1="145" x2="155" y1="250" y2="250"/>

    <svg id="dots" ref="dots" height="300" width="300">
      <circle r="3" v-for="(point, i) in points"
              v-bind:key="i"
              v-bind:cx="point.x * 100 / r + 150"
              v-bind:cy="150 - point.y * 100 / r"
              v-bind:fill="this.pointColor(point.hit)"
      />
    </svg>

    <text id="xm2" ref="xm2" fill="black" x="40" y="140" v-bind:key="r">{{ (-this.r).toString() }}</text>
    <text id="xm1" ref="xm1" fill="black" x="85" y="140" v-bind:key="r">{{ (-this.r / 2).toString() }}</text>
    <text id="xp1" ref="xp1" fill="black" x="190" y="140" v-bind:key="r">{{ (this.r / 2).toString() }}</text>
    <text id="xp2" ref="xp2" fill="black" x="245" y="140" v-bind:key="r">{{ (this.r).toString() }}</text>

    <text id="ym2" ref="ym2" fill="black" x="160" y="255" v-bind:key="r">{{ (-this.r).toString() }}</text>
    <text id="ym1" ref="ym1" fill="black" x="160" y="205" v-bind:key="r">{{ (-this.r / 2).toString() }}</text>
    <text id="yp1" ref="yp1" fill="black" x="160" y="105" v-bind:key="r">{{ (this.r / 2).toString() }}</text>
    <text id="yp2" ref="yp2" fill="black" x="160" y="55" v-bind:key="r">{{ (this.r).toString() }}</text>


    <text fill="black" x="160" y="10">Y</text>
    <text fill="black" x="290" y="140">X</text>
  </svg>
</template>

<script>
export default {
  name: "GraphicComponent",

  data() {
    return {
      point_color: {
        hit: "#7fff00",
        miss: "#ff0000"
      },

      area_color: "#007fff",
    }
  },

  /*
  props: {
    points: Array,
    r: Number,
    parentPlotOnClick: Function
  },
   */

  props: ["points", "r", "parentPlotOnClick"],

  methods: {

    getCursorPosition(element, event) {
      if (element === undefined) {
        return {
          x: -1337,
          y: -1337
        };
      }

      const rect = element.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    },

    pointColor(hit) {
      return hit ? this.point_color.hit : this.point_color.miss;
    },

    plotOnClick(element) {
      let position = this.getCursorPosition(element, event);
      position.x = (position.x - 150) * this.r / 100;
      position.y = (150 - position.y) * this.r / 100;

      this.parentPlotOnClick(position.x, position.y);
    }

  }
}
</script>

<style scoped>

svg#plot {
  border: black solid 1px;
}

</style>