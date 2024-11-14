<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de servicios turísticos

    p.my-3 El servicio está conformado por la interacción entre los diferentes actores (humanos, transporte, hospedaje y diversiones, entre otros), éstos intervienen al momento de satisfacer las necesidades de los clientes, con el objetivo de fidelizarlos, es decir, que consuman una y otra vez su producto y las derivaciones que de ellos se tenga, como consecuencia del mejoramiento continuo.
    p.my-3 <b>El sector turístico se caracteriza por brindar una variedad de servicios, dentro de los cuales podemos destacar:</b>
    
    .row.justify-content-center.my-3
      .col-lg-4.col-md-8.align-content-center
        figure
          img.my-3(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
      .col-lg-8
        .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Alojamiento Turístico
        p.my-3 Los servicios de alojamiento facilitan a las personas la estadía temporal en albergues, hoteles, posadas y moteles entre otros; generalmente en medio de un viaje o sus vacaciones, incluyendo o descartando la prestación de otros servicios complementarios mediante una oferta. Dentro de los tipos de alojamiento podemos encontrar:

    TabsA.mb-5
      .tarjeta.p-4(titulo="Hoteles")
        .row.justify-content-center.p-3
          .col-lg-5.col-md-12.align-content-center  
            h5 Hoteles
            p Establecimiento que presta en forma permanente el servicio de alojamiento en habitaciones con servicio sanitario privado, ofreciendo al huésped servicios básicos y complementarios, según su categoría y modalidad; su tarifa de alojamiento diaria corresponde al tipo de habitación y número de ocupantes (Minep - Ministerio para la Economía Popular. Instituto Nacional de cooperación Educativa, 2005).
          .col-lg-7.col.col-md-8.align-content-center  
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
      .tarjeta.p-4(titulo="Hotel residencia")
        .row.justify-content-center.p-3
          .col-lg-8.col-md-12.align-content-center  
            h5 Hotel residencia
            p Es aquel establecimiento que presta en forma permanente el servicio de alojamiento en apartamentos o cabañas, ofreciendo al huésped un mínimo de servicios básicos y complementarios, según su categoría y modalidad; siendo sus tarifas de alojamiento diarias y especiales para estancias prolongadas, no inferiores a quince días, por tipo de apartamento o cabaña y número de ocupantes (Minep - Ministerio para la economía popular. instituto nacional de cooperación educativa, 2005).
          .col-lg-4.col.col-md-8.align-content-center  
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
      .tarjeta.p-4(titulo="Hostal")
        .row.justify-content-center.p-3
          .col-lg-3.col-md-12.align-content-center  
            h5 Hostal
            p Establecimiento público que se encuentra generalmente ubicado cerca de las rutas de tránsito y ofrece servicios habitación, baño y estacionamiento. Se considera de menor categoría que un hotel.
          .col-lg-9.col-md-8.align-content-center  
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
      .tarjeta.p-4(titulo="Camping")
        .row.justify-content-center.p-3
          .col-lg-5.col-md-12.align-content-center  
            h5 Camping
            p Lugar o conjunto de instalaciones, generalmente al aire libre, acondicionado para acampar en él o alojarse temporalmente; cabe destacar que un campamento es una instalación eventual de personas, ubicadas en un terreno abierto o dispuesto para albergar viajeros o turistas que puedan disfrutar de una actividad recreativa o educativa.
          .col-lg-7.col.col-md-8.align-content-center  
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
      .tarjeta.p-4(titulo="Pensión")
        .row.justify-content-center.p-3
          .col-lg-7.col-md-12.align-content-center  
            h5 Pensión
            p Establecimiento que presta en forma permanente el servicio de alojamiento en habitaciones, con servicio sanitario privado y/o común colectivo. Por requerimiento del huésped se ofrece servicio de alimentación bajo el régimen completo o medio; siendo su tarifa de alojamiento periódica — diaria, semanal, quincenal o mensual — e incluirá en cada caso el régimen de comidas convenido con el huésped. (Minep - Ministerio para la economía popular. Instituto nacional de cooperación educativa, 2005)
          .col-lg-5.col.col-md-8.align-content-center  
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
      .tarjeta.p-4(titulo="Balnearios o clínicas<br>de recuperación")
        .row.justify-content-center.p-3
          .col-lg-7.col-md-12.align-content-center  
            h5 Balnearios o clínicas de recuperación
            p establecimiento que ofrecen programas de relajación, antiestrés y curas de desintoxicación, basándose en las necesidades actuales de la gente y en su ritmo de vida. Otra de las alternativas es servicio de alojamiento y programas médicos de rehabilitación, curación o prevención de enfermedades, muchos de ellos destinados a personas de avanzada edad o con patologías específicas. (abalnearios.com, 2014)
          .col-lg-5.col.col-md-8.align-content-center  
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Servicios Complementarios

    .row.justify-content-center.my-3  
      .col-lg-9
        p.my-3 Se consideran como servicios de apoyo a la actividad turística, son creados para responder a las más variadas necesidades de los clientes, a su vez, se constituyen en clave esencial para la captación de turistas.<br>Los servicios complementarios incluyen una variedad de productos, dentro de los cuales podemos encontrar el suministro de información, asesoramiento, planificación en materia de viajes, transporte, cambio de monedas, guías turísticos, restauración, oferta artístico-cultural, oferta deportiva, congresos, convenciones, recursos naturales, centros comerciales (compras de ocio), Juegos de azar (casinos y bingos), centros de ocio recreativos, Alquiler de vehículos (motos, todo terreno), zonas de ocio nocturno (Pubs, discotecas), tours temáticos y recorridos turísticos por la ciudad (excursiones en autobús).
      .col-lg-3.col-md-8.align-content-center
        figure
          img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imagen decorativa')
    
    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Servicios de Restaurantes

    .row.justify-content-center.my-3  
      .col-lg-4.col-md-8.align-content-center
        figure
          img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')
      .col-lg-8
        p.my-3 Los servicios de restauración se han convertido en uno de los recursos más ofrecidos por los proveedores turísticos, causado por la gran importancia que actualmente se le está dando a la gastronomía, haciendo de este servicio, uno de los productos de moda en el mercado turístico. Los oferentes de servicios turísticos como hoteles y cruceros se han visto en la necesidad de incorporar los servicios de restaurante en la oferta turística. Dada su importancia como producto, se incluye una buena gastronomía durante su estadía.
    
    
    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Servicios de Transporte Turístico
    
    p.my-3 Constituye una de las principales actividades del servicio turístico, y consiste en transportar o trasladar a los viajeros o turistas con sus equipajes y mercancía, desde su residencia habitual a los lugares visitados.<br>Existen cuatro tipos diferentes de servicios de transporte utilizados como parte fundamental del producto o servicio turístico.

    
    .row.justify-content-center.my-3
      .col-lg-8.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span <em>Servicio turístico</em>
        .tabla-b
          table
            thead
              tr
                th TIPO
                th SUBTIPO
                th ACTIVIDAD
            tbody
              tr
                td(style="background: #D3F8CB") AÉREO
                td(style="background: #D3F8CB") Vuelos regulares (cuentan con horarios definidos)
                td(style="background: #D3F8CB") <b>Vuelos regionales:</b> se desplazan de una región a otra con distancias cercanas.<br><b>Vuelos nacionales:</b> no sobrepasan el territorio de un mismo país.<br><b>Vuelos internacionales:</b> sobrepasan el territorio nacional y se dirigen hacia otros países.<br><b>Vuelos intercontinentales:</b> sobrepasan el territorio de un continente para dirigirse a otro.

              tr
                td(style="background: #F3FDF1") AÉREO
                td(style="background: #F3FDF1") Vuelos no regulares (no cuentan con horarios definidos)
                td(style="background: #F3FDF1") <b>Vuelos charter:</b> tiene un carácter discrecional ya que no se encuentran sujetos a un calendario, horario ni itinerario fijo.<br><b>Vuelos privados:</b> se refiere a las personas u organizaciones que tienen sus propios aviones privados.<br><b>Vuelos especiales:</b> tiene una serie de productos variados como excursiones de paracaidismo, visita panorámica servicio especiales de fotografía, entre otros.
              tr
                td(style="background: #D3F8CB") TERRESTRE
                td(style="background: #D3F8CB") Transporte regular
                td(style="background: #D3F8CB") Se encarga de transporte de pasajeros con horarios e itinerarios fijos es el más utilizados por los turistas nacionales, se toma especialmente en estaciones de autobuses.
              tr
                td(style="background: #F3FDF1") TERRESTRE
                td(style="background: #F3FDF1") Transporte no regular
                td(style="background: #F3FDF1") Alquiler o renta de vehículos: servicio prestado por empresas dedicadas al alquiler de vehículos con o sin conductor trasporte de diversión: trasporte utilizado para recorridos dentro y fuera de la ciudad especialmente para conocer lugares históricos.
              tr
                td(style="background: #D3F8CB") ACUÁTICO
                td(style="background: #D3F8CB") Transporte marítimo
                td(style="background: #D3F8CB") <b>Cruceros:</b> Exclusivos para el transporte de personas a los diferentes puertos con atractivos turísticos.<br><b>Transbordadores:</b> Son utilizados para el transporte de pasajeros, vehículos de un puerto a otro en distancias cortas.<br><b>Embarcaciones deportivas y recreativas:</b> Utilizadas para el esparcimiento de los turistas; entre ellos encontramos, los yates, lanchas, veleros, botes, motonáuticas, entre otros.
              tr
                td(style="background: #F3FDF1") ACUÁTICO
                td(style="background: #F3FDF1") Transporte lacustre
                td(style="background: #F3FDF1") Utilizado para el recorrido en lagos o canales especialmente utilizados para el turismo ecológico, cultural y de aventura
              tr
                td(style="background: #D3F8CB") ACUÁTICO
                td(style="background: #D3F8CB") Transporte fluvial turístico.
                td(style="background: #D3F8CB") Se encarga del transporte de pasajeros en embarcaciones pequeñas, a través de los ríos, con fines recreativos y ocasionales.
              tr
                td(style="background: #F3FDF1") FERROCARIL
                td(style="background: #F3FDF1") Transporte en trenes
                td(style="background: #F3FDF1") Corresponde al uso de trenes para recorridos turísticos, especialmente en jiras que rescatan el carácter histórico del trayecto (Vera Bustamante & Godoy Reitze, 2012)

    p.my-3 Existen agencias de viajes que están facultadas para la prestación e intermediación de los servicios de transporte turístico, sea aéreo, terrestre, marítimo y/o fluvial; son ofrecidos de modo habitual en contraprestación de una tarifa, con o sin otros servicios complementarios incluidos.

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Servicios de Información Turística

    .row.justify-content-center.my-3  
      .col-lg-8
        p.my-3 Los servicios de información turística están orientados a satisfacer las necesidades de los visitantes o viajeros, brindando acceso a la información continua de manera oportuna y actualizada, con actividades turísticas a nivel local, regional, nacional e internacional. De allí, que cada destino turístico cuente con puntos de información, ubicados en establecimientos o lugares estratégicos para contribuir con la orientación y atención de los visitantes.
      .col-lg-4.col-md-8.align-content-center
        figure
          img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Agencias de viajes


    p.my-3 Las agencias de viajes son empresas intermediadoras entre los viajeros y los proveedores de servicios turísticos; se encargan de asesorar e informar al viajero, de diseñar y comercializar distintos productos turísticos. Actúan como fuentes de información sobre corrientes turísticas (Cabarcos Novás, 2011).<br><b>Las agencias de viajes desarrollan principalmente tres funciones:</b>

    .row.justify-content-center.my-3
      .col-lg-3.col-md-10.p-0.my-3(style="background: #99E7FF; border-radius: 35px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema1/img13.png", alt="imagen decorativa")
        p.ali.px-3.pt-3.text-center <b>La función Asesora:</b>
        p.px-3.text-center Se ocupa de informar a los clientes sobre las características de los diversos destinos y servicios turísticos que se ofrecen. La incorporación de las TICs en las agencias de viajes les ha permitido mejorar su competitividad en los tiempos de respuesta, logrando así, el acceso a los sistemas globales de información turística.
      .col-lg-3.col-md-10.p-0.my-3.mx-3(style="background: #D3F8CB; border-radius: 35px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema1/img14.png", alt="imagen decorativa")
        p.ali.px-3.pt-3.text-center <b>La función mediadora:</b>
        p.px-3.text-center Tiene como objetivo negociar, gestionar e intermediar; reservando y comprando los diversos servicios turísticos solicitados por el cliente.
      .col-lg-3.col-md-10.p-0.my-3(style="background: #99E7FF; border-radius: 35px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema1/img15.png", alt="imagen decorativa")
        p.ali.px-3.pt-3.text-center <b>La Función Productora:</b>
        p.px-3.text-center.mb-2 Se encarga de diseñar, comercializar y distribuir los distintos servicios y productos turísticos, generados normalmente por la combinación de los diversos servicios complementarios, pero ofertados conjuntamente a un precio único y global. Esta función es propia de las agencias de viajes mayoristas y de los tours operadores (Cabarcos Novás,2011).

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Componentes de la Oferta Turística

    .row.justify-content-center.my-3  
      .col-lg-8
        p.my-3 Los elementos que configuran la oferta turística se clasifican en cuatro categorías: los recursos naturales, el ambiente construido, los sectores operativos y el espíritu de la hospitalidad y de recursos culturales; todos los cuales interactúan en la consecución de un producto que satisfaga las expectativas de los usuarios interesados en su disfrute.
      .col-lg-4.col-md-8.align-content-center
        figure
          img(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')
    
    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Recursos Naturales y de Ambiente

    .row.justify-content-center.my-3  
      .col-lg-4.col-md-8.align-content-center
        figure
          img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
      .col-lg-8
        p.my-3 Los recursos naturales son un bien presente en la naturaleza, y son explotados para satisfacer necesidades y deseos de la sociedad. En el sector turístico son espacios con que dispone un área para uso y placer de los visitantes, esta categoría incluye la geografía de la región, el relieve, los cuerpos de agua, la flora, la fauna, los parques naturales, el abastecimiento de agua potable y baños, entre otros.
    
    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Ambiente construido

    .row.justify-content-center.my-3  
      .col-lg-8
        p.my-3 Es el componente dentro del entorno natural construido por los seres humanos; uno de los elementos del ambiente construido es la infraestructura del destino, creada para atender a los turistas a través de recursos fundamentales como carreteras, redes de comunicación y sistemas de drenajes; instalaciones comerciales, tales como supermercados y tiendas minoristas, creadas para suplir las necesidades de la población local; pero a la vez, sirven de apoyo a la actividad turística. <b>La superestructura se ha creado para satisfacer la demanda de los turistas; tales como, hoteles, restaurantes, empresas arrendadoras de automóviles y grandes atracciones:</b>
      .col-lg-4.col-md-8.align-content-center
        figure
          img(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen decorativa')

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Sectores operativos
    
    .row.justify-content-center.my-3
      .col-lg-4.col-md-8.mb-5.mb-md-0.align-content-center(data-aos="fade-right")
          img.my-3(src="@/assets/curso/temas/tema1/img19.png", alt="imagen decorativa")

      .col-lg-8.col-md-12.mb-5.mb-md-0.align-content-center(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Sector del transporte")
            .col-md-12.mb-4.mb-md-0
              p Constituido por aerolíneas, compañías de autobuses, líneas de cruceros y taxis, entre otros.
          .row.justify-content-center(numero="2" titulo="Sector de Alojamiento")
            .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
              p En el encontramos los hostales, pensiones, hoteles, hoteles boutique, campamentos y desayunaderos, entre otros.
            .col-lg-4.col-md-8.align-content-center
              img.my-3(src="@/assets/curso/temas/tema1/img20.png", alt="imagen decorativa")
          .row.justify-content-center(numero="3" titulo="Sector de alimentos")
            .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
              p Constituidos por los establecimientos que ofrecen comidas rápidas, de especialidades y los restaurantes gourmet.
            .col-lg-4.col-md-8.align-content-center
              img.my-3(src="@/assets/curso/temas/tema1/img21.png", alt="imagen decorativa")
          .row.justify-content-center(numero="4" titulo="Sector de atracciones")
            .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
              p Aquí se incluyen los parques de atracción mecánica, los parques recreacionales, los parques temáticos.
            .col-lg-4.col-md-8.align-content-center
              img.my-3(src="@/assets/curso/temas/tema1/img22.png", alt="imagen decorativa")
          .row.justify-content-center(numero="5" titulo="Sector de los Eventos")
            .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
              p Se encuentra relacionado con el sector de las atracciones y se dedica al desarrollo de actividades turísticas locales, regionales, nacionales e internacionales.
            .col-lg-4.col-md-8.align-content-center
              img.my-3(src="@/assets/curso/temas/tema1/img23.png", alt="imagen decorativa")
    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Espíritu de hospitalidad y recursos culturales

    p.my-3 Se refiere a la idiosincrasia del destino, consta de costumbres, religión e idioma. Es importante resaltar dentro de la industria turística, la gente y la riqueza cultural que aporta en su región, haciendo posible recibir exitosamente al turista.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
