# News API

Get News list with user preferences and likes

## API Reference

#### POST Create New User

```http://localhost:8081
  POST v1/api/user/register
```

| Body       | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name`     | `string` | **Required**. name     |
| `email`    | `string` | **Required**. email    |
| `password` | `string` | **Required**. password |
| `username` | `string` | **Required**. username |

#### POST login

```http://localhost:8081
  POST v1/api/user/login
```

| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `password` | `string` | **Required**. password |
| `username` | `string` | **Required**. username |

#### GET ALL NEWS

```http://localhost:8081
  GET v1/api/news
```

| Parameter | Type           | Description           |
| :-------- | :------------- | :-------------------- |
| `Auth`    | `Bearer Token` | **Required**. API KEY |

#### GET ALL User Preferences

```http://localhost:8081
  GET v1/api/news/preferences
```

| Parameter | Type           | Description           |
| :-------- | :------------- | :-------------------- |
| `Auth`    | `Bearer Token` | **Required**. API KEY |

#### PUT User Preferences

```http://localhost:8081
  GET v1/api/news/preferences
```

| Parameter          | Type               | Description           |
| :----------------- | :----------------- | :-------------------- |
| `Auth`             | `Bearer Token`     | **Required**. API KEY |
| `Body preferences` | `Array of strings` | []                    |

#### GET ALL User Reads

```http://localhost:8081
  GET v1/api/news/reads
```

| Parameter | Type           | Description           |
| :-------- | :------------- | :-------------------- |
| `Auth`    | `Bearer Token` | **Required**. API KEY |

#### POST User Reads

```http://localhost:8081
  GET v1/api/news/reads
```

| Parameter    | Type               | Description           |
| :----------- | :----------------- | :-------------------- |
| `Auth`       | `Bearer Token`     | **Required**. API KEY |
| `Body reads` | `Array of strings` | []                    |

## Authors

- [@charan51](https://www.github.com/charan51)

## Installation

Install Node Packages

```bash
  npm run install
  npm run start
```
