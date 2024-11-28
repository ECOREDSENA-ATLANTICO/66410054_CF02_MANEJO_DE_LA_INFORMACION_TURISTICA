<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo de la Promoción de productos y servicios e informes de servicio está estrechamente relacionado con los componentes de la oferta turística y los tipos de prestadores de servicios. En esta etapa formativa, el aprendiz, al haber estudiado las necesidades del cliente y los detalles sobre atractivos y servicios, está capacitado para analizar estos elementos y desarrollar estrategias de promoción efectivas. Además, los informes de servicio son fundamentales para verificar la precisión de la información y ajustar las estrategias según la satisfacción del usuario y las características regionales.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
