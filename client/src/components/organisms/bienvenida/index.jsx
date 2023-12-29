export default function Bienvenida() {
    return (
      <div className="flex flex-col justify-start items-center w-full">
        <h1 className="text-secondary-1 font-bebasneue text-4xl pt-8">Bienvenido</h1>
        <p className="text-white text-center text-2xl font-poppins px-14 py-6">
            PARA REGISTRAR UN NUEVO INGRESO, ENTRA EN LA SECCIÓN QUE APARECE ARRIBA DE <span className="text-secondary-1">INGRESOS</span>, Y SI QUERES VISUALIZAR TODOS LOS REGISTROS REALIZADOS, ENTRA EN LA SECCIÓN DE <span className="text-secondary-1">REGISTROS</span>.
        </p>
      </div>
    );
  }
  