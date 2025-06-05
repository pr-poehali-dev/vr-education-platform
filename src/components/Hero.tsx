import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-vr-gold rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Виртуальная
            <br />
            <span className="gold-gradient bg-clip-text text-transparent">
              Память
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Погрузитесь в историю через революционные VR-технологии. Переживите
            великие события прошлого в полном погружении.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="btn-secondary flex items-center gap-3">
              <Icon name="Play" size={20} />
              Попробовать демо
            </button>
            <button className="btn-primary flex items-center gap-3">
              <Icon name="BookOpen" size={20} />
              Записаться на курс
            </button>
          </div>
        </div>

        {/* VR Headset illustration */}
        <div className="mt-16 animate-float">
          <div className="w-32 h-32 mx-auto bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
            <Icon name="Glasses" size={48} className="text-vr-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
