import Icon from "@/components/ui/icon";

const About = () => {
  const teamMembers = [
    {
      name: "Анна Волкова",
      role: "CEO & Основатель",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9f3c8a4?w=300&h=300&fit=crop",
      description: "Эксперт в области образовательных технологий",
    },
    {
      name: "Михаил Соколов",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Специалист по VR-разработке",
    },
    {
      name: "Елена Петрова",
      role: "Историк-консультант",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Кандидат исторических наук",
    },
    {
      name: "Сергей Рябинин",
      role: "Ведущий разработчик",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Специалист по VR-технологиям",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-vr-navy mb-6">О нас</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы — команда энтузиастов, объединившая историков, технологов и
            педагогов для создания уникального образовательного опыта в
            виртуальной реальности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-vr-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-vr-gold font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-vr-navy mb-6 text-center">
            Наша миссия
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-vr-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Инновации</h4>
              <p className="text-gray-600">
                Революционные технологии для образования
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-vr-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Доступность</h4>
              <p className="text-gray-600">Образование для каждого студента</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={32} className="text-vr-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Качество</h4>
              <p className="text-gray-600">Высокие стандарты обучения</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
