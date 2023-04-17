interface MyModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MyModal = ({ setModal }: MyModalProps): JSX.Element => {
  return (
    <div
      id="extralarge-modal"
      className="fixed top-0 left-0 right-0 z-50 w-full pl-[65vh] py-[40vh] overflow-x-hidden overflow-y-hidden">
      <div className="text-center relative w-full max-w-xl max-h-96 overflow-x-hidden overflow-y-auto">
        {/* Modal Content  */}
        <div className="relative bg-gray-700 rounded-lg shadow ">
          {/* Modal header  */}
          <div className="flex items-center justify-between p-5 border-b rounded-t border-gray-500 ">
            <h3 className="text-lg font-medium text-white ">
              Términos y Condiciones
            </h3>
            <button
              onClick={() => {
                setModal(false)
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-hide="extralarge-modal">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body  */}
          <div className="p-6 space-y-6">
            <div className="text-base leading-relaxed text-gray-400">
              <p>Bienvenido a exercify!</p>
              El uso de nuestro sitio web está sujeto a los siguientes términos
              y condiciones. Al utilizar nuestro sitio web, usted acepta estar
              sujeto a estos términos y condiciones. Si no está de acuerdo con
              estos términos y condiciones, por favor no utilice nuestro sitio
              web.
            </div>
            <div className="text-base leading-relaxed text-gray-400">
              <p>Información del usuario</p>
              Para comprar en nuestro sitio web, debe proporcionar información
              personal y de pago. Usted acepta que toda la información
              proporcionada es verdadera y exacta. Nos reservamos el derecho de
              cancelar cualquier pedido si la información proporcionada es falsa
              o engañosa.
            </div>
            <div className="text-base leading-relaxed text-gray-400">
              <p> Propiedad intelectual </p>
              Todo el contenido del sitio web, incluyendo pero no limitándose a
              imágenes, texto, gráficos, logotipos y software, es propiedad de
              exercify y está protegido por leyes de propiedad intelectual.
              Usted acepta no copiar, reproducir, distribuir o explotar de
              ninguna manera cualquier contenido del sitio web sin nuestro
              consentimiento previo y por escrito.
            </div>
            <div className="text-base leading-relaxed text-gray-400">
              <p>Precios y pagos</p>
              Todos los precios en nuestro sitio web están en pesos argentinos y
              no incluyen impuestos . Nos reservamos el derecho de modificar los
              precios en cualquier momento sin previo aviso. Los pagos deben ser
              realizados en línea utilizando una tarjeta de crédito válida.
            </div>
            <div className="text-base leading-relaxed text-gray-400">
              <p>Limitación de responsabilidad </p>
              exercify no será responsable por daños directos, indirectos,
              incidentales o consecuentes derivados del uso o la imposibilidad
              de uso de nuestro sitio web o de los productos vendidos en el
              mismo. Nos reservamos el derecho de modificar o discontinuar el
              sitio web en cualquier momento sin previo aviso.
            </div>
            <div className="text-base leading-relaxed text-gray-400">
              <p>Ley aplicable </p>
              Estos términos y condiciones se regirán e interpretarán de acuerdo
              con las leyes del estado de Argentina. Cualquier disputa
              relacionada con estos términos y condiciones será resuelta
              exclusivamente por los tribunales argentinos. Si tiene alguna
              pregunta o comentario sobre estos términos y condiciones, por
              favor contáctenos a través de nuestro sitio web.
            </div>
          </div>
          {/* Modal footer  */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-600 rounded-b">
            <button
              onClick={() => {
                setModal(false) 
              }}
              data-modal-hide="extralarge-modal"
              type="button"
              className="inline-block text-sm px-3 py-1.5 leading-none border rounded text-white hover:scale-110 hover:bg-green-400 hover:text-black ease-in duration-200 mt-4 mr-4 lg:mt-0">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyModal
