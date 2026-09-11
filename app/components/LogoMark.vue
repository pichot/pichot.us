<!-- JP mark: Optician Sans outlines (the old site's logo font) over a bronze bar.
     Colors come from --color-mark / --color-figure so it follows light/dark. -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="55 -500 1020 710"
    role="img"
    aria-label="JP"
  >
    <g transform="scale(1 -1)">
      <path class="jp-letters" d="M155 190Q155 145 183.5 115.0Q212 85 255 85Q298 85 326.5 115.0Q355 145 355 190V500H455V190Q455 147 440.0 110.5Q425 74 398.0 47.0Q371 20 334.5 5.0Q298 -10 255 -10Q212 -10 175.5 5.0Q139 20 112.0 47.0Q85 74 70.0 110.5Q55 147 55 190Z" />
      <path class="jp-letters" transform="translate(490 0)" d="M585 350Q585 285 544.0 245.0Q503 205 435 205H175V0H75V500H435Q503 500 544.0 459.0Q585 418 585 350ZM485 360Q485 383 471.5 396.5Q458 410 435 410H175V295H435Q458 295 471.5 308.5Q485 322 485 345Z" />
      <rect class="jp-bar" x="55" y="-210" width="1020" height="100" />
    </g>
  </svg>
</template>

<style scoped>
/* SVG fills can't take Tailwind color utilities per-path without extra markup */
.jp-letters { fill: var(--color-mark); }
.jp-bar { fill: var(--color-figure); }
</style>
