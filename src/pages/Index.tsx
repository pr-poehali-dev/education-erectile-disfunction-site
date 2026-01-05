import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">МужскоеЗдоровье</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium hover:text-primary transition-colors">О проблеме</a>
            <a href="#program" className="text-sm font-medium hover:text-primary transition-colors">Программа</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Записаться</a>
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">Научный подход к лечению</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Восстановите <span className="text-primary">мужское здоровье</span> естественным путем
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Авторская программа обучения на основе последних исследований. Результаты уже через 2-3 недели. 
                Полная конфиденциальность и индивидуальный подход.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#contact">Начать программу</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#program">Узнать подробнее</a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">87%</div>
                  <div className="text-sm text-muted-foreground">Эффективность</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2-3</div>
                  <div className="text-sm text-muted-foreground">Недели до результата</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/9bc75d52-182b-4a39-b544-91379b66b244/files/31041ec5-1c31-43eb-b3e5-0250efe6bfbb.jpg" 
                alt="Здоровый образ жизни"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О проблеме</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Эректильная дисфункция — распространенная проблема, которую можно решить
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>40% мужчин</CardTitle>
                <CardDescription>старше 40 лет сталкиваются с этой проблемой</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Activity" className="text-accent" size={24} />
                </div>
                <CardTitle>90% случаев</CardTitle>
                <CardDescription>имеют физиологические причины, которые можно устранить</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-primary" size={24} />
                </div>
                <CardTitle>Психология важна</CardTitle>
                <CardDescription>Стресс и тревога усугубляют проблему в 70% случаев</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                </div>
                <CardTitle>Решаема</CardTitle>
                <CardDescription>При правильном подходе успех достигается в 85-90% случаев</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Научный подход к решению</h3>
                <p className="text-muted-foreground mb-6">
                  Наша программа основана на последних исследованиях в области урологии, сексологии и психологии. 
                  Мы используем комплексный подход, который включает физические упражнения, изменение образа жизни 
                  и психологические техники.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Без медикаментов и побочных эффектов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Долгосрочный результат, а не временное решение</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Улучшение общего состояния здоровья</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon name="Award" className="text-accent mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon name="BookOpen" className="text-primary mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Научных статей</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon name="Users2" className="text-accent mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon name="Star" className="text-primary mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Программа обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пошаговая методика восстановления мужского здоровья за 8 недель
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <CardTitle className="text-2xl">Недели 1-2: Диагностика и старт</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Clipboard" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Полная диагностика состояния</p>
                    <p className="text-sm text-muted-foreground">Анализ образа жизни, питания, физической активности</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Target" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Постановка целей</p>
                    <p className="text-sm text-muted-foreground">Индивидуальный план восстановления</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Dumbbell" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Начало физических упражнений</p>
                    <p className="text-sm text-muted-foreground">Специальные упражнения для улучшения кровообращения</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <CardTitle className="text-2xl">Недели 3-4: Углубление</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Apple" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Оптимизация питания</p>
                    <p className="text-sm text-muted-foreground">Продукты, улучшающие мужское здоровье</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Zap" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Интенсификация тренировок</p>
                    <p className="text-sm text-muted-foreground">Продвинутые упражнения и техники</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Moon" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Улучшение качества сна</p>
                    <p className="text-sm text-muted-foreground">Техники для восстановления гормонального баланса</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <CardTitle className="text-2xl">Недели 5-6: Психология</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Brain" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Работа со стрессом</p>
                    <p className="text-sm text-muted-foreground">Техники релаксации и управления тревогой</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Heart" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Уверенность и самооценка</p>
                    <p className="text-sm text-muted-foreground">Психологические упражнения для повышения уверенности</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Коммуникация с партнером</p>
                    <p className="text-sm text-muted-foreground">Как говорить о проблеме и решать её вместе</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <CardTitle className="text-2xl">Недели 7-8: Закрепление</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="TrendingUp" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Оценка прогресса</p>
                    <p className="text-sm text-muted-foreground">Анализ достигнутых результатов</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Repeat" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Формирование привычек</p>
                    <p className="text-sm text-muted-foreground">Создание устойчивого здорового образа жизни</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="MapPin" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">План на будущее</p>
                    <p className="text-sm text-muted-foreground">Стратегия поддержания результата</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Что входит в программу</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Video" className="text-primary" size={28} />
                </div>
                <h4 className="font-semibold mb-2">Видео-уроки</h4>
                <p className="text-sm text-muted-foreground">40+ обучающих видео с подробными инструкциями</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="text-accent" size={28} />
                </div>
                <h4 className="font-semibold mb-2">Методички</h4>
                <p className="text-sm text-muted-foreground">PDF-материалы для самостоятельного изучения</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={28} />
                </div>
                <h4 className="font-semibold mb-2">Поддержка</h4>
                <p className="text-sm text-muted-foreground">Консультации со специалистом 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Истории успеха наших клиентов (имена изменены для конфиденциальности)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <CardTitle>Александр, 42 года</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "После 3 недель занятий по программе заметил существенные улучшения. Самое главное — это работает 
                  без таблеток и побочных эффектов. Чувствую себя увереннее и здоровее."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    Д
                  </div>
                  <div>
                    <CardTitle>Дмитрий, 38 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Долго не решался обратиться за помощью. Программа помогла не только физически, но и психологически. 
                  Научился управлять стрессом и вернул уверенность в себе."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <CardTitle>Михаил, 45 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Комплексный подход — это то, что мне нужно было. Упражнения, питание, психология — всё работает 
                  в системе. Результат превзошёл ожидания. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    С
                  </div>
                  <div>
                    <CardTitle>Сергей, 51 год</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Думал, что в моём возрасте уже ничего не изменить. Ошибался! Программа действительно работает. 
                  Главное — следовать всем рекомендациям и не бросать."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    И
                  </div>
                  <div>
                    <CardTitle>Игорь, 36 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Отличная программа! Особенно понравилась психологическая часть — помогла разобраться в причинах 
                  и научиться справляться с тревогой. Спасибо за деликатность!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    В
                  </div>
                  <div>
                    <CardTitle>Владимир, 48 лет</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Прошёл полный курс за 8 недель. Результат стабильный и долгосрочный. Улучшилось не только 
                  мужское здоровье, но и общее самочувствие. Очень благодарен!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость программ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите формат, который подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                Популярный выбор
              </div>
              <CardHeader className="text-center pt-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" className="text-primary" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Полный курс</CardTitle>
                <CardDescription className="text-lg">8-недельная программа обучения</CardDescription>
                <div className="mt-6">
                  <div className="text-5xl font-bold text-primary">9 950 ₽</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>40+ видео-уроков с подробными инструкциями</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Методические материалы и PDF-гайды</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Пошаговый план на 8 недель</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Доступ к материалам навсегда</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Поддержка в чате 24/7</span>
                </div>
                <div className="pt-6">
                  <Button size="lg" className="w-full text-lg" asChild>
                    <a href="#contact">Записаться на курс</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-accent" size={40} />
                </div>
                <CardTitle className="text-3xl mb-2">Индивидуальная консультация</CardTitle>
                <CardDescription className="text-lg">Персональная работа со специалистом</CardDescription>
                <div className="mt-6">
                  <div className="text-5xl font-bold text-accent">15 000 ₽</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Индивидуальная диагностика вашего случая</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Персональный план лечения</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Онлайн-сессия 60 минут</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Рекомендации с учётом ваших особенностей</span>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Поддержка в течение месяца после консультации</span>
                </div>
                <div className="pt-6">
                  <Button size="lg" variant="outline" className="w-full text-lg border-2" asChild>
                    <a href="#contact">Записаться на консультацию</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-2 bg-gradient-to-r from-blue-50 to-orange-50">
              <CardContent className="py-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon name="Gift" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold">Специальное предложение</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  При покупке полного курса — индивидуальная консультация со скидкой 50%
                </p>
                <div className="inline-block">
                  <div className="text-3xl font-bold text-primary">
                    Курс + Консультация = <span className="line-through text-muted-foreground">24 950 ₽</span> 17 450 ₽
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Запишитесь на консультацию</h2>
            <p className="text-lg text-muted-foreground">
              Все данные строго конфиденциальны. Мы свяжемся с вами в удобное время.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:sdztreding@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">sdztreding@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+79961038703" className="text-muted-foreground hover:text-primary transition-colors">+7 (996) 103-87-03</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <a href="https://wa.me/79961038703" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-600 transition-colors">+7 (996) 103-87-03</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telegram</p>
                    <a href="https://t.me/sdztreding" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">@sdztreding</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Shield" className="text-primary" size={20} />
                    <p className="font-semibold">Гарантия конфиденциальности</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Все консультации проводятся с соблюдением полной анонимности. 
                    Ваши данные надёжно защищены и не передаются третьим лицам.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (996) 103-87-03"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о вашей ситуации (необязательно)"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={24} />
                <span className="text-xl font-bold">МужскоеЗдоровье</span>
              </div>
              <p className="text-slate-400 text-sm">
                Научно обоснованная программа восстановления мужского здоровья естественным путём.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#problem" className="hover:text-white transition-colors">О проблеме</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Программа</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Email: sdztreding@gmail.com</li>
                <li>Телефон: +7 (996) 103-87-03</li>
                <li>WhatsApp: +7 (996) 103-87-03</li>
                <li>Telegram: @sdztreding</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 МужскоеЗдоровье. Все права защищены. Конфиденциальность гарантирована.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}