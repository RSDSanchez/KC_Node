# NodePOP

NodePOP is an advertisment API where you can look for different articles, filter and order them. You can also vreate new articles.

## Installation

```shell

npm install

```

To initialize the DB with 10 example articles:

```shell

npm run install-db

```

## EndPoints

- **/** --> From the web browser, you can see the Ads and query from the search bar.

- **/apiv1/ads** --> Endpoint to receive the answer in JSON format. See API Methods available

- **/apiv1/tags** --> Endpoint to Llook for available tags to search or use

## API Methods

### Get list of Ads

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
- type: String (sell or buy)
- price: Number
- picture: String (image name saved in /public/images)
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

You can filter the results from both, the web browser and the API. For that, you can use the next querie parameters:

- **name**: searches for articles that contains the string.
- **type**: can only receive _sell_ or _buy_. Searches for articles with the selected type.
- **price**: can search for articles with a specific price or between a range of prices. Search examples: 500, 500-1000, -1000, 500-
- **tag**: searches for all articles thar match the tag specified. Look at _Available tags_
- **limit**: by default, the answer is limited to 10 articles, you can change this by specifying a number.
- **skip**: you can skip results by specifying a number
- **sort**: you can sort by a field
- **fields**: you can specify wicho field receive
