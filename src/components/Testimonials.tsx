import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Мария Иванова",
      role: "Студентка истфака МГУ",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9f3c8a4?w=100&h=100&fit=crop",
      rating: 5,
      text: "Невероятные ощущения! Будто действительно побывала в Древнем Риме. Этот опыт полностью изменил мое восприятие истории.",
    },
    {
      name: "Алексей Петров",
      role: "Преподаватель истории",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Использую курсы на своих занятиях. Студенты в восторге! Наконец-то история стала живой и увлекательной.",
    },
    {
      name: "Екатерина Смирнова",
      role: "Школьница, 10 класс",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Раньше история казалась скучной, но после VR-уроков я полюбила этот предмет. Теперь мечтаю стать археологом!",
    },
    {
      name: "Дмитрий Волков",
      role: "Родитель",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      text: "Мой сын изучает историю с удовольствием. Отличная альтернатива традиционным учебникам!",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-vr-navy mb-6">Отзывы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Более 10,000 студентов уже погрузились в историю вместе с нами. Вот
            что они говорят о своем опыте.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-vr-navy text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-vr-gold fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-vr-navy to-vr-light-navy rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Присоединяйтесь к нам!</h3>
          <p className="text-xl mb-6 opacity-90">
            Более 10,000 довольных студентов уже изучают историю с нами
          </p>
          <div className="flex justify-center items-center gap-8 text-vr-gold">
            <div className="text-center">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-sm opacity-80">Студентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">4.9</div>
              <div className="text-sm opacity-80">Рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm opacity-80">Курсов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
