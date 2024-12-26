<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.my-3
      .col-lg-4.col-md-8.align-content-center
        figure
          img.my-3(src='@/assets/curso/temas/intro/img1.png', alt='Imagen decorativa')
      .col-lg-8
        p El componente formativo, Promoción de productos y servicios e informes de servicio. En el campo del Manejo de Información Turística, la promoción de productos y servicios se conecta estrechamente con los componentes de la oferta turística y los tipos de prestadores. En esta etapa del proceso formativo, el aprendiz ha investigado las necesidades del cliente y los atractivos disponibles, preparándose para analizar y construir estrategias de promoción integrales. Los informes de servicio juegan un papel crucial al verificar la precisión de la información y ajustar las estrategias según la satisfacción del usuario y las características de cada región. <b>Bienvenido a este componente formativo:</b>
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/cG0nowocTjc?si=8krs_TIz_FVmBEAi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).   
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
