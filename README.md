# Вопросы

1. примерную оценку времени, которое вы потратили на выполнение задания;

> На выполнение задания потратил, примерно час времени.

2. комментарии по коду, почему выбран тот или иной способ решения;

> - Решил использовать typescript для типизации.
> - Сделал в проекте WebComponents. Возможно для лучших практик, стоило бы сделать, отдельный проект с компонентами,
    который опубликовать в npm.

3. возникали ли проблемы при выполнении задания.

> Нет не возникло проблем

## Демо проект:  [ссылка](https://egordidenko.github.io/webcomponents-to-react/)

## Как запустить проект?
1. yarn (установка всех зависимостей)
2. yarn dev

## В целом немного о проекте:

### Технологии:

1. Vite React
2. Web Components
3. Fetch
4. Typescript

### Mock Fetch Data

1. Используется сервис для получения данных: https://reqres.in/api/users

### О планах, непосредственно для Web Components:

1. Вынести в npm
2. Сделать Loader import/require html и css файлов. (этот пункт был, когда рендрер происходил, через )
    1. Для того чтобы не хранить всю верстку в общем компоненте
    2. Сделать более читабельный код
3. Добавить helpers, чтобы в проекте постоянно не использовать getAttribute или dataset, для получения атрибутов
4. Добавить тесты
 

