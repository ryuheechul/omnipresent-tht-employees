# tht-employees

## Init/Install
`yarn`

## Run
`yarn start`

## Dev
> run with watching changes

`yarn dev`

## Test
`yarn test`

### with watching
`yarn test:watch`

## Endpoint

You can call the endpoint via `curl localhost:3000`

And the result would look like below (if pretty-printed)

<details><summary>Click to expand the API response</summary>
<p>

```json
[
  {
    "firstName": "Roy",
    "lastName": "Testerton",
    "dateOfBirth": "19/02/1990",
    "jobTitle": "Software developer",
    "company": "Test co",
    "country": {
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "timezones": [
        "...",
        "UTC+12:00"
      ],
      "name": "United States of America",
      "region": "Americas"
    }
  },
  {
    "firstName": "Lisa",
    "lastName": "Testora",
    "dateOfBirth": "11/07/1984",
    "jobTitle": "CTO",
    "company": "Test co",
    "country": {
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        }
      ],
      "timezones": [
        "...",
        "UTC",
        "..."
      ],
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "region": "Europe"
    },
    "additionalIdentifier": "lisatestora11071984"
  },
  {
    "firstName": "Simon",
    "lastName": "McTester",
    "dateOfBirth": "01/11/1987",
    "jobTitle": "Product manager",
    "company": "Mock industries",
    "country": {
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "timezones": [
        "UTC+05:30"
      ],
      "name": "India",
      "region": "Asia"
    },
    "additionalIdentifier": "simonmctester01111987"
  },
  {
    "firstName": "Selina",
    "lastName": "Testo",
    "dateOfBirth": "23/11/1972",
    "jobTitle": "Software developer",
    "company": "Mock industries",
    "country": {
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "timezones": [
        "UTC+05:30"
      ],
      "name": "India",
      "region": "Asia"
    },
    "additionalIdentifier": "selinatesto23111972"
  },
  {
    "firstName": "Tim",
    "lastName": "Mockman",
    "dateOfBirth": "12/11/1972",
    "jobTitle": "Software developer",
    "company": "Mock industries",
    "country": {
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "timezones": [
        "UTC+05:30"
      ],
      "name": "India",
      "region": "Asia"
    },
    "additionalIdentifier": "timmockman12111972"
  },
  {
    "firstName": "Melissa",
    "lastName": "Mocker",
    "dateOfBirth": "10/01/1982",
    "jobTitle": "Software developer",
    "company": "Mock industries",
    "country": {
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "timezones": [
        "UTC-12:00",
        "..."
      ],
      "name": "United States of America",
      "region": "Americas"
    }
  }
]
```

</p>
</details>


### Data structure for response

```jsonc
// list of employee
[
  // employee based on given ./data/employee.json
  {
    "firstName": "Lisa",
    "lastName": "Testora",
    // country data is enriched from just a country code to more data
    "country": {
      // data structure is same with https://restcountries.eu/rest/v2/alpha/{code}
      // except it cherry-picked only `languages`, `currencies`, `timezones`, `name`, `region`
      // from the bigger data set given from the API's response
      "languages": [
        // ...
      ],
      "currencies": [
        // ...
      ],
      "timezones": [
        // ...
      ],
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "region": "Europe"
      // ...
    },
    // in case of the employees in Europe and Asia, this additional identifier is fabricated
    "additionalIdentifier": "lisatestora11071984"
  }
  // ...
]

```

## Proposals

There is a separate page for proposals to improve and it can be found at [PROPOSALS.md](./PROPOSALS.md).
