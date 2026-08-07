import model from "../assets/machine.png";

export default function GetStarted() {
  return (
    <section className="started">

      <div className="startedtext">

        <h1 className="hero-title">
          Automatize.
          <br />
          Integre.
          <br />
          <span>Transforme.</span>
        </h1>

        <p className="hero-description">
          OkuTokeka ajuda sua empresa a conectar sistemas,
          automatizar processos e tomar decisões inteligentes
          com tecnologia moderna e escalável.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Agendar uma demo
          </button>

          <button className="btn-secondary">
            Fale Conosco
          </button>
        </div>

        <div className="hero-companies">
          <p>Confiado por empresas inovadoras</p>

          <div className="companies">
            <span>TechNova</span>
            <span>InovaHub</span>
            <span>DataCore</span>
            <span>NextGen</span>
          </div>
        </div>

      </div>

      <div className="modelmachinecenter">
        <img
          src={model}
          alt="Tecnologia OkuTokeka"
          className="modelmachineimag"
        />
      </div>

    </section>
  );
}