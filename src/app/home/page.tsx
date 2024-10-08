import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next.ts",
  description: "Batata frita>>>>",
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-16">
      <section className="flex flex-col w-2/5 items-center bg-blue-400 rounded">
        <h1 className="m-4 text-white font-large">Login</h1>
        <form action="" className="flex flex-col w-48 align-center">
          <label htmlFor="" className="flex justify-center text-white">Usuário</label>
          <input type="text" />
          <label htmlFor="" className="flex justify-center text-white">Senha</label>
          <input type="password" />
          <button type="submit" className="bg-blue-300 m-4 text-white">Enviar</button>
        </form>
      </section>
      </div>
    </>
  );
}
