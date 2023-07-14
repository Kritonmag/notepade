export const notes = [
  {
    text: 'При выборе заметки слева справа должен отображаться отрендеренный Markdown текст из локальной базы данных браузера(просмотр indexeddb), а также две кнопки - "Удалить" и "Редактировать", которые при отсутствии выбора в левой боковой панели являются неактивными (серого цвета). ',
    date: '05/09/2022',
    id: 1,
  },
  {
    text: 'При нажатии на кнопку "Удалить" должно происходить подтверждение удаления (для подтверждения использовать стандартное модальное окно)',
    date: '24/12/2022',
    id: 2,
  },
  {
    text: 'Во время редактирования текста сохранение контента должно происходить автоматически',
    date: '11/01/2023',
    id: 3,
  },
  {
    text: 'Поиск по заметкам осуществляется по частичному вхождению символов. При нажатии на кнопку "+" должна появиться новая пустая заметка',
    date: '22/02/2023',
    id: 4,
  },
  {
    text: 'Во время выполнения задания необходимо разместить программный код в нескольких компонентах - App, Sidebar, ListItem, Workspace, SearchBox и других при необходимости.',
    date: '25/02/2023',
    id: 5,
  },
  {
    text: 'Для связи между компонентами используйте Context (https://ua.reactjs.org/docs/context.html), будет плюсом использование хуков, работа с БД из нескольких компонентов - запрещено (только один компонент должен уметь общаться с БД). Верстка должна быть адаптивной и гибко подстраиваться под необходимое разрешение экрана.',
    date: '06/03/2023',
    id: 6,
  },
  {
    text: 'Дополнительно (оценивается выше), можно создать версию, которая вместо indexeddb использует quintadb API (https://quintadb.com) для хранения данных заметок.',
    date: '16/04/2023',
    id: 7,
  },
  {
    text: 'Более продвинутая версия - реализовать поддержку обоих баз данных (indexeddb, quintadb API) и выбирать для работы программы ту, которая указывается в параметре команды при запуске программы',
    date: '07/05/2023',
    id: 8,
  },
  {
    text: 'Код разместить на GitHub с понятными коммитами и количеством больше одногo',
    date: '11/05/2023',
    id: 9,
  },
  {
    text: 'Тестовое задание React',
    date: '11/05/2023',
    id: 10,
  },
  {
    text: 'Необходимо создать упрощенную копию программы "Заметки" из операционной системы Apple macOS с использованием Reactjs. Программа должна быть создана с помощью create-react-app.',
    date: '11/05/2023',
    id: 11,
  },
];