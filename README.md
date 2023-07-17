# Комментарии к тестовому
<ul>
  <li>Сделать папки Components и UI (компонент для общих компонентов, которые имеют какую-то логику, UI для “тупых” компонентов, которые     
используются только в некоторых местах)</li>
  <li>Отрефачить LitstItem - удалить состояния отвечающие за открытие модалок и  передавать два колбэка, отвечающих за открытие модалок. Вынести tasks и categories и так же передавать их пропсом в ListItem. Перенести ListItem в папку UI</li>
  <li>Перенести ListItem в папку UI</li>
  <li>Перенести Header в Components</li>
  <li>Перенести отрисовку модалок в компонент верхенего уровня (например App) и рисовать их через React.createPortal</li>
  <li>Можно придумать какой-то механизм, например хук, который под капотом будет использовать useContext (как вариант можно и в Redux, но всё-таки в Redux лучше хранить бизнес логику, а тут чисто логика отображения. В общем стоит подумать.), который позволит из любого места приложения открывать модалки (для того чтобы не хранить логику в каждом ListItem и для унификации работы с модалками)</li>
  <li>Данных хук юзать в Categories и Tasks и из него доставать два колбэка для управления модалками и их передавать в пропсами в ListItem;</li>
  <li>Папку Modal переименовать в Modals, на верхнем уровне оставить только ModalRemoveItem и ModalCreateItem, остальные модалки вынести в папку components</li>
  <li>Компонент Modal вынести в UI, т.к. компонент не умный.</li>
  <li>app переименовать в store, reduxStore, чтобы было понятнее</li>
  <li>в папке features создать две подпапки categories (categoriesSlice.ts, categories.tsx) и tasks (tasksSlice.ts, tasks.tsx) для соответсвия с FSD, чтобы каждая папка содержала всё необходимое для данной фичи.</li>
  <li> Так же можно в папку Categories добавить файл types.ts и из него экспортировать enum (для дефолтных категории), который будет использоваться в тасках, чтобы иметь единственный источник правды для статичных id. Такое разрешается в модульной архитектуре, но  не уверен, на счет FSD 😢</li>
  <li>enum CategoriesIds { <br>
	&nbsp;&nbsp;CATEGORY_1 = "d485a644-5a24-4f55-b3f7-a083338be879"<br>
	&nbsp;&nbsp;CATEGORY_2 = "52f7451a-0f06-4ddc-affa-b1d8ed24aee3"<br>
	&nbsp;&nbsp;CATEGORY_2 = "36704c57-4575-4112-b962-948b04a20506"<br>
}</li>
</ul>
