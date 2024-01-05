import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"

const Login = () => {
  return (
    <div className=" min-h-screen bg-slate-200 flex justify-center items-center ">
      <div className="py-12 bg-white w-3/4 sm:w-2/3 lg:w-[520px] flex flex-col items-center justify-center h-1/2 shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm justify-center">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 px-5 w-full sm:px-0 sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <Input label="Email" type="email" />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Lupa password?
                  </a>
                </div>
              </div>
              <Input label="Password" type="password" />
            </div>

            <Button label="Sign in" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
