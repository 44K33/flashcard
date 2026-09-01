import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.login({ username, password });
      const { token } = response.data;

      //Token im Browser speichern, damit der Login auch nach dem Neuladen bestehen bleibt
      localStorage.setItem("token", token);

      // Nach erfolgreichem Login zur Startseite navigieren
      navigate("/");
    } catch (error) {
      console.error("Login fehlgeschlagen:", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Brand-Bereich */}
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-primary text-[64px] mb-4">
          school
        </span>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary tracking-tight">
          FlashLearn
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Fokus. Lernen. Meistern.
        </p>
      </div>

      {/* Login-Formular-Karte */}
      <div className="w-full max-w-[400px] bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] border border-surface-container-low">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Benutzername */}
          <div className="flex flex-col gap-2">
            <label
              className="font-label-sm text-label-sm text-on-surface"
              htmlFor="username"
            >
              Benutzername
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
                person
              </span>
              <input
                className="w-full h-[48px] pl-10 pr-4 bg-surface-bright border border-outline-variant rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:border-primary input-glow transition-all"
                id="username"
                placeholder="Dein Benutzername"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Passwort */}
          <div className="flex flex-col gap-2">
            <label
              className="font-label-sm text-label-sm text-on-surface"
              htmlFor="password"
            >
              Passwort
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
                lock
              </span>
              <input
                className="w-full h-[48px] pl-10 pr-4 bg-surface-bright border border-outline-variant rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:border-primary input-glow transition-all"
                id="password"
                placeholder="••••••••"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="mt-2 w-full h-[48px] bg-primary text-on-primary font-label-sm text-label-sm rounded-lg hover:bg-primary-container hover:-translate-y-[1px] hover:shadow-md active:translate-y-[0px] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            type="submit"
          >
            <span>Anmelden</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
