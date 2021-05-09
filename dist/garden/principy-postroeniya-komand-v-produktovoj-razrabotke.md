---
tags: public
changefreq: daily
---

# Принципы построения команд в продуктовой разработке

## Мотивация

## Типы команд

В книге "Team Topologies: Organizing Business and Technology Teams for Fast Flow" выделяется четыре типа команд[^1].

---

аутлайн

- мотивация документа
	- Данные материалы От момента отсутствия команды до момента ее старта
	- область применения документа
	- Сравнение разных вариантов или фокус на «правильном»?
	- [[Системные решения поднимают продуктивность всей системы, когда локальные решения повышают эффективность конретного участка]]
- типы команд
	- [[Предлагается четыре типа команд Stream-aligned teams, Platform teams, Complicated-subsystem teams, Enabling teams]]
	- Нужны ли платформенные команды
		- Что такое платформа
		- [[2021-04-06T07:40:03Z хайлайт - фидбек к статье]]
		- [[Есть риск что платформенная команда начнёт диктовать условия работы]]
		- [[Задача платформенной команды скрывать сложность от потоковых команд]]
		- [[Платформенная команда должна работать как thinnest valuable platform и предоставлять сервис]]
		- [[Платформенную команду могут заменить готовые платформы типа AWS]]
		- [[2021-04-04 Почему платформенные команды негативно влияют на систему]]
	- Complex subsystem team нужны или нет
	- Enabling team нужны или нет
- Определение зоны ответственности команды, миссии, цели
	- под что можно создавать команду
		- под компонент
		- под тип пользователя
		- под проблему
	- Команды по доменам или по типам пользователей?
	- Conway’s Law
	- Могут ли коммитить все во все или нужны четкие границы
	- размер должен быть небольшой
		- two pizza team
		- Как обеспечить небольшой размер при мультистековости?
	- Определение миссии и цели команды
		- Нужны ли они?
		- "Сейчас все чаще команды собираются на время"
			- вспомнить откуда
	- автономные
		- [[Планирование через вертикаль ухудшает результат, так как появляются промежуточные звенья передачи информации]]
		- [[По классике руководство направляет через верхнеуровневые цели, а команды определяют что нужно для достижения и реализуют]]
	- нужно связывать с пользователем
	- гибкость тоже должна быть
		- что если новая возможность вне границ команды или на стыке границ разных команд
	- [[2021-04-27T05:14:06Z мысли https:_t.me_modernsd_21648]]
	- [[Maturity Model — хороший инструмент для создания метрик по качественным характеристикам]]
	- [[Maturity models простой инструмент построения стратегии развития]]
	- [[Можно настроить управление компанией через соединение команд напрямую с пользователями]]
- коммуникации между командами
	- [[2021-03-18T07:35:38Z хайлайт https:_dygk.medium.com_designing-org-73e7b27a5bac]]
- Роли и состав
	- Какие роли должны быть в команде
		- роль != должность
			- роль по левенчуку
		- Разработчик интерфейсов
		- Разработчик бекенда 
		- Разработчик базы данных
		- Архитектор?
		- Проектировщик
		- Операционный менеджер
		- Исследователь
		- Бизнес аналитик
		- Дизайнер
		- Стратегический менеджер
		- Пипл-менеджер? Ментор?
		- ...
	- продакт - роль
		- Продакт менеджер что делает? Принимает решение что делать? Потому что исследует рынок исследователь, а не продакт менеджер
		- Продакт занимается пониманием пользователей а не отвечает за метрики
		- За метрики отвечает команда и чтоб с ними работать пользуется услугами роли продакт
		- команда должна растить понимание доменной области
			- [[2021-03-16T18:50:18Z мысли * оценка как фактор требования больших требований]]
		- [[Команда в аудитории объединена вокруг product owne 05503b78ce1d483c96c2c4996121fd6b]]
	- Роль руководителя в команде
		- растить, а не решать проблемы
			- [[2021-03-16T18:51:24Z мысли Почему у тимлидов много встреч? Потому что они нах]]
		- [[2021-03-16T18:51:56Z мысли 1-1 плохо, так как это дисфункция и замедление обр]]
		- [[Лидер должен быть Growth Oriented а не Task Orient 6cc28ed602634df7b6cf356fefaea733]]
		- [[Руководитель создает не команду, а помогает создать целевую систему]]
		- [[Оценивать работу руководителя можно по удовлетворению интересов всех ролей]]
		- [[Хороший менеджер ищет ограничение и повышает его эффективность]]
	- Модель business differentiation & model complexity
	- Сочетание сениоров и других грейдов 
	- Фуллстек или синглстек
	- [[Код-ревью, SRE — удлиняет или обрывает обратную связь]]
- Орган управления командами
	- кто создает и переформатирует команды?
	- кто управляет крупными кросскомандными задачами и изменениями?
	- Без стабильных границ и зон ответственности нужен общий управляющий орган для синхронизации крупных задач, типа переезжаем в облако.
- Гильдии, юниты и другие кластера
	- Нужны ли трайбы, юниты и другие более крупные кластера команд?
- Как искать сложные задачи в продукте
	- [[2021-04-09T15:01:12Z хайлайт Полонский:]]
- алгоритм работы над оргструктурой
	- определяете зоны ответственности
	- Определяете необходимые компетенции
	- Определяете существующие центры компетенций
	- ...
	- Запускаете команду
- Пирамида уверенности в научных наблюдениях
	- Личные наблюдения где-то в середине
- еще референсы 
	- Книга топологий [[Team Topologies]]
	- Modernsd 
	- Опыт наблюдений
	- Emacslog  https://t.me/emacsway_log/541
	- Пресловутый Spotify model
	- [[2021-03-16T18:49:25Z вопрос вопросы к оргструктуре]]
	- [[2021-03-16T18:52:06Z хайлайт пускилиц]]
	- [[2021-04-27T06:45:09Z мысли Evergreen статья про оргструктуры]]
	- [[DDD Quickly]]
	- Какие варианты я наблюдал
		- функциональные команды
		- Фуллстек команды дизайн отдельно
		- две фуллстек команды с общим беклогом
		- Пересобираем каждые две недели
		- Команды веба и команды мобилки, когда бек у веба
		- команды веба и команды мобилки со своим беком
		- Фуллстек команды с дизайном внутри
		- ml команда




[^1]: M. Skelton, and M. Pais, "Team Topologies: Organizing Business and Technology Teams for Fast Flow", ISBN: 978-1942788812.