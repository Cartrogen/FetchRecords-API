# Records API
A REST API developed in NodeJS that allows a user to fetch records based on certain conditions and criteria. Please follow the steps mentioned below in order to successfully consume the API.

## PART I - Download and build on local
In order to clone this repository in your local, please see github documentation - [Github clone repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 

You will need to download node on your local machine if you haven't already done so. In order to check whether you have node or not, go to you command prompt and type the following:

    node -v

If you do not see a valid version of node, please download it from this link - [Download NodeJS](https://nodejs.org/en/download/)

Once you have cloned the repository on to your local machine and have downloaded node, open up the project in an IDE of your choice and run the command mentioned below in your terminal in order to install all dependencies

    npm install

## Running the project
In order to run the project, go to your terminal window in your IDE and type:

    npm run dev

Please note that by default, the API runs on port 3000, which means that if you have any services running on that port, you must terminate it before starting up the API. If everthing has successfully installed, once you run the command mentioned above, you should see the following statements logged in your terminal. 

### _Server started on port 3000..._

### _DB connection successful, no errors encountered_

Once you see this, it means that your API is successfully up and running. 

## Consuming the API
Following is the default URL that must called in order to consume the API:

    http://localhost:3000/records/fetchRecords

It must be a post request with an object in JSON format in the body. If you have a front end application that is consuming the API, then you must use call the above mentioned URL from your application. If you do not have a front end application, you can call the API from postman. 

Download postman here if you do not already have it on your machine - [Postman download](https://www.postman.com/downloads/)

Once you have downloaded postman, you can paste the URL in there with appropriate request object and make a call to the API. 

### REQUEST OBJECT
-------------------
| Field        | Type           | Example       |
| -------------|:--------------:| --------:     |
| startDate    | String         | "2016-01-26"  |
| endDate      | String         | "2018-02-02   |
| minCount     | Number         |   2700        |
| maxCount     | Number         |   3000        |

### SAMPLE REQUEST OBJECT
```json
{
	"startDate": "2016-01-26",
	"endDate": "2018-02-02",
	"minCount": 2700,
	"maxCount": 3000
}
```

### RESPONSE OBJECT
-------------------
| Field        | Type            | Example           |
| -------------|:---------------:| -----------------:|
| code         | Number          |     0             |
| msg          | String          | "Success"         |
| records      | Array of objects| [{'key': 'value'}]|

### SAMPLE REQUEST OBJECT
```json
{
	"code": 0,
	"msg": "Success",
	"records": [
		{
			"key": "TAKwGc6Jr4i8Z487",
			"createdAt": "2017-01-28T01:22:14.398Z",
			"totalCount": 2800
		},
		{
			"key": "NAeQ8eX7e5TEg7oH",
			"createdAt": "2017-01-27T08:19:14.135Z",
			"totalCount": 2900
		}
	]
}
```
### Criteria and conditions to consume the API
1. All fields in the request object must be of type and format as mentioned in the above section.
2. The API will return records that meet the following 2 conditions:
	1. The createdAt date falls in between the input startDate and the user input endDate.
	2. The sum of all elements in the counts array in the database records falls in between the user input minCount and the user input maxCount
3. startDate must be less than or equal to endDate, otherwise the API will return an error.
4. minCount must be less than or equal to maxCount, otherwise the API will return an error
5. Code: 0 in response object means that the call to the API was successful and the subsequent retrieval of data from the database was successful.
6. You could get an empty array of records with a successful repsonse if there were no records matching your criteria. 

## Testing with Jest
All tests are written using the Jest testing framework. Documenation on Jest can found here - [Jest documentation](https://jestjs.io/). Note that in order to run the tests, you will have to first terminate your API and run the following command in your terminal in your IDE:

    npm run test --