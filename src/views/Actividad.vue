<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la promoción de productos y servicios en una empresa turística?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la visibilidad y las ventas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el precio de los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la calidad del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de promoción tiene como objetivo principal la creación de un vínculo emocional con el cliente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promoción de eventos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción de imagen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Promoción de precio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promoción directa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de promoción de ventas ofrece descuentos directos en el precio del producto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cupones.', esCorrecta: true },
            { id: 'b', texto: 'Concursos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Regalos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Muestras gratuitas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En un informe de servicio, ¿cuál de los siguientes elementos es esencial para evaluar la calidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de productos vendidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La actitud y respuesta del personal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El coste de producción del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de campañas publicitarias realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿La publicidad en redes sociales es una forma de promoción porque?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo está disponible para grandes empresas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es exclusiva para productos de lujo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite llegar a un público amplio y segmentado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No permite medir resultados de forma eficaz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes acciones corresponde a la "promoción de ventas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar descuentos y ofertas por tiempo limitado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar artículos en revistas especializadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer relaciones públicas con influencers.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la producción de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de informes se elaboran en el sector de servicio para medir la satisfacción del cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informes de satisfacción del cliente.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Informes financieros.', esCorrecta: false },
            { id: 'c', texto: 'Informes de desempeño.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Informes de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el beneficio principal de un informe de servicio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la atención al cliente.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Aumentar las ventas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reducir el costo de los servicios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar el diseño del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se entiende por "segmentación de mercado" en la promoción de productos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dividir el mercado en grupos de clientes con características similares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir los precios en todas las categorías de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambiar el diseño del producto según las preferencias de los clientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el presupuesto de publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de promoción implica el ofrecimiento de muestras gratis a los consumidores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promoción de precio.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Promoción de precio.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Promoción de imagen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promoción de descuentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes opciones es una estrategia común de promoción en servicios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer regalos en la compra de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear una campaña de fidelización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ofrecer productos a precios elevados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué es lo más importante a incluir en un informe de servicio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las quejas de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La descripción del servicio prestado y los resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El precio de los productos promocionados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿La promoción de productos en fechas especiales, como Black Friday, es un ejemplo de?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Promoción de lealtad.', esCorrecta: false },
            {
              id: 'b',
              texto: '<em>Marketing</em> digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promoción de temporada.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Publicidad institucional.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes es un medio común para la promoción de productos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicidad en medios masivos como televisión y radio.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Encuestas online.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reclutamiento de empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Auditoría financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué es un "plan de promoción" en <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una estrategia para aumentar la cantidad de empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un documento que detalla las acciones y objetivos de la promoción de productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un informe de la calidad de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un programa de capacitación para el personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de promoción de ventas se basa en premiar la lealtad del cliente con puntos o descuentos adicionales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Promoción de cupones.', esCorrecta: false },
            { id: 'b', texto: 'Promoción de fidelización.', esCorrecta: true },
            { id: 'c', texto: 'Promoción de reembolsos.', esCorrecta: false },
            { id: 'd', texto: 'Promoción de paquetes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de las siguientes acciones se puede realizar para medir la efectividad de la promoción de un servicio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el precio del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el tiempo de atención al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Realizar encuestas de satisfacción y análisis de <em>feedback</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificar el diseño del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué se busca con un informe de servicio enfocado en la gestión de quejas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la estrategia de marketing.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la calidad y atención del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Optimizar el proceso de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los costos de operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué significa la “promoción cruzada” en <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la promoción de un solo producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Combinar dos o más productos o servicios en una sola oferta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Vender productos a diferentes precios según el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ofrecer productos de la competencia a un menor precio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cómo se puede medir la rentabilidad de una campaña promocional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizando el número de impresiones en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contabilizando las ventas antes y después de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modificando los precios del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizando encuestas internas a los empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
