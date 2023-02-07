# FeatureSlicedDesign architecture

- [FeatureSlicedDesign architecture](#featuresliceddesign-architecture)
  - [Структура и иерархия](#структура-и-иерархия)
    - [Вопросы для определения](#вопросы-для-определения)
  - [Структура каждого слоя](#структура-каждого-слоя)
    - [App](#app)
    - [Widgets](#widgets)
    - [Features](#features)
    - [Entities](#entities)
    - [Shared](#shared)

## Структура и иерархия

Архитектура выстраивается базовыми слоями:

```bash
src/
    app           # Инициализирующая логика приложения
    processes     # (Опц.) Процессы приложения над страницами
    pages         # Страницы приложения
    widgets       # Самостоятельные и полноценные блоки страниц
    features      # (Опц.) Обрабатываемые юзером сценарии
    entiries      # (Опц.) Бизнес-сущности
    shared        # Переиспользуемые модули без привязки к бизнес-логике

```

Принцип каждого слоя таков, что он однонаправленный - снизу-вверх. Слой `app` может использовать все слои ниже, но при этом слой `shared` не может использовать слои выше.

Чем ниже расположен модуль - тем опаснее в него вносить измемения.

---

### Вопросы для определения

| Слой        | Вопрос                                                                |
| ----------- | --------------------------------------------------------------------- |
| `app`       | Общая инициализируемая логика приложения?                             |
| `processes` | Процесс протекает через несколько страниц?                            |
| `pages`     | Относится к странице или экрану?                                      |
| `widgets`   | Самостоятельный и полноценный блок страницы с конкретными действиями? |
| `features`  | Относится к действию юзера представляющему бизнес-ценность?           |
| `entiries`  | Относится конкретно к бизнес сущности?                                |
| `shared`    | Является общим переиспользуемым кодом во всём приложении?             |

---

## Структура каждого слоя

### App

Провайдеры, типы, стили

```bash
app/
    providers
    styles
    types
```

### Widgets

Самостоятельный блок использующий набор фичей/ентитис, который используется в `pages`

### Features

Конкретные фичи (расчёт доходности, авторизация, восстановление пароля и т.п.)

```bash
features/
    lib
    model
    components
```

### Entities

Общие модули (карточки, посты, формы)

```bash
entities/
    Authorization/
        api
        components
        lib/
            helpers
            hooks
        model/
            slise.ts
            types.ts

```

### Shared

Общие элементы приложения (компоненты, константы, стили и т.п.)

```bash
shared/
    api/
        AuthService.ts
    assets
    config
    const
    lib/
        context
        hooks
        store
        url
    types
    styles
    ui/
        TextInput.tsx
```