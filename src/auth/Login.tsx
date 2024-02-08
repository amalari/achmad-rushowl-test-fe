import { useLogin } from './useLogin';

const LoginPage = () => {
  const {
    handleSubmit,
    allowLogin,
    isDirtyEmail,
    isDirtyPassword,
    isValidEmail,
    isValidPassword,
    onChangeEmail,
    onChangePassword,
  } = useLogin();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-md rounded-lg px-8 pt-6 pb-8 h-screen flex items-center jutify-center">
      <div className="bg-white w-full shadow-md rounded-lg px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter email"
              onChange={onChangeEmail}
            />
            {isDirtyEmail && !isValidEmail && (
              <p className="text-red-500 text-xs">Email Invalid</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={onChangePassword}
              placeholder="******************"
            />
            {isDirtyPassword && !isValidPassword && (
              <p className="text-red-500 text-xs">Password Invalid</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={!allowLogin}
              className="bg-blue-500 enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded enabled:focus:outline-none enabled:focus:shadow-outline w-full disabled:opacity-50"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
