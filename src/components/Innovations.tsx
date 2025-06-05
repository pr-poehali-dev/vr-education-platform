import Icon from "@/components/ui/icon";

const Innovations = () => {
  const innovations = [
    {
      title: "Реалистичная графика",
      description: "Ultra HD визуализация исторических локаций",
      icon: "Eye",
      stats: "4K разрешение",
    },
    {
      title: "Интерактивность",
      description: "Взаимодействие с историческими персонажами",
      icon: "Users",
      stats: "100+ NPC",
    },
    {
      title: "Пространственный звук",
      description: "3D Audio для полного погружения",
      icon: "Volume2",
      stats: "360° звук",
    },
    {
      title: "Haptic-отзыв",
      description: "Тактильные ощущения при взаимодействии",
      icon: "Zap",
      stats: "Полный тач",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-vr-navy mb-6">Инновации</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы используем самые передовые VR-технологии для создания максимально
            реалистичного образовательного опыта.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-4xl font-bold text-vr-navy mb-6">
              Технологии будущего
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша платформа объединяет искусственный интеллект, машинное
              обучение и передовые VR-технологии для создания уникального
              образовательного опыта.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 card-hover"
                >
                  <div className="w-12 h-12 bg-vr-gold rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name={innovation.icon as any}
                      size={24}
                      className="text-vr-navy"
                    />
                  </div>
                  <h4 className="font-semibold text-vr-navy mb-2">
                    {innovation.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {innovation.description}
                  </p>
                  <div className="text-vr-gold font-semibold text-sm">
                    {innovation.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="bg-gradient-to-br from-vr-navy to-vr-light-navy rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto bg-vr-gold rounded-full flex items-center justify-center mb-4">
                  <Icon name="Glasses" size={48} className="text-vr-navy" />
                </div>
                <h4 className="text-2xl font-bold mb-2">VR Headset</h4>
                <p className="opacity-80">Последнее поколение</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Разрешение</span>
                  <span className="text-vr-gold">2880×1700 на глаз</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Частота кадров</span>
                  <span className="text-vr-gold">90 FPS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Поле зрения</span>
                  <span className="text-vr-gold">110°</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Трекинг</span>
                  <span className="text-vr-gold">6DOF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-vr-navy mb-8 text-center">
            Процесс разработки
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-vr-navy">1</span>
              </div>
              <h4 className="font-semibold mb-2">Исследование</h4>
              <p className="text-sm text-gray-600">
                Изучение исторических фактов и артефактов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-vr-navy">2</span>
              </div>
              <h4 className="font-semibold mb-2">Моделирование</h4>
              <p className="text-sm text-gray-600">
                Создание 3D-моделей и окружений
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-vr-navy">3</span>
              </div>
              <h4 className="font-semibold mb-2">Программирование</h4>
              <p className="text-sm text-gray-600">
                Разработка интерактивных сценариев
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-vr-navy">4</span>
              </div>
              <h4 className="font-semibold mb-2">Тестирование</h4>
              <p className="text-sm text-gray-600">
                Проверка качества и обучающего эффекта
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
