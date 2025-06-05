import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Древний Рим",
      description:
        "Прогуляйтесь по улицам вечного города в период его расцвета",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d4d9a7?w=500&h=300&fit=crop",
      duration: "8 часов",
      lessons: 12,
      price: "4,990 ₽",
      icon: "Crown",
    },
    {
      title: "Средневековье",
      description:
        "Окунитесь в атмосферу средневековых замков и рыцарских турниров",
      image:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c26a?w=500&h=300&fit=crop",
      duration: "10 часов",
      lessons: 15,
      price: "5,990 ₽",
      icon: "Sword",
    },
    {
      title: "Египетские пирамиды",
      description: "Исследуйте тайны древнего Египта и великих фараонов",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d4d9a7?w=500&h=300&fit=crop",
      duration: "6 часов",
      lessons: 10,
      price: "3,990 ₽",
      icon: "Triangle",
    },
    {
      title: "Древняя Греция",
      description: "Встретьтесь с великими философами в античных Афинах",
      image:
        "https://images.unsplash.com/photo-1555993539-1732b0258209?w=500&h=300&fit=crop",
      duration: "7 часов",
      lessons: 11,
      price: "4,490 ₽",
      icon: "Columns",
    },
    {
      title: "Эпоха Возрождения",
      description: "Станьте свидетелем культурного расцвета Италии XV века",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop",
      duration: "9 часов",
      lessons: 14,
      price: "5,490 ₽",
      icon: "Palette",
    },
    {
      title: "Первая мировая война",
      description: "Изучите ключевые сражения и события Великой войны",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      duration: "12 часов",
      lessons: 18,
      price: "6,990 ₽",
      icon: "Crosshair",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-vr-navy mb-6">Наши курсы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Путешествуйте сквозь время с нашими интерактивными VR-курсами.
            Каждый урок — это полное погружение в историческую эпоху.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-vr-gold rounded-full flex items-center justify-center">
                  <Icon
                    name={course.icon as any}
                    size={24}
                    className="text-vr-navy"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-vr-navy mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="BookOpen" size={16} />
                    {course.lessons} уроков
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-vr-gold">
                    {course.price}
                  </span>
                  <button className="bg-vr-navy text-white px-6 py-2 rounded-lg hover:bg-vr-light-navy transition-colors duration-300">
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Посмотреть все курсы</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
