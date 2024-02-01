import { Link } from "react-router-dom";
import user from "../images/user.svg";
import password from "../images/password.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="flex w-full">
      <div className="ml-32 pt-[90px]">
        <h2 className="text-[38px] font-bold text-[#001A49]">
          Вход в платформу
        </h2>
        <form className="mt-[40px]">
          <label className="mb-[8px] inline-block font-semibold text-[#1A2024]">
            Имя пользователья<span className="text-[#F76659]">* </span>
          </label>
          <div className="relative flex items-center">
            <input
              placeholder="Введите имя"
              className="w-full rounded-xl border border-[#6E8BB74D] p-[12px] pl-[35px] text-[14px] text-black focus:outline-none"
            />
            <img src={user} className="absolute left-[12px]" />
          </div>
          <label
            htmlFor="userPassword"
            className="mb-[8px] mt-[16px] inline-block font-semibold text-[#1A2024]"
          >
            Пароль<span className="text-[#F76659]">*</span>
          </label>
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder="Введите пароль"
              className="w-[502px] rounded-xl border border-[#6E8BB74D] p-[12px] pl-[35px] text-[14px] text-black focus:outline-none"
            />
            <img src={password} className="absolute left-[12px]" />
          </div>
          <div className="mt-[24px] flex items-center">
            <input type="checkbox" className="mr-[16px] h-[16px] w-[16px]" />
            <p className="text-[#6E8BB7]">Запомнить меня</p>
          </div>
          <Link
            to="/dashboard"
            className="mt-[40px] block rounded-xl bg-[#0067F4] p-[12px] font-semibold text-white"
          >
            <span className="ml-[13rem]">Войти</span>
          </Link>
        </form>
        <div className="mt-44 text-[#6E8BB7]">
          Copyright ©Delever. Все права защищены
        </div>
      </div>
    </div>
  );
};

export default Login;
