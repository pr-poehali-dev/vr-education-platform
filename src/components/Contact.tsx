import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-vr-navy mb-6">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Готовы начать свое путешествие в историю? Свяжитесь с нами и мы
            поможем выбрать подходящий курс.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-vr-navy mb-8">
              Напишите нам
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vr-navy focus:border-transparent transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vr-navy focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Курс
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vr-navy focus:border-transparent transition-colors">
                  <option>Выберите курс</option>
                  <option>Древний Рим</option>
                  <option>Средневековье</option>
                  <option>Египетские пирамиды</option>
                  <option>Древняя Греция</option>
                  <option>Эпоха Возрождения</option>
                  <option>Первая мировая война</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vr-navy focus:border-transparent transition-colors"
                  placeholder="Расскажите о ваших интересах..."
                ></textarea>
              </div>
              <button className="btn-primary w-full">
                Отправить сообщение
              </button>
            </form>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-vr-navy mb-8">
              Как нас найти
            </h3>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <Icon name="MapPin" size={48} className="text-vr-navy" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={20} className="text-vr-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-vr-navy">Адрес</h4>
                    <p className="text-gray-600">
                      г. Москва, ул. Инновационная, 42
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={20} className="text-vr-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-vr-navy">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={20} className="text-vr-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-vr-navy">Email</h4>
                    <p className="text-gray-600">info@virtual-memory.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={20} className="text-vr-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-vr-navy">Часы работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-vr-navy mb-4">
                Социальные сети
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-vr-navy rounded-full flex items-center justify-center hover:bg-vr-light-navy transition-colors"
                >
                  <Icon name="Twitter" size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-vr-navy rounded-full flex items-center justify-center hover:bg-vr-light-navy transition-colors"
                >
                  <Icon name="Facebook" size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-vr-navy rounded-full flex items-center justify-center hover:bg-vr-light-navy transition-colors"
                >
                  <Icon name="Instagram" size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-vr-navy rounded-full flex items-center justify-center hover:bg-vr-light-navy transition-colors"
                >
                  <Icon name="Youtube" size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
