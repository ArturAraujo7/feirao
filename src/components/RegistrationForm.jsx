import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ATENÇÃO: COLE A URL GERADA NO MAKE.COM EXATAMENTE ENTRE AS ASPAS ABAIXO
      const response = await fetch("https://hook.us2.make.com/e4gytejxrzced55fj7pucgj77tafc380", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nome: "", email: "", whatsapp: "" });

        // Retorna pro "idle" depois de 4 segundos caso a pessoa queira mandar outro lead
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar form:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <section
        id="cadastro"
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Preencha e Receba <br />
                <span className="text-[#EC0000]">
                  Novidades Exclusivas
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cadastre-se agora para receber em primeira mão condições especiais de financiamento que preparamos para você.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span>Condições especiais</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span>Análise de crédito na hora</span>
                </div>
              </div>
            </div>

            {/* Inicio do Form */}
            <div className="bg-[#F4F4F4] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                style={{ opacity: 1, transform: "none" }}
              >
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <input
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Como prefere ser chamado?"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#EC0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    E-mail
                  </label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#EC0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    WhatsApp
                  </label>
                  <input
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#EC0000] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    type="tel"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-[#EC0000] hover:bg-[#CC0000] text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-red-600/20 transition-all active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando seus dados..." : "Enviar"}
                </button>

                {/* Feedback Messages */}
                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-center">
                    <p className="text-green-700 font-bold text-sm">
                      ✓ Inscrição confirmada com sucesso!
                    </p>
                    <p className="text-green-600 text-xs mt-1">
                      Fique de olho no seu WhatsApp.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                    <p className="text-red-700 font-bold text-sm">
                      Ocorreu um erro na conexão.
                    </p>
                    <p className="text-red-600 text-xs mt-1">
                      Por favor, tente novamente.
                    </p>
                  </div>
                )}

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  Ao enviar, você concorda com nossa política de privacidade e
                  autoriza o contato para fins comerciais.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationForm;
