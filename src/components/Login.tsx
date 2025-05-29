const Login = () => {
  return (
    <form
      className="mx-auto my-3 rounded-lg bg-amber-100 p-4
     w-(--with-login) h-(--height-login)"
    >
      <input
        type="text"
        placeholder="Nombre"
        className="placeholder:text-green-500 placeholder:italic border border-gray-300 p-2 rounded-md w-full mb-3 disabled:bg-red-200"
        disabled
      />
      <input
        type="email"
        placeholder="Correo"
        className="placeholder:text-green-500 placeholder:italic border border-gray-300 bg-white p-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-purple-300 invalid:focus:ring-red-500 peer"
      />
      <p className="text-red-500 hidden peer-invalid:block">
        El correo es incorrecto
      </p>
      <input
        type="text"
        placeholder="Contraseña"
        className="placeholder:text-green-500 placeholder:italic border border-gray-300 bg-white p-2 rounded-md w-full my-3 focus:outline-none focus:ring-1 focus:ring-purple-300"
      />
      <button
        type="submit"
        className="cursor-pointer block w-full bg-blue-500 mx-auto text-white hover:bg-blue-400 p-2.5 rounded-md"
      >
        Ingresar
      </button>
    </form>
  );
};

export default Login;
