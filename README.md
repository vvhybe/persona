<h1 align="center">Persona</h1>
<p align="center">Restful API that generate human profile</p>

### Dev Envirment:
we you run the API server it will serve in port 8000
> the api dev host: http://localhost:8000

### API Endpoints:
the api endpoints are 2:

- [GET] `profile`:
The profile endpoint generate random profile with random gender, age, country ...
```JSON
{
    "name": "Mylo",
    "age": 87,
    "sex": "male",
    "birthdate": "6/20/1936",
    "phone": "(44) 80195189",
    "email": "mylo@gmx.com.py",
    "address": {
      "country": "United Kingdom",
      "city": "Northwood",
      "street": 5445,
      "zip": 80057
    }
  }
```

- [POST] `persona`:
The persona endpoint takes a body, { `gender`, `amount` }.
it will generate a list of profile based on the `amount` given,
> generation of profiles limited to `100` profiles

In this example the body was: `gender: male` & `amount: 4`
```JSON
[
  {
    "name": "Reid",
    "age": 8,
    "sex": "male",
    "birthdate": "6/11/2015",
    "phone": "(62) 97436974",
    "email": "reid@gmx.com.pa",
    "address": {
      "country": "Indonesia",
      "city": "Kalimantan",
      "street": 7549,
      "zip": 64478
    }
  },
  {
    "name": "Jaret",
    "age": 59,
    "sex": "male",
    "birthdate": "5/4/1964",
    "phone": "(423) 27304101",
    "email": "jaret@gmx.com.py",
    "address": {
      "country": "Liechtenstein",
      "city": "Triesenberg",
      "street": 1157,
      "zip": 65378
    }
  },
  {
    "name": "Mylo",
    "age": 87,
    "sex": "male",
    "birthdate": "6/20/1936",
    "phone": "(44) 80195189",
    "email": "mylo@gmx.com.py",
    "address": {
      "country": "United Kingdom",
      "city": "Northwood",
      "street": 5445,
      "zip": 80057
    }
  },
  {
    "name": "Hywel",
    "age": 26,
    "sex": "male",
    "birthdate": "1/9/1997",
    "phone": "(880) 81900841",
    "email": "hywel@gmx.com.sv",
    "address": {
      "country": "Bangladesh",
      "city": "Bazar",
      "street": 3667,
      "zip": 2773
    }
  }
]
```




