import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-[#001A49] font-bold">Вход в платформу</h1>
        <p className="font-semibold">
          Имя пользователья <span className="text-[#F76659]">*</span>
        </p>
        <input
          type="name"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="-mt-[43px] ml-3 text-gray-400">
          <HiUser />
        </div>

        <p className="mt-10 font-semibold">
          Пароль<span className="text-[#F76659]">*</span>
        </p>
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="-mt-[42px] ml-3 text-gray-400">
          <IoMdLock />
        </div>
        <div className="flex mt-8">
          <input type="checkbox" />
          <p className="ml-2 text-gray-400">Запомнить меня</p>
        </div>
        <button className="w-[592px] h-[56px] rounded-lg bg-[#0067F4] text-white mt-8">
          <Link to="/dashboard">Войти</Link>
        </button>
      </form>
      <h1 className="mt-[200px] text-gray-500">
        Copyright Delever. Все права защищены
      </h1>
    </div>
  );
};

export default Login;
