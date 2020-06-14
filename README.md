# Exercise Node - NodePOP

NodePOP is an advertisement API where you can look for different articles, filter and order them. You can also create new articles.

Example at https://nodepop.muutos.digital

## Installation

```shell

npm install

```

Rename .env.example to .env and setup the configuration

To initialize the DB with 10 example articles and a test user, run:

```shell

npm run install-db

```

To start the application for production run:

- To run only the server:

```shell
npm start
```

- To run the server and the microservice:

```shell
npm run run-all
```

To start the application for development run:

```shell
npm run dev
```

The API is securized with JWT. You can use the test user:

email: user@example.com

password: 1234

## EndPoints

- **/** --> From the web browser, you can see the Ads and query from the search bar.

- **/apiv1/createUser** --> Create a new user

- **/apiv1/login** --> Sending credentials in the body, you will receive a token.

- **/apiv1/ads** --> Endpoint to receive the answer in JSON format. See _API Methods_ available.

- **/apiv1/tags** --> Endpoint to look for available tags to search or use.

## API Methods

### Create a new user

```shell
POST /apiv1/createUser
```

**Body keys**

- email: String
- password: String

### Get your token

```shell
POST /apiv1/login
```

**Body keys**

- email: String
- password: String

### Get list of Ads

**You must add your token in any request as a query string, as a header or in the body ( token: your_token )**

```shell
GET /apiv1/ads
```

Answer example:

```json
[
  {
    "tags": ["mobile"],
    "_id": "5e9068f86aa02311383394ab",
    "name": "iPhone XS",
    "type": "buy",
    "price": 900,
    "picture": "iphonexs.jpg",
    "__v": 0
  }
]
```

### Post a new Ad

```shell
POST /apiv1/ads
```

**Body keys**

- name: String
- type: String (_sell_ or _buy_)
- price: Number
- picture: File
- tags: [String] See _Available Tags Endpoint_

Answer example:

```json
{
  "result": "ok",
  "ad": {
    "tags": ["motor", "work"],
    "_id": "5e90b851c30e21257c8a2f21",
    "name": "CarKit2",
    "type": "sell",
    "price": 400,
    "picture": "carkit.jpg",
    "__v": 0
  }
}
```

### Get Available Tags

```shell
GET /apiv1/tags
```

Answer example:

```json
{
  "tags": ["lifestyle", "mobile", "motor", "work"]
}
```

## Filter results

You can filter the results from both, the web browser and the API. For that, you can use the next queries parameters:

- **name**: searches for articles that contains the string.
- **type**: can only receive _sell_ or _buy_. Searches for articles with the selected type.
- **price**: can search for articles with a specific price or between a range of prices. Search examples: 500, 500-1000, -1000, 500-
- **tag**: searches for all articles that match the tag specified. Look at _Available tags_
- **limit**: by default, the answer is limited to 10 articles, you can change this by specifying a number.
- **skip**: you can skip results by specifying a number
- **sort**: you can sort by a field
- **fields**: you can specify wich field receive

If the search ends with no results, you will receive an empty array from the API and an information message with instructions from the web browser.
